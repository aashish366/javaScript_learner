const score=400;
//console.log(score);

const balance=new Number(100);
//console.log(balance);

// In the given above code, score is a primitive number, while balance is an object created using the Number constructor. 
// When you log score, it directly displays the value 400 since it's a primitive type. 
// On the other hand, balance is an instance of the Number object, so when you log it, 
// it shows as Number {100} to indicate that it's an object wrapping the primitive number 100. 
// While both represent numerical values, score is more efficient and simpler to use, 
// whereas balance provides additional methods and properties since it's an object.

// console.log(balance.toString().length); // It will print the length of the number
// console.log(balance.toFixed(2));   //It will give  that how many zero you want to put after  (.)point like if you give 3 then it will print 100.000 like this



const otherNumber=173.8966;
//console.log(otherNumber.toPrecision(4));

const hundreds=1000000;
// console.log(hundreds.toLocaleString('en-IN')); // the number will print as Indian style


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-10));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));

                                //   Difference Between Ceil and Floor

// The Math.ceil() and Math.floor() functions in JavaScript are used for rounding numbers, but they operate in opposite ways. 
// Math.ceil(4.1) rounds the number 4.1 up to the nearest integer, resulting in 5, 
// whereas Math.floor(4.9) rounds the number 4.9 down to the nearest integer, resulting in 4. 
// In essence, Math.ceil() always rounds up, and Math.floor() always rounds down, regardless of the decimal value.

// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);



// This code generates a random integer between the values of min (10) and max (20), inclusive. Here's how it works:

// Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
// Math.random() * (max - min + 1) scales this random decimal to a range that spans from 0 up to max - min + 1 (which is 11 in this case).
// Math.floor(...) rounds down this scaled random number to the nearest integer, giving you a value between 0 and 10.
// + min shifts this range from starting at 0-10 to starting at min (10), resulting in a final random number between 10 and 20.
// So, the result is a random integer between 10 and 20, inclusive.