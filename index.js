const fs = require('fs');
const data = fs.readFileSync('./Sample Input.csv', 'utf8');
const routes = data.split('\r\n');
const {Graph} = require('./graph')
const {shortestRoute,totalDistance} = require('./lib')

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

//Find Shortest Route
console.log(totalDistance(g.adjacent,'A','B'))
console.log(totalDistance(g.adjacent,'C','D'))
console.log(totalDistance(g.adjacent,'C',''))
console.log(totalDistance(g.adjacent,'A',''))
console.log(totalDistance(g.adjacent,'A','D'))
console.log(totalDistance(g.adjacent,'E',''))
