# shortestPickingRoutes

How to run the program

- Clone this repository
- Install the application `npm install`
- Start the application `npm run start` running on PORT `8080`
- Go to http://localhost:8080/

How to run unit test

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
Result 

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

Time Efficiency Analysis

```js
function countVowels(word) {
    var vowels = ['a', 'i', 'e', 'o', 'u'];
    var count = 0;
		for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (word[i] === vowels[j]) {
                count++;
            }
        }
    }
    return count;
}

```
