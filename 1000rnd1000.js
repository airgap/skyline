function skyline(array) {
  var array2 = [];
  for(var i in array)
    array2[array[i]] = (array2[array[i]] || 0) + 1;
  array = [];
  for(var i in array2)
    for(var j = 0; j < array2[i]; j++)
      array.push(i*1);
    return array;
}

var rndarray = [];

for(var i = 0; i < 1000;i++)
  rndarray[i]=~~(Math.random()*1000);

console.log(rndarray)

var sorted = skyline(rndarray);

console.log(sorted)
