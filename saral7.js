/*var myDict= {1: 'NAVGURUKUL',2: 'IN',3:{'A' : 'WELCOME','B' : 'To','C' : 'DHARAMSALA'}}
for (i in myDict){
    if ((typeof myDict[i]) === "object"){
        delete myDict[i]['A']
    }
}
console.log(myDict);*/


var myDict= {1: 'NAVGURUKUL',2: 'IN',3:{'A' : 'WELCOME','B' : 'To','C' : 'DHARAMSALA'}}
for (i in myDict){
    for (j in i){
        delete myDict[3]["A"]
    }
}
console.log(myDict)


//delete the nested object