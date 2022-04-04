                        // Practice

var x = 10;
function f(x, arr=[]){
return arr.push(x)
}

console.log("f(1)");
console.log(f(3));

function f(x,y,z=x+y)
{
console.log(`${x},${y},${z}`);
}
f(5,10)
