 setTimeout(function(){
            console.log("Work is Done");
    },5000);

    function x(hi) {
        console.log("x function is Called");
        hi();
    }
    
    x(function hi(){
        console.log("y function is called")
    })