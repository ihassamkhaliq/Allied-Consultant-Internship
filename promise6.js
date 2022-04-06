var bioData = {
    firstName: "Muhammad",
    middleName: "Hassam",
    lastName: "Khaliq",
    Age: 23,
    fullName: function() {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    language: "Eng",
    set lang(value) {
        this.language = value;
    },
};
bioData.lang = "urdu";
var value = true;
const showData = new Promise((res,rej)=>{
   
    if (value) {
        setTimeout(()=>{
            res(bioData.firstName);
        },4000)
    } else {
        rej("System Crashed");
    }
})
showData.then((result)=>{
    setTimeout(() => {
        console.log(result);    
    }, 3000);
    return bioData.middleName;
}).then((result1)=>{setTimeout(() => {
    console.log(result1);
}, 2000);
    return bioData.lastName;
}).then((result2)=>{
    setTimeout(() => {
        console.log(result2);    
    }, 1000);
    return bioData.language;
}).then((result3)=>{
    console.log(result3);
    return bioData.fullName();
}).then((result4)=>{
    console.log(result4);
}).catch((error)=>{
        console.log(error);
})