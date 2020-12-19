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
    let zodiac = '';
    switch(sign){
        case 1:
            zodiac = 'a Capricorn';
            break;
        case 2:
            zodiac = 'an Aquarius';
            break;
        case 3:
            zodiac = 'a Pisces';
            break;
        case 4:
            zodiac = 'an Aries';
            break;
        case 5:
            zodiac = 'a Taurus';
            break;
        case 6:
            zodiac = 'a Gemini';
            break;
        case 7:
            zodiac = 'a Cancer';
            break;
        case 8:
            zodiac = 'a Leo';
            break;
        case 9:
            zodiac = 'a Virgo';
            break;
        case 10:
            zodiac = 'a Libra';
            break;
        case 11:
            zodiac = 'a Scorpio';
            break;
        case 12:
            zodiac = 'a Sagittarius';
            break;
        case 13:
            zodiac = 'an unlucky Cat';
            break;
    };
    return zodiac;
}
function getFortune(){
    let advice = 'Dont rely on horoscopes. This is sage advice. Promise.';
    return advice;
}
console.log('Your lucky number could be ' + getDate());
console.log('You may be ' + getZodiac());
console.log(getFortune());