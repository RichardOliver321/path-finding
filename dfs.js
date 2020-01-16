async function dfs(graph, currentVertex) {

    currentVertex.visited = true;

    if(graph.endVertex.visited)
        return;

    draw(graph);
    await sleep()

    for (let edge of currentVertex.edges) {
        if(!edge.toVertex.visited)
           await dfs(graph, edge.toVertex);
    }
}