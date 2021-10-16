const fs = require('fs');
const data = fs.readFileSync('./Sample Input.csv', 'utf8');
const routes = data.split('\r\n');
const {Graph} = require('./graph')
// const {shortestRoute} = require('./lib')

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
routes.forEach((vertex) => g.addEdge(vertex[0], vertex[1], vertex[2]));

//Shortest Visted Node
let shortestDistanceNode = (distances, visited) => {
    // create a default value for shortest
    let shortest = null;
    
    // for each node in the distances object
    for (let node in distances) {
        // if no node has been assigned to shortest yet
        // or if the current node's distance is smaller than the current shortest
        let currentIsShortest = shortest === null || distances[node] < distances[shortest];
            
        // and if the current node is in the unvisited set
        if (currentIsShortest && !visited.includes(node)) {
            // update shortest to be the current node
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

    // console.log("start node: " +startNode)
    // console.log(distances)

    while (node) {
        let distance = distances[node];
        let children = graph[node]; 

        // console.log("nearest node: "+ node)
        // console.log("total distance: " +distance)
        // console.log()
        // console.log("current node: " + node)
        // console.log(children)
        
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


// console.log(shortestRoute(g.adjacent,'A','C'))
console.log(shortestRoute(g.adjacent,'P','A'))


