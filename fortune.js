const readline = require("readline");
console.log('Welcome to the Mixed Fortunes app!');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", name => {
    console.log(`Howdy, ${name}!`);
    rl.close();
});