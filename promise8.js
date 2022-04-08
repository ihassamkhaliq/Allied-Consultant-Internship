function getConnection(value){ 
    return new Promise((res,rej)=>{
        if(!value){
            res("Connection Built Successfully")
        }else
        rej("Connection Lost")

})}

let connected = (result)=>{
    console.log(result);
}

let connectionLost = (error)=>{
    console.log(error);
}
getConnection(false).then(connectionLost);
getConnection(true).catch(connected);