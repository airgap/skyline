# README

Skyline Sort is a sorting algorithm with minimal time complexity, simple implementation, and high efficiency with dense source data.

Although Skyline benefits from a couple JavaScript-specific features, it is possible to implement it in other languages as well with only a bit of tweaking.

## Advantages

1. Time complexity of `O(n)`
2. Excels at processing data sets with many duplicates
3. Easy, concise implementation
4. Not technically unstable since only raw numbers can be processed (currently)

## Disadvantages

1. Implementations in certain languages may require too much memory when processing sparse data sets

## The code

```javascript
function skyline(a) {
  var b=[],c=0,i,j
  for(i of a)b[i]=~~b[i]+1
  for(i in b)for(;b[i]--;)a[c++]=i*1
  return a
}
```

## How it works

```javascript
//Function is passed an array of integers
function skyline(a) {

  //Declare temporary array, counter, and two indexes
  //a and b are arrays, c is a counter, i and j are indexes
  var b=[],c=0,i,j

  //Enumerate over original array
  //If b has no index of i, create it; if it does, add 1 to the value
  for(i of a)b[i]=~~b[i]+1

  //Enumerate over the temporary array. Copy over each index the number of times indicated by its value
  for(i in b)for(;b[i]--;)a[c++]=i*1

  //Array is sorted. Done.
  return a;
}
```


## NPM Usage

```bash
npm i skyline-sort
```
In your JavaScript file:
```javascript
var skyline = require('skyline-sort');
```

Note that the NPM version contains an input validation mechanism.

```javascript
module.exports = function (a) {
  var b=[],c=0,i,j,z;

  //This part right here. z declared above
  if(!Array.isArray(a)) throw "Parameter is not an array."
  for(z in a) if((a[z] == null) || (typeof a[z] == 'undefined') || isNaN(a[z])) throw `Array contains non-number ${a[z]} at position ${z}`;

  for(i of a)b[i]=~~b[i]+1
  for(i in b)for(;b[i]--;)a[c++]=i*1
  return a
}
```
