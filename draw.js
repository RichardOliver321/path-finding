doWork();

async function doWork() {
    let graph = new Graph();

    graph.buildGraph(10,10);
    
    draw(graph);
    
    await dfs(graph, graph.startVertex);
    
}

async function draw(graph) {
    let vertices = graph.vertices;

    var marginTop = 30,
    marginLeft = 30,
    fieldSize = 40,
    totalSize = vertices.length * vertices[0].length;
    boardSize = totalSize*fieldSize;

    var board =[];

    for (let row = 0; row < vertices.length; row++) {
        
        for (let column = 0; column < vertices[0].length; column++) {
            board.push({
                x: row,
                y: column,
                vertex: vertices[row][column]});
        }
    }

    var div = d3.select("body")
    .append("div")
    .style("position", "fixed")
    .style("top", marginTop + "px")
    .style("left", marginLeft + "px")
    .style("width", boardSize + "px")
    .style("height", boardSize + "px");

    var svg = div.append("svg")
    .attr("width", boardSize + "px")
    .attr("height", boardSize + "px")
    .selectAll(".fields")
    .data(board)
    .enter()
    .append("g");

    svg.append("rect")
    .style("class", "fields")
    .style("class", "rects")
    .attr("x", function (d) {
        return d.x*fieldSize;
    })
    .attr("y", function (d) {
        return d.y*fieldSize;
    })
    .attr("width", fieldSize + "px")
    .attr("height", fieldSize + "px")
    .attr("stroke-width", "3")
    .attr("stroke", "rgb(0,0,0)")
    .style("fill",  function (d) {
        if(d.vertex.isCurrent)
            return "pink"
        if(d.vertex.isStartVertex)
            return "green"
        if(d.vertex.visited)
            return "blue"
        if(d.vertex.isEndVertex)
            return "red"
        return "white";
    });

}
