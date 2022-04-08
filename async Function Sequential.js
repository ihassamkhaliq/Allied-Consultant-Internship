function timeOut(){
    setTimeout(() => {
       console.log("TimeOut") 
    }, 3000);
    }
    
    function getData(){
        return new Promise((res,rej)=>{
            setTimeout(() => {
               console.log("Get Data")
               res("Getting Data") 
            }, 3000);
        })
    }
    async function foo(){
            console.log("B");
            await getData();
            console.log("C");
            console.log("D");
        }
        console.log("A");
        foo();
        console.log("E");
        console.log("F");