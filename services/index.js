const {Graph} = require('../utils/graph')

//Shortest Distance Node
let shortestDistanceNode = (distances, visited) => {
    let shortest = null;
    for (let node in distances) {
        let currentIsShortest = shortest === null || distances[node] < distances[shortest];
        if (currentIsShortest && !visited.includes(node)) {
            shortest = node;
        }
    }
    return shortest;
};

//Nearest Node
function nearestNode(distances){
    let node = Object.entries(distances).sort(([,a],[,b]) => a-b).reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
    return Object.keys(node)[0]
}

//Find the Shortest Route from graph
let shortestRoute = (graph, startNode, endNode) => {

    //distance
    let distances = graph[startNode]

    // track paths using a hash object
    let parents = { endNode: null };
    for (let child in graph[startNode]) {
        parents[child] = startNode;
    }
    
    // collect visited nodes
    let visited = [];

    //Find nearest node 
    let node = nearestNode(distances)

    while (node) {
        let distance = distances[node];
        let children = graph[node]; 

        // for each of those child nodes:
        for (let child in children) {
            if (String(child) === String(startNode)) {
                continue;
            } else {
                let newdistance = distance + children[child];
                if (!distances[child] || distances[child] > newdistance) {
                    distances[child] = newdistance;
                    parents[child] = node;
                } 
            }
        }  
        visited.push(node);
        // move to the nearest non-visited node
        node = shortestDistanceNode(distances, visited);
    }
     
    // record the shortest path
    let shortestPath = [endNode];
    let parent = parents[endNode];
    while (parent) {
        shortestPath.push(parent);
        parent = parents[parent];
    }
    shortestPath.reverse();
     
    //this is the shortest path
    let results = {
        distance: distances[endNode],
        path: shortestPath,
    };
    // return the shortest path & the end node's distance from the start node
    return results;
};

//Total Distance
let totalDistance = (graph,startNode,endNode) => {
    if(endNode == '' || null) return shortestRoute(graph,'P',startNode).distance+shortestRoute(graph,startNode,'P').distance
    else{
        let pickupToStartNode = shortestRoute(graph,'P',startNode)
        let startNodeToEndNode = shortestRoute(graph,startNode,endNode)
        let endNodeToPickup = shortestRoute(graph,endNode,'P')
        return pickupToStartNode.distance+startNodeToEndNode.distance+endNodeToPickup.distance
    }    
}

//Create Graph
function createGraph(data){
    //Constructor 
    const g = new Graph();

    //Add vertices to graph
    g.addVertex("A");
    g.addVertex("B");
    g.addVertex("C");
    g.addVertex("D");
    g.addVertex("E");
    g.addVertex("P");

    //Create Graph
    data.forEach((vertex) => g.addEdge(vertex[0], vertex[1], vertex[2]));

    return g
}

function calculateTotalDistance(route){
    let startNode = route[0]
    let endNode = route[1]
    return totalDistance(g.adjacent,startNode,endNode)
}

module.exports = {
    shortestDistanceNode,
    nearestNode,
    shortestRoute,
    totalDistance,
    createGraph,
    calculateTotalDistance
}