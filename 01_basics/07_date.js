let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreateDate=new Date(2024,0,23);
// let myCreateDate=new Date(2023,0,23,5,3);
// let myCreateDate=new Date("2023-01-14");
let myCreateDate=new Date("01-14-2023");
// console.log(myCreateDate.toLocaleString());

let myTimeStamp=Date.now();//This line creates a variable myTimeStamp and assigns it the current time in milliseconds since January 1, 1970 (also known as the Unix Epoch). 
                           //This value is a large integer representing the exact current time.

// console.log(myTimeStamp);  //This prints the value of myTimeStamp to the console, showing the current time in milliseconds.

//console.log(myCreateDate.getTime());  //This line assumes you have a Date object called myCreateDate. 
                                      //The getTime() method is called on this object to get the time in milliseconds since January 1, 1970, just like Date.now(). 
                                      //This is then printed to the console. (Note: For this line to work, myCreateDate must be a valid Date object. 
                                      //If it's not defined, this will cause an error.)



//console.log(Math.floor(Date.now()/1000)); //This line calculates the current time in seconds (instead of milliseconds) by dividing the value from Date.now() by 1000. 
                                          //The Math.floor() function then rounds this value down to the nearest whole number, and the result is printed to the console. 
                                          //This represents the current Unix timestamp in seconds, which is often used in programming for time-related calculations.

let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// console.log(`${newDate.getFullYear()} and the time`);

// newDate.toLocaleString('default',{
//     weekday:"long",
// })

