src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
function displayData(){
    return new Promise((res,rej)=>{
        console.log("Fetching Data")
        setTimeout(() => {
            $.get("https://jsonplaceholder.typicode.com/posts",(data)=>{
            res(data);
        }).fail(()=>{
            rej("Conncection Failed")
        })
            
        }, 3000);
    })
}
displayData.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})