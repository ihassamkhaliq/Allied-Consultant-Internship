//         Task#1

var string = "The LHR is in Pakistan.the LHR is a beautiful city, i live in LHR";
console.log(string)
var arr = string.split(" ");
console.log(arr);
var replaceWord = "LHR"
for (var index = 0; index <= arr.length - 1; index++) {

if (arr[index] == "LHR") 
    arr[index] = "KHI";

}
console.log(arr);
console.log(arr.join(" "));
