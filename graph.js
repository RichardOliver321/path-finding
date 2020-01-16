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
                
                if(row == 3 && column == 5)
                    vertex.isStartNode = true;
                if(row == 8 && column == 6)
                    vertex.isEndNode = true;
               this.vertices[row].push(vertex);
            }
        }
        
        for (let row = 0; row < length; row++) {
            for (let column = 0; column < width; column++) {
               this.createNeighbours(this.vertices[row][column]);
            }
        }
    }

    createNeighbours(vertex) {
        for(let x = -1; x < 2; x++)
            for(let y = -1; y < 2; y++)
                if(this.doesVertexExist(vertex.x + x, vertex.y + y)){
                    vertex.edge.push(
                        new Edge(this.vertices[vertex.x + x][vertex.y + y], 
                            Math.floor((Math.random() * 100) + 1)));
                }
    }

    doesVertexExist(x, y) {
        return!(x >= this.length || x < 0 || y >= this.width || y < 0)
    }

    setStartNode(x, y) {
        this.vertices[x][y].isStartNode = true;
    }

    setEndNode(x, y) {
        this.vertices[x][y].isEndNode = true;
    }
}

class Vertex {
    constructor(x, y, isStartNode = false, isEndNode = false, edge = [] ) {
        this.visited = false;
        this.isStartNode = false;
        this.isEndNode = false;
        this.x = x;
        this.y = y;
        this.edge = edge;
    }
}

class Edge {
    constructor(toVertex, distance) {
        this.toVertex = toVertex;
        this.distance = distance;
    }
}

