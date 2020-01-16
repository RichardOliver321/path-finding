
async function bfs(graph) {

    let queue = [];
    queue.push(graph.startVertex);

    while(queue.length > 0) {
        let current = queue.shift();
        
        current.visited = true;
        current.isCurrent = true;

        if(current.isEndVertex) {
            draw(graph)
            return;
        }

        draw(graph);
        await sleep();
        
        current.isCurrent = false;
        for (let edge of current.edges) {
            if(!edge.toVertex.visited && !queue.includes(edge.toVertex)) {
                queue.push(edge.toVertex);    
            }
        }
    }
}