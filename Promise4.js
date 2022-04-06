
function testNumber(x) {
    return new Promise ((res,rej)=>{
             if(x>10){
                     res(`${x} it's a Great Number`);
             }else 
             rej(`${x} It's not a Great Number`);
    })
}
testNumber(8).then((message)=>{
     console.log(message)
}).catch((error)=>{
     console.error(error)
})