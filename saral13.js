/*const d = { 'a': 50, 'b': 58, 'c': 56, 'd': 40, 'e': 100, 'f': 20 }
var l = []
var m_l = []
var k = []
for (i in d) {
  l.push(d[i])
  for (j of l) {
      if (d[i] > j) {
          m_l.push(d[i])
       }
      if (m_l.length == 3) {
          break
       }
  }
}
console.log(m_l)*/


var my_dict = { 'a': 50, 'b': 58, 'c': 56, 'd': 40, 'e': 100, 'f': 20 }
var max=0;
for(i in my_dict){
  var count=0;
  for (x in my_dict){
    if (my_dict[i]>my_dict[x]){
      max=my_dict[i]
      count++
    }
    if (count==3){
      console.log(max)
      break
    }
  }
}
