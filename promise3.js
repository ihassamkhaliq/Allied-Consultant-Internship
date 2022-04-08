let check = true;
let prom = new Promise((approved , disapproved)=>{
if (!check) {
    approved("You're Value is Matched Successfully")
} else {
    disapproved(Error)
}
})
prom.then((show)=>{
    console.log(show)
}).catch((unmatched)=>{
    console.log(unmatched)
})