function skyline(a) {
  var b=[],c=0,i,j
  for(i of a)b[i]=~~b[i]+1
  for(i in b)for(;b[i]--;)a[c++]=i*1
  return a
}


var rndarray = [9,8,7,6,5,4,3,2,1];

for(var i = 0; i < 10;i++)
  rndarray[i]=~~(Math.random()*3);

console.log(rndarray)

var sorted = skyline(rndarray);

console.log(sorted)
