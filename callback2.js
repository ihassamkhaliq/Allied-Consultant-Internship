function display2(callback){
    setTimeout(() => {
        console.log("2");
        callback();
    }, 3000);
}
console.log("1");
display2(function(){
    console.log("3");
})