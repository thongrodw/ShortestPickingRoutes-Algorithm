# shortestPickingRoutes

- Clone this repository
- Install the application `npm install`
- Start the application `npm run start` running on PORT `8080`
- Go to http://localhost:8080/

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
