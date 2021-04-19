// NAME: MUHAMMAD RAFAY KHAN
// Roll No: 19315
// EMAIL: rafayk209@gmail.com
// Contact:0300-9239121
// Assignment of: Javascript
// Submited to: Saylani SMIT
// Trainer:Sir Muhammad Ali Mughal
// Date: 19 April,2021


// ----------------------------------------------- Chapter 26 to 30 ----------------------------------------------- 

// var num = Number(prompt("Enter number"));
// var roundOfNumber = Math.round(num);
// var floorNumber = Math.floor(num);
// var ceilNumber = Math.ceil(num);
// document.write("<br>" + "Number: " + num);
// document.write("<br>" + "Round off value: " + roundOfNumber);
// document.write("<br>" + "Floor value: " + floorNumber);
// // document.write("<br>" + "Ceil value: " + ceilNumber);
// ___________________________________________________________________________________

// var num = Number(prompt("Enter number"));
// var roundOfNumber = Math.round(num);
// var floorNumber = Math.floor(num);
// var ceilNumber = Math.ceil(num);
// document.write("<br>" + "Number: " + num);
// document.write("<br>" + "Round off value: " + roundOfNumber);
// document.write("<br>" + "Floor value: " + floorNumber);
// document.write("<br>" + "Ceil value: " + ceilNumber);

// ___________________________________________________________________________________

// var number = Number(prompt("Enter any number"));
// var absoluteNumber = Math.abs(number);
// document.write("<br>"+ "The absolute value of " + number +" is " + absoluteNumber);

// ___________________________________________________________________________________

// var number = Math.random();
// number = (number*6)+1;
// number = Math.floor(number);
// document.write("<br>" + "Random dice value: " + number);

// ___________________________________________________________________________________

// var coin = Math.random();
// coin = (coin*2);
// coin = Math.ceil(coin);
// if (coin === 2){
//     document.write("<br>"+ coin);
//     document.write("<br>"+ "Random coin value: Heads");
// }
// else{
//     document.write("<br>"+ coin);
//     document.write("<br>"+ "Random coin value: Tails");
// }

// ___________________________________________________________________________________

// var number = Math.random();
// number = (number * 99);
// number = Math.ceil(number);
// if (number === 1) {
//     document.write("<br>" + "Random number between 1 to 100: " + number + 1)
// }
// else {

//     document.write("<br>" + "Random number between 1 to 100: " + number)
// }

// ___________________________________________________________________________________
// var weight = prompt("Enter your weight");
// document.write("<br>" + "The weight of user is "+ weight);

// ___________________________________________________________________________________

// var secretNumber = Math.ceil(Math.random() * 10);
// var guesNumber = Number(prompt("Enter number between number 1 to 10"));
// if (secretNumber === guesNumber) {
//     document.write("<br>" + "Congrats! You are right");
// }
// else{
//     document.write("<br>" + "Try again");
// }

// ------------------------------------------- Chapter 31 to 34 ------------------------------------------

// var date = new Date();
// document.write("<br>" + date);

// ___________________________________________________________________________________

// var date = new Date();
// var indexOf = date.getMonth();
// var months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
// document.write("<br>"+ "Current month: " + months[indexOf]);

// ___________________________________________________________________________________

// var date = new Date();
// var indexOf = date.getDay();
// var days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
// document.write("<br>"+ "Today is " + days[indexOf]);

// ___________________________________________________________________________________

// var date = new Date();
// var indexOf = date.getDay();
// var days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];

// if(indexOf === 0 || indexOf === 6){
//     document.write("<br>" + "It's fun day");
// }
// else{

//     document.write("<br>"+ "Today is " + days[indexOf]);
// }

// ___________________________________________________________________________________

// var date = new Date();
// var today = date.getDate();
// if (today < 16){
//     document.write("<br>"+"First fifteen days of the month");
// }
// else{
//     document.write("<br>"+"Last days of the month");
// }

// ___________________________________________________________________________________

// var date = new Date();
// var unixTime = date.getTime();
// document.write("<br>" + "Current date: " + date);
// document.write("<br>" + "Elapsed milliseconds since January 1, 1970: " + unixTime);
// document.write("<br>" + "Elapsed Minutes since January 1, 1970: " + unixTime/(1000*60*60));

// ___________________________________________________________________________________

// var date = new Date();
// var time= date.getHours();
// if(time < 12) {
//     alert("It's AM")
// }
// else {
//     alert("It's PM")
// }

// ___________________________________________________________________________________
// var laterDate = new Date(2020,12,31,00,00,00);
// document.write(laterDate);


// ___________________________________________________________________________________
// var firstRamdan = new Date("2021/04/14 0:0:0"); 
// var currentDate = new Date();
// var diffrence = currentDate.getTime() - firstRamdan.getTime();
// var daysPassed = diffrence / (1000*60*60*24);
// daysPassed = Math.floor(daysPassed);
// document.write("<br>" + daysPassed + " days haved passed since 1st Ramadan, 2021");;

// ___________________________________________________________________________________
// var currentDate = new Date();
// var givenDate = new Date("2021/04/19 00:00:00");
// var diffrence = currentDate.getTime() - givenDate.getTime();
// diffrence /= (1000*60);
// document.write("<br>" + "On reference date " + currentDate + ", " + Math.round(diffrence) + " seconds had passed since begining of 2021");


// ___________________________________________________________________________________
// var date = new Date();
// document.write("<br>" + "Current Date: " + date);
// var hour = date.getHours();
// hour--;
// date.setHours(hour);
// document.write("<br>" + "1 hour ago, it was " + date);

// ___________________________________________________________________________________
// var date = new Date();
// document.write("<br>" + "Current Date: " + date);
// var year = date.getFullYear();
// year -= 100;
// date.setFullYear(year);
// document.write("<br>" + "100 year back, it   was " + date);

// ___________________________________________________________________________________
// var UserAge = parseInt(prompt("Enter your age"));
// var date = new Date();
// var currentYear = date.getFullYear();
// var birthYear = currentYear - UserAge;
// document.write("<br>"+ "Your age is " + UserAge);
// document.write("<br>"+ "Your birth year is " + birthYear);


// ----------------------------------------Chapter 35 to 38----------------------------------------------

// function showCurrentDate(){
//     let date = new Date();
//     document.write(date);
// }
// showCurrentDate();

// ____________________________________________________________________________________
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// greeting(firstName,lastName);
// function greeting(fname,lname){
//     let fullName = fname.concat(" ",lname);
//     document.write("<br>" + "Hello " + fullName);
// }


// ___________________________________________________________________________________
// var num1 = Number(prompt("Enter fist number"));
// var num2 = Number(prompt("Enter second number"));
// var total = add(num1,num2);
// document.write("<br>" + "Sum of " + num1 + " and " + num2 + " is "+ total);
// function add(a,b){
//     return a+b;
// }

// ___________________________________________________________________________________
// var number1 = Number(prompt("Enter fist number"));
// var number2 = Number(prompt("Enter second number"));
// var operation = prompt("Enter operation");
// document.write("<br>" + "Resut of expression is " + result(number1,number2,operation));

// function result(num1,num2,operator){
//     if (operator==="+"){
//         return num1 + num2;
//     }
//     if (operator==="-"){
//         return num1 - num2;
//     }
//     if (operator==="*"){
//         return num1 * num2;
//     }
//     if (operator==="/"){
//         return num1 / num2;
//     }
// }

// ___________________________________________________________________________________
// var number = Number(prompt("Enter number of sqaure"));
// square(number);
// function square(num){
//     document.write("<br>" + "Square of " + num + " is " + (num**2));
// }

// ___________________________________________________________________________________
// var number = Number(prompt("Enter number for Factorial"));

// var result = factorial(number);
// document.write("<br>" + "Factorial of "+ number + " is " +result);
// function factorial(num) {
//     for (let i = num-1; i > 0; i--){
//         num *= i;
//     }
//     return num;
// }

// ___________________________________________________________________________________
// var startingPoint = Number(prompt("Enter starting point"));
// var endingPoint = Number(prompt("Enter ending point"));
// counting(startingPoint,endingPoint);

// function counting(spoint,epoint){
//     for(let i = spoint; i<= epoint; i++){
//         document.write("<br>"+ i);
//     }
// }

// ___________________________________________________________________________________
// var perpendicular = Number(prompt("Enter perpendicular"));
// var base = Number(prompt("Enter base"));
// hypotenuse(perpendicular,base);

// function square(num){
//     return num**2;
// }

// function hypotenuse(per,bas){
//     var hyp = square(per) + square(bas);
//     document.write("<br>" + "Hypotenuse : " + square(hyp));
// }

// ___________________________________________________________________________________
// var width = Number(prompt("Enter width"));
// var height = Number(prompt("Enter height"));
// areaOfRectangle(width,height); //pass by variable
// areaOfRectangle(3,5); //pass by value

// function areaOfRectangle(a,b){
//     document.write("<br>" + "Area of rectangle is " + (a*b));
// }


// ___________________________________________________________________________________
// var string = prompt("Enter string");
// checkPalindrome(string);

// function checkPalindrome(str) {
//     var reverseString = "";

//     for (let i = (str.length - 1); i >= 0; i--) {
//         reverseString = reverseString.concat(str[i]);
//     }
//     if(str.toLowerCase() === reverseString.toLowerCase()){
//         document.write("<br>" + "The string is Palidrome");
//         document.write("<br>" + "User Input: " + str);
//         document.write("<br>" + "Reverse string: " + reverseString);
//     }
//     else{
//         document.write("<br>" + "The string is not Palidrome");
//     }
// }

// ___________________________________________________________________________________
// var string = prompt("Enter string");
// var afterConvertion = convertion(string);

// document.write("<br>" + "User input: " + string);
// document.write("<br>" + "After converstion: " + afterConvertion);

// function convertion(str){
//     copyStr = str[0].toUpperCase();
//     copyStr = copyStr.concat(str.slice(1));
//     return copyStr;
// }

// ___________________________________________________________________________________
// var string = "Web Development Tutoria";
// findLongestWord(string);

// function findLongestWord(str) {
//     var splitString = str.match(/\w[a-z]{0,}/gi);
//     var longestWord = splitString[0];

//     for (let i = 0; i < splitString.length; i++) {

//         if(longestWord.length < splitString[i].length){
//             longestWord = splitString[i];
//         }
//     }
//     document.write("<br>" + "Longest Word : " + longestWord);
// }

// ___________________________________________________________________________________
// function numberOfOccurance(string, character) {
//     var count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i].toLowerCase() === "o"){
//             count++;
//         }
//     }
//     return count;
// }

// document.write("<br>" + "Number of occurance of 'o' is " + numberOfOccurance("JSResourceS.com","o"));

// ___________________________________________________________________________________
// function calcCircumference(rad){
//     document.write("<br>" + "The circumfrence of circle is " + (2*rad*3.142))
// }

// function calcArea(rad){
//     document.write("<br>" + "The area of the circle is " + (3.14 * rad**2));
// }

// var radius = Number(prompt("Enter radius"));
// calcCircumference(radius);
// calcArea(radius);

// ------------------------------------------Chapter 38 to 42-----------------------------------------

// function calcPower(a,b){
//     return a**b;
// }

// var base = Number(prompt("Enter base value"));
// var power = Number(prompt("Enter power value"));

// document.write("<br>" + "The value of " + base + " raised to " + power + " is " + calcPower(base,power));


// ___________________________________________________________________________________
// var year = Number(prompt("Enter year"));
// check(year);
// function check(y){
//     if (y%4 === 0){
//         document.write("<br>"+ y + " is a leap year")
//     }
//     else{
//         document.write("<br>"+ y + " is not a leap year")
//     }
// }

// ___________________________________________________________________________________
// var S = function(x,y,z){
//     return (x+y+z)/2;
// }

// function areaOfTriangle(a,b,c){
//     let s = S(a,b,c);
//     let area = s*(s-a)*(s-b)*(s-c);
//     document.write("<br>" + "Area of Triangle is " + area);
// }

// var s1 = Number(prompt("Enter first side of triangle"));
// var s2 = Number(prompt("Enter second side of triangle"));
// var s3 = Number(prompt("Enter third side of triangle"));
// areaOfTriangle(s1,s2,s3);

// ___________________________________________________________________________________
// var subject1 = Number(prompt("Enter marks of subject 1"));
// var subject2 = Number(prompt("Enter marks of subject 2"));
// var subject3 = Number(prompt("Enter marks of subject 3"));

// mainFunction(subject1,subject2,subject3);

// function mainFunction(sub_1, sub_2, sub_3) {
//     let marksObtain = sub_1 + sub_2 + sub_3;
//     document.write("<br>" + "Marks of 1st subject is " + sub_1);
//     document.write("<br>" + "Marks of 2nd subject is " + sub_2);
//     document.write("<br>" + "Marks of 3rd subject is " + sub_3);
//     document.write("<br>" + "Average: " + calcAverage(marksObtain).toFixed(2));
//     document.write("<br>" + "Percentage: " + calcPercentage(marksObtain,300).toFixed(2) +"%");
// }
// function calcAverage(total) {
//     return total / 3;
// }
// function calcPercentage(marksObtain, totalMarks) {
//     return (marksObtain / totalMarks) * 100;
// }

// ___________________________________________________________________________________
// var string = prompt("Enter string");
// var character = prompt("Enter character");

// if (indexOf(string, character) === -1) {
//     document.write("<br>" + "String: " + string);
//     document.write("<br>" + character + " is not in the string because indexOf function return " + indexOf(string, character));
// }
// else {
//     document.write("<br>" + "String: " + string);
//     document.write("<br>" + "Index of character \"" + character + "\" is " + indexOf(string, character));
// }

// function indexOf(str, char) {
//     var index = -1;
//     for (let i = 0; i < str.length; i++) {
//         if (char === str[i]) {
//             index = i;
//             break;
//         }
//     }
//     return index;
// }

// ___________________________________________________________________________________
// var string = prompt("Enter string");
// document.write("<br>" + "String before operation:" + string);
// document.write("<br>" + "String after operation: " + removingVowel(string));
// function removingVowel(str) {
//     newStr = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
//             continue;
//         }
//         newStr += str[i];
//     }
//     return newStr;
// }

// ___________________________________________________________________________________
// var string = prompt("Enter string");
// document.write("<br>" + "String before operation: \"" + string + "\"");
// document.write("<br>" + "Occurrences of any two vowels in succession in a line of text : " + occuranceOfDoubleVowel(string));

// function occuranceOfDoubleVowel(str) {
//     var array = [];

//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
//             if (str[i + 1].toLowerCase() === "a" || str[i + 1].toLowerCase() === "e" || str[i + 1].toLowerCase() === "i" || str[i + 1].toLowerCase() === "o" || str[i + 1].toLowerCase() === "u") {
//                 array.push(str.slice(i, i + 2));
//             }
//         }
//     }
//     return array;
// }

// ___________________________________________________________________________________
// var number = Number(prompt("Enter Distance ib-n kilometer"));
// inMeter(number);
// inFeet(number);
// inInch(number);
// inCentimeter(number);

// function inMeter(num) {
//     document.write("<br>" + "Distance in meter is " + (num * 1000));
// }
// function inFeet(num) {
//     document.write("<br>" + "Distance in feet is " + (num * 3281));
// }
// function inInch(num) { 
//     document.write("<br>" + "Distance in inch is " + (num * 39370));
// }
// function inCentimeter(num) {
//     document.write("<br>" + "Distance in centimeter is " + (num * 100000));
// }

// ___________________________________________________________________________________
// var overTimeHours = Number(prompt("Enter overTime hours"));
// var overTimePay = overTimeHours * 12;

// document.write("<br>" + "Overtime salary of employ is " + overTimePay + " RS");
