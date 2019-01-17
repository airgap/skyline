function skyline(array) {
  var array2 = [], counter = 0;
  for(var j of array)
    array2[j] = (array2[j] || 0) + 1;
  for(var i in array2)
    for(var j = 0; j < array2[i]; j++)
      array[counter++]=i*1;
  return array;
}


var rndarray = [];

for(var i = 0; i < 1000;i++)
  rndarray[i]=~~(Math.random()*1000);

console.log(rndarray)

var sorted = skyline(rndarray);

console.log(sorted)
