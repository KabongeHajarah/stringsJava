const mySelf ="beautiful";
console.log(mySelf[0]+ mySelf[1]+mySelf[2]+mySelf[3]);

const food = "I did not have appetite today";
let a="eat";

console.log(`I did not ${a} have appetite today` );


//Count how many times the following string appears in the string variable:
//1. "the" 2."s" 
const story= "She sells sea shells at the sea shore";
let Counts= (story.match(/the/g) || [].length);
console.log(Counts.length);
let letter=(story.match(/s/g) || [].length);
console.log(letter.length);

//Convert the following strings into the specified format:
//1. UpperCase: "CONfidant"
//2. LowerCase: "amazing", "beautiFUL"
//3. Title case "A busy office"
let x="CONfidant"
console.log(x.toUpperCase())
let y="amazing"
let z="beautiFUL"
console.log(y.toLowerCase(), z.toLowerCase())
let s="A busy office"
b="A Busy Office"
const TitleCase= s.replace({ s: s.charAt(0).toUpperCase() + s.charAt(2).toUpperCase() + s.charAt(6).toUpperCase()});
console.log(s);


// Using JavaScript, find the following words from the following strings:
// 1. "market"
 const string1 = "The lady went to the market with her sister";
 console.log(string1.search(/market/));
// 2. "season"
const string2 = "My favorite season is spring"
console.log(string2.search(/season/));

