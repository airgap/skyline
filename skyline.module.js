exports = function(array) {
  var array2 = [];
  for(var j of array)
    array2[j] = (array2[j] || 0) + 1;
  array = [];
  var counter = 0;
  for(var i in array2)
    for(var j = 0; j < array2[i]; j++)
      array[counter++]=i*1;
    return array;
}
