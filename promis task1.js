const data = new Promise((res, rej) => {
    var a = true;
    if (a) {
        res("Get Connection")
    } else
        rej("Error Occured")
})

data.then((result) => {
    console.log(result)
    return "Get Data"
}).then((result1) => {
    console.log(result1)
    return new Promise((res) => {
        res("Format Data")
    }).then((result2) => {
        console.log(result2)
        return new Promise((res) => {
            res("Display Data");
        }).then((result3) => {
            console.log(result3)
        })
    })
}).catch((error) => {
    console.log(error);
})