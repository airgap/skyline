var skyline = require('../skyline.module.js');

var rndarray = [];

for(var i = 0; i < 100;i++)
  rndarray[i]=~~(Math.random()*1000);

console.log(rndarray)

var sorted = skyline(rndarray);

console.log(sorted)
