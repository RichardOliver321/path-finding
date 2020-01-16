class Graph {
    constructor() {
         this.vertices = null;
    }

    buildGraph(length, width) {
        this.length = length;
        this.width = width;

        this.vertices = [];
        for (let row = 0; row < length; row++) {
            this.vertices[row] = [];
            for (let column = 0; column < width; column++) {
                let vertex = new Vertex(row, column);
               this.vertices[row].push(vertex);
            }
        }
        
        for (let row = 0; row < length; row++) {
            for (let column = 0; column < width; column++) {
               this.createNeighbours(this.vertices[row][column]);
            }
        }

        this.setStartVertex(4, 7);
        this.setEndVertex(2,8);
    }

    createNeighbours(vertex) {
        for(let x = -1; x < 2; x++)
            for(let y = -1; y < 2; y++)
                if(this.doesVertexExist(vertex.x + x, vertex.y + y)){
                    vertex.edges.push(
                        new Edge(this.vertices[vertex.x + x][vertex.y + y], 
                            Math.floor((Math.random() * 100) + 1)));
                }
    }

    reset() {
        for (let row = 0; row < length; row++) {
            for (let column = 0; column < width; column++) {
               this.vertices[row][column].visited = false;
            }
        }
    }

    doesVertexExist(x, y) {
        return!(x >= this.length || x < 0 || y >= this.width || y < 0)
    }

    setStartVertex(x, y) {
        this.startVertex = this.vertices[x][y];
        this.startVertex.isStartVertex = true;
    }

    setEndVertex(x, y) {
        this.endVertex = this.vertices[x][y];
        this.endVertex.isEndVertex = true;
    }
}

class Vertex {
    constructor(x, y, isStartVertex = false, isEndVertex = false, edges = [] ) {
        this.visited = false;
        this.isStartVertex = false;
        this.isEndVertex = false;
        this.isCurrent = false;
        this.x = x;
        this.y = y;
        this.edges = edges;
    }
}

class Edge {
    constructor(toVertex, distance) {
        this.toVertex = toVertex;
        this.distance = distance;
    }
}

