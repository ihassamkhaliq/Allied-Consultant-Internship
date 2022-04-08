var arr = [0,1]
var concat;
var number = 6;
for(var i=2;i<number-1;i++)
{
    concat = arr[arr.length-1] + arr[arr.length-2]
    arr.push(concat);
}
console.log(arr)