//Assignment 1 - You have the following IP. Make a RegExp Pattern to match this IP

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let reOne = /\d{4}:\w{2}\d:\w{4}:\w{4}:\w{4}:\w{4}:\w{4}:\w{4}/ig
console.log(ip.match(reOne));

//------------------------------------------------------------------------

// Assignment 2 - You have a variable that contains some names , 
// We need to create a RegExp Pattern to match names beginning with Os and ending with O .

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/Os\d+O/ig));

// Output
// ['Os10O', 'OsO', 'Os100O']

//------------------------------------------------------------------------

// Assignment 3 - You have a variable that contains a specific phone number
// It is required to create a RegExp Pattern to match this phone

let phone = "+(995)-123 (4567)";

console.log(phone.match(/\(\d{3}\)-\d{3}\s\(\d{4}\)/g));

//------------------------------------------------------------------------

// Assignment 4 - Have Regular Expression Pattern
// It is required to divide it into parts and explain each part in a separate comment

let reTwo = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// i => case sensitve flag
// https? => Shows all urls with http or https
// :\/\/ => Chr. Insertion
// (?:[-\w]+\.)? => insertion of - , a letter|num , a + sign and a point if found 
// ([-\w]+)\.\w+ => insertion of - , a letter|num , a point , and an unlimited letter|num
// (?:\.\w+)?\/?.* => insertion of a point , and an unlimited letter|num if found 

//------------------------------------------------------------------------

// Assignment 5 - You have a bunch of dates
// Only one pattern is required that matches all these dates

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reThree = /\d{1,2}(\s)?\D(\s)?\d{1,2}(\s)?\D(\s)?\d{2,4}/g; // Write Pattern Here

console.log(date1.match(reThree)); // "25/10/1982"
console.log(date2.match(reThree)); // "25 - 10 - 1982"
console.log(date3.match(reThree)); // "25 10 1982"
console.log(date4.match(reThree)); // "25 10 82"

//------------------------------------------------------------------------

//Assingment 6 - Create One RegExp That Shows All 5 URLs

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/article.php?id=100&cat=topics';

let re = /(https?:\/\/(www.)?)?\w+\.\w+(:\w+\/\w+.\w+\D\w+\D\w+\D\w+\D\w+)?/ig;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));