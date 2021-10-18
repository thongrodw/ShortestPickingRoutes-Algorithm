# shortestPickingRoutes

## How to run the program

- Clone this repository
- Install the application `npm install`
- Start the application `npm run start` running on PORT `8080`
- Go to http://localhost:8080/

## How to run unit test

- Go to directory `/test/test.js`
- Run `node test.js`

```js
//Construct Graph
const g = new createGraph(data)

function calculateTotalDistance(route){
    let endNode
    let startNode = route[0]
    if(route[1] == undefined) endNode = ''
    else endNode = route[1]
    return totalDistance(g.adjacent,startNode,endNode)
}

console.log(calculateTotalDistance('A'))
console.log(calculateTotalDistance('B'))
console.log(calculateTotalDistance('C'))
console.log(calculateTotalDistance('D'))
console.log(calculateTotalDistance('E'))
console.log(calculateTotalDistance('E'))
console.log(calculateTotalDistance('AB'))
console.log(calculateTotalDistance('AC'))
console.log(calculateTotalDistance('AD'))
console.log(calculateTotalDistance('AE'))
console.log(calculateTotalDistance('BC'))

```
## Unit Test Result 

```js
10
12
10
6
8
8
13
14
11
10
17

```

## Time Efficiency Analysis

```js

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

```
