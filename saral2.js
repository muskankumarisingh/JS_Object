var readlineSync = require('readline-sync');
var user= readlineSync.questionInt('How many more times? ');
var d = {}
for (let i = 0; i <= user; i++){
    d[i] = i *i
}
console.log(d);