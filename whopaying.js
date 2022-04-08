// Who's Paying

var names = ["Hassam","Abdullah","Haris","Yousaf"]

function whoPay(){
var numberOfPeople = names.length;
var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
var randomPerson = names[randomPersonPosition];
return  console.log(randomPerson + " is Paying");
}
whoPay();
