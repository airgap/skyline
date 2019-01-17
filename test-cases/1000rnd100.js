var skyline = require('../skyline.module.js');

var rndarray = [];

for(var i = 0; i < 1000;i++)
  rndarray[i]=~~(Math.random()*100);

console.log(rndarray)

var sorted = skyline(rndarray);

console.log(sorted)
