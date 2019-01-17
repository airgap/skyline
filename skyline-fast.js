function skyline(array) {
  var array2 = [];
  for(var i in array) {
    var j = array[i];
    array2[j] = (array2[j] || 0) + 1;
  }
  array = [];
  for(var i in array2)
    for(var j = 0; j < array2[i]; j++)
      array.push(i*1);
    return array;
}
