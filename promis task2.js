const p = new Promise((res, rej) => {
    var a = true;
    if (a) {
        setTimeout(() => {
            res(true);
        }, 3000);
    } else
        rej("Error")
})
p.then((result1) => {
    console.log(result1)
    return new Promise((res,rej) => {
        if (!result1) {
            res("Get Connection")
        }else
        rej("System Failed Error 404")
    }).then((res)=>{
        console.log(res)
        return res;
    }).then((res)=>{
        console.log(res);
    })
}).catch((error) => {
    console.log(error);
})