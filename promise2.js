//                                   Promise2

function getData() {
    return new Promise(function (ok, notOk) {
            setTimeout(() => {
                    const Hassam = true;
                    if (Hassam != true) {
                            console.log("Get my Data")
                            ok("Your issue is resolved")
                    } else
                    console.log("Can't Get Data, An error occured")
                    notOk("Your issue is not resolved")
            }, 5000);
    })
}

getData().then((easy)=>{
    console.log("I'm Happy With the Code " + easy );

}).catch((message)=>{
    console.log("I'm Disapointed with Performance " + message)
})