const readline = require("readline");
let uName;
const advice = {
    1: ['The Creative works sublime success, furthering through perseverance.', 'The movement of heaven is full of power. Thus the superior man makes himself strong and untiring.', 'Hidden dragon. Do not act.', 'Dragon appearing in the field. It furthers one to see the great man.', 'All day long the superior man is creatively active. At nightfall his mind is still beset with cares. Danger. No blame.', 'Wavering flight over the depths. No blame.', 'Flying dragon in the heavens. It furthers one to see the great man.', 'Arrogant dragon will have cause to repent.', 'There appears a flight of dragons without heads. Good fortune.'],
    2: ['The Receptive brings about sublime success, furthering through the perseverance of a mare. If the superior man undertakes something and tries to lead, he goes astray; but if he follows, he finds guidance.', 'When there is hoarfrost underfoot, solid ice is not far off.', 'Straight, square, great. Without purpose, yet nothing remains unfurthred.', 'Hidden lines. One is able to remain persevering. If by chance you are in the service of a king, seek not works, but bring to completion.', 'A tied-up sack. No blame, no praise.', 'A yellow lower garment brings supreme good fortune.', 'Dragons fight in the meadow. Their blood is black and yellow.', 'Lasting perseverance furthers.'],
    3: ['Difficulty at the Beginning works supreme success, furthering through perseverance. Nothing should be undertaken. It furthers one to appoint helpers.', 'Hesitation and hindrance. It furthers one to remain persevering. It furthers one to appoint helpers.', 'Difficulties pile up. Horse and wagon part. He is not a robber; he wants to woo when the time comes. The maiden is chaste, she does not pledge herself. Ten years--then she pledges herself.', 'Whoever hunts deer without the forester only loses his way in the forest. The superior man understands the signs of the time and prefers to desist. To go on brings humiliation.', 'Horse and wagon part. Strive for union. To go brings good fortune. Everything acts to further.', 'Horse and wagon part. Bloody tears flow.'],
    4: ['Youthful Folly has success. It is not I who seek the young fool; the young fool seeks me. At the first oracle I inform him. If he asks two or three times, it is importunity. If he importunes, I give him no information. Perseverance furthers.', 'To make a fool develop it furthers one to apply discipline. The fetters should be removed. To go on in this way bring humiliation.', 'To bear with fools in kindliness brings good fortune. To know how to take women brings good fortune. The son is capable of taking charge of the household.', 'Take not a maiden who. When she sees a man of bronze, loses possession of herself. Nothing furthers.', 'Entangled folly bring humiliation.', 'In punishing folly it does not further one to commit transgressions. The only thing that furthers is to prevent transgressions.'],
    5: ['Waiting. If you are sincere, you have light and success. Perseverance brings good fortune. It furthers one to cross the great water.', 'Waiting in the meadow. IT furthers one to abide in what endures. No blame.', 'Waiting on the sand. There is some gossip. The end brings good fortune.', 'Waiting in the mud brings about the arrival of the enemy.', 'Waiting in blood. Get out of the pit.', 'One falls into the pit. Three univited guests arrive. Honor them, and in the end there will be good fortune.'],
    6: ['Conflict. You are sincere and are being obstructed. A cautious halt halfway brings good fortune. Going through to the end brings misfortune. It furthers one to seee the great man. It does not further one to cross the great water.', 'If one does not perpetuate the affair, there is a little gossip. In the end, good fortune comes.', 'One cannot engage in conflict; one returns home, gives waay. The people of his town, three hundred households, remain free of guilt.', 'To nourish oneself on ancient virtue induces perseverance. Danger. In the end, good fortune comes. If by chance you are in the service of a king, seek not works.', 'One cannot engage in conflict. One turns back and submits to fate, changes one\'s attitude, and finds peace in perseverance. Good fortune.', 'Even if by chance a leather belt is bestowed on one, by the end of a morning it will have been snatched away three times.'],
    7: ['The Army needs perseverance and a strong man. Good fortune without blame.', 'An army must set forth in proper order. If the order is not good, misfortune threatens.', 'In the midst of the army. Good fortune. No blame. The king bestows a triple decoration.', 'Perchance the army carries corpses in the wagon. Misfortune.', 'The army retreats. No blame.', 'There is game in the field. It furthers one to catch it. Without blame. Let the eldest lead the army. The younger transports corpses; then perseverance brings misfortune.', 'The great prince issues commands, founds states, vests families with fiefs. Inferior people should not be employed.'],
    8: ['Holding Together brings good fortune. Inquire of the oracle once again whether you possess sublimity, constancey, and perseverance; then there is no blame.', 'Hold to him in truth and loyalty; this is without blame. Truth, like a full earthen bowl, thus in the end good fortune comes from without.', 'Hold to him inwardly. Perseverance brings good fortune.', 'You hold together with the wrong people.', 'Hold to him outwardly also. Perseverance brings good fortune.', 'Manifestation of holding together. In the hunt the king uses beaters on three sides only and forgoes game that runs off in front. The citizens need no warning. Good fortune.', 'He finds no head for holding together. Misfortune.']
};
function randomNum(num){
    return Math.floor(Math.random() * num);
};
console.log('\n\nWelcome to the Mixed Fortunes app!');
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
function getLuckyNumber(){
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
};
function getFortune(){
    let fortunes = [];
    let hexes1 = randomNum(8) + 1;
    let hexes2 = randomNum(8) + 1;
    //console.log(hexes1 + ' ' + hexes2);
    for(let prop in advice){
        let indexOp = randomNum(advice[prop].length);
        let index = prop;
        if(hexes1 == hexes2 && (index == hexes1 || index == hexes2)){
            let indexOp2 = randomNum(advice[prop].length);
            while(indexOp2 === indexOp){
                indexOp2 = randomNum(advice[prop].length);
                //console.log(indexOp2 === indexOp);
            };
            fortunes.push(advice[prop][indexOp]);
            fortunes.push(advice[prop][indexOp2]);
            } else if(index == hexes1 || index == hexes2){
            fortunes.push(advice[prop][indexOp]);
        };

    };
        //console.log(index);
    
    //let advice = 'Dont rely on horoscopes. This is sage advice. Promise.';
    return fortunes.join('\n');
    
};
function callFortunes(){
    console.log('\nYour lucky number could be ' + getLuckyNumber() + '. \n');
    console.log('You may be ' + getZodiac() + '. \n');
    console.log('Receive this sage advice: \n' + getFortune());
};
callFortunes();