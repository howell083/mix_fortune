const readline = require("readline");
let uName;


console.log('Welcome to the Mixed Fortunes app!');
/*
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", name => {
    uName = name;
    console.log(`Howdy, ${name}!`);
    rl.close();
});

*/
function getDate(){
    const dateStr = Date.now().toString();
    const lastTwo = Number.parseInt(dateStr.substr(dateStr.length - 2), 10);
    return lastTwo;
};
function getZodiac(){
    let sign = Math.ceil(Math.random() * 13);
    return sign;
}
function getFortune(){
    let advice = 'This is good advice. Promise.';
    return advice;
}
console.log(getDate());
console.log(getZodiac());
console.log(getFortune());