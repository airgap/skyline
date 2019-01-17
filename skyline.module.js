exports = function (a) {
  var b=[],c=0,i,j
  for(i of a)b[i]=~~b[i]+1
  for(i in b)for(;b[i]--;)a[c++]=i*1
  return a
}
