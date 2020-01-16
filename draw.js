
let graph = new Graph();

graph.buildGraph(10,10);

draw(graph)

function draw(graph) {
    var marginTop = 30,
    marginLeft = 30,
    fieldSize = 40,
    boardSize = 100*fieldSize;

    var board =[];

    let vertices = graph.vertices;
    for (let row = 0; row < vertices.length; row++) {
        
        for (let column = 0; column < vertices.length; column++) {
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
        console.log("hello:", d);
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
        if(d.vertex.isStartNode)
            return "green"
        if(d.vertex.isEndNode)
            return "red"
        return "white";
    });

}