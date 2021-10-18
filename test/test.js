const {importCsv} = require('../utils/csvHandler')
const {Graph} = require('../utils/graph')
const {shortestRoute,totalDistance, createGraph} = require('../services')

const path = './Sample Input.csv'
const data = importCsv(path)

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