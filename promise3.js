let check = true;
let prom = new Promise((approved , disapproved)=>{
if (check) {
    approved("You're Value is Matched Successfully")
} else {
    disapproved("You're Value is Not Matched")
}
})

console.log(prom);