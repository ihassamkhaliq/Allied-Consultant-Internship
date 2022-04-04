            // Fizz Buzz Challenge

var arr = [];
var getNumber = prompt("Give me the Number")
if (getNumber>= 1 && getNumer<=100) 
{
    for (i = 0; i <= getNumber; i++) 
    {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("Buzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        }
        console.log(i);
    }
}else 
alert("Please Enter an Invalid Number")