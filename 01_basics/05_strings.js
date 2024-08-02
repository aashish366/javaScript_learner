const name="Aashish"
const repoCount=50

// console.log(name +" "+ repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('aashish-ak.com')
// console.log(gameName[5]);  //s
// console.log(gameName.__proto__);   // {}

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newStringOne="      Aashish         "
// console.log(newStringOne);
// console.log(newStringOne.trimLeft())
// console.log(newStringOne.trim());


const url="https://aashish.com/aashish%20gupta";

console.log(url.replace('%20',"-"));

console.log(url.includes('shiv'));

console.log(gameName.split('-'));

