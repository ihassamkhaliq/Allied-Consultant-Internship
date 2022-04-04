//                 Arrow Function

var a = ()=> {
        for (var i = 0; i < 100000000; i++) 
        {}}
    console.log("Before");
    console.time();
    a();
    console.timeEnd();
    console.log("After");
