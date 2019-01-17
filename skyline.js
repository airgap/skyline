function skyline(a) {
  var b = [];
  for(var i in a) {
    var j = a[i];
    b[j] = (b[j] || 0) + 1;
  }
  a = [];
  var c = 0;
  for(var i in b)
    for(var j = 0; j < b[i]; j++)
      a[c++]=i*1;
    return a;
}


var rndarray = [];

for(var i = 0; i < 1000;i++)
  rndarray[i]=~~(Math.random()*1000);

console.log(rndarray)

var sorted = skyline(rndarray);

console.log(sorted)
