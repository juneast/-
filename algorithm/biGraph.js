const makeGraph = (vertex) => {
    let graph = {
        
    }
    for(let node of vertex) {
        if(!graph[node[0]]) graph[node[0]] = [node[1]]
        else graph[node[0]] = [...graph[node[0]], node[1]]
        
        if(!graph[node[1]]) graph[node[1]] = [node[0]]
        else graph[node[1]] = [...graph[node[1]], node[0]]
    }
    return graph
}