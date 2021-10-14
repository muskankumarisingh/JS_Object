const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  
  for (let x in person) {
    var txt;
    txt += person[x];
  }
console.log(person)  