module.exports = function (a) {
  var b=[],c=0,i,j,z;
  if(!Array.isArray(a)) throw "Parameter is not an array."
  for(z in a) if((a[z] == null) || (typeof a[z] == 'undefined') || isNaN(a[z])) throw `Array contains non-number ${a[z]} at position ${z}`;
  for(i of a)b[i]=~~b[i]+1
  for(i in b)for(;b[i]--;)a[c++]=i*1
  return a
}
