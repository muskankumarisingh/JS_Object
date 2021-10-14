var mainString="My name is muskan, and my friend’s name is soni"
var list = mainString.split(" ")
var subString = "is"
var count = 0
for (var i = 0;i < list.length;i++){
    if (list[i] == subString){
        count ++
    }
         
}   
console.log("The substring is there ",count," times in the main string.");