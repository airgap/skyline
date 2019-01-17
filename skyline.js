function skyline(array) {
  var array2 = [], counter = 0, i, j;
  for(i of array)
    array2[i] = (array2[i] || 0) + 1;
  for(i in array2)
    for(j = 0; j < array2[i]; j++)
      array[counter++]=i*1;
  return array;
}

var rndarray = [];

for(var i = 0; i < 1000;i++)
  rndarray[i]=~~(Math.random()*1000);

console.log(rndarray)

var sorted = skyline(rndarray);

console.log(sorted)
