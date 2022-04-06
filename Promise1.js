//                                   Promise1

function getData() {
        return new Promise(function (resolve, reject) {
                setTimeout(() => {
                        const error = true;
                        if (error != true) {
                                console.log("Get my Data")
                                resolve("Your issue is resolved")
                        } else
                        console.log("Can't Get Data, An error occured")
                        reject("Your issue is not resolved")
                }, 5000);
        })
}

getData().then(()=>{
        console.log("I'm Happy With the Code");

}).catch(()=>{
        console.log("I'm Disapointed with Performance")
})