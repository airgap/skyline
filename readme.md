# README

Skyline Sort is a sorting algorithm with minimal time complexity, simple implementation, and high efficiency with dense source data.

Although Skyline benefits from a couple JavaScript-specific features, it is possible to implement it in other languages as well with only a bit of tweaking.

## Advantages

1. Time complexity of `O(2N)`
2. Excels at processing data sets with many duplicates
3. Easy, concise implementation
4. Not technically unstable since only raw numbers can be processed (currently)

## Disadvantages

1. Implementations in certain languages may require too much memory when processing sparse data sets

## The code

```javascript
function skyline(array) {
  var array2 = [];
  for(var j of array) {
    array2[j] = (array2[j] || 0) + 1;
  }
  array = [];
  var counter = 0;
  for(var i in array2)
    for(var j = 0; j < array2[i]; j++)
      array[counter++]=i*1;
    return array;
}
```

## How it works

```javascript
//Function is passed an array of integers
function skyline(array) {

  //Temporary array is created
  var array2 = [];

  //Enumerate over original array
  for(var j of array)
    //If array2 has no index of j, create it; if it does, add 1 to the value
    array2[j] = (array2[j] || 0) + 1;

  //Clear the original array
  array = [];
  var counter = 0;

  //Enumerate over the temporary array. Push each index the number of times indicated by its value
  for(var i in array2)
    for(var j = 0; j < array2[i]; j++)
      array[counter++]=i*1;

  //Array is sorted. Done.
  return array;
}
```
