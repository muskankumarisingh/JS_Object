/*var readline = require('readline-sync');
let n =readline.question('Enter the property name:');
const dict={"name":"Raju", "marks":56}
for (i in dict){
if (i==n){
console.log("exists");
break;
}
else{
console.log("not exist");
break;
}
}*/



var readline = require('readline-sync');
let n =readline.question('Enter the property name:');
const dict={"name":"Raju", "marks":56}
var response="";
for (i in dict){
    if (dict.hasOwnProperty(num)){
        console.log("exists");
    }
    else{
        console.log("not exists");
    }
}



