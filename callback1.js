function displayName(name){
    console.log(`Hello ${name}`);
}

function getData(callback){
    var name = prompt("What is Your Name");
    callback(name);
}

getData(displayName);