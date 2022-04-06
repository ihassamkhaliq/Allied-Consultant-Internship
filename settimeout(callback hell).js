const bioData = {
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

const bioData1 = (callBack) => {
    setTimeout(() => {
        console.log(bioData.firstName);
        setTimeout(() => {
            console.log(bioData.middleName);
            setTimeout(() => {
                console.log(bioData.lastName);
                setTimeout(()=>{
                    console.log(bioData.language)
                    callBack();
                },2000);
            }, 2000);
        }, 2000);
    }, 2000);
};

const bioData2 = () => {
    setTimeout(() => {
        console.log(bioData.fullName());
    }, 2000);
};

bioData1(bioData2);