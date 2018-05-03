//functions

function doSomething(){
	console.log("Hello World";)
}

doSomething();
doSomething();
doSomething();
doSomething();

//Song

function singSong(){
    console.log("Twinkle, twinkle, little star");
    console.log("How i wonder what you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");
}

singSong();
singSong();


//Arguments

function square(num){
	console.log(num * num);
}

square(10);
square(3);
square(4);


function area(length, width){
	console.log(length * width);
}

area(9,2);


function greet(person1, person2, person3){
	console.log("Hi " + person1);
	console.log("Hi " + person2);
	console.log("Hi " + person3);
}


//user login

checkCredentials("rusty@gmail.com", "woof123");

//Return

function capitalize(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
var capitalize = capitalize(city);

function capitalize(str){
	if(typeof str === "number"){
		return "that's not a string!"
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

//function declaration

function capitalize(str)

//function expression
var capitalize = function(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

//context code

function doMath(){
	var x = 40;
	console.log(x);
}

var x = "hello";

//x = hello
//doMath() = 40

var y = 99;
function doMoreMath(){
	console.log(y);
}

//Prints out 99

function doMoreMath(){
	y = 100;
	console.log(y);
}

//Changes y inside and outside of function to be 100

var phrase = "hi there!";

function doSomething(){
	var phrase = "Goodbye!";
	console.log(phrase);
}

//To keep variables isolated, create separate ones in functions

//Context Problem 1

var num = 8;
function doMath(){
	num += 1;
	if(num % 5 == 0){
		return true
	}
	else {
		return false
	}
}

num+=1;
doMath()

//prints out true - runs num+=1 then doMath()

function hi(){
	var name = "Rusty";
	console.log(name);
}

function bye(){
	console.log(name);
}

//^^name only accessible by one scope/function

//Higher Order Functions

function sing(){
	console.log("twinkle, twinkle...");
	console.log("how i wonder...");
}

// setinterval

setInterval(sing, 1000);

//to stop use number spit out with this

clearInterval(#);

//Anonymous Function

setInterval(function(){
	console.log("I am an anonymous function");
	console.log("This is awesome");
}, 2000);


//Unit 11 - JS Arrays - Data Structure

//Define Arrays and Remove/Add

//Utilize built-in array methods

//Console Todo List Application

var friend1 = "Charlie";
var friend2 = "Liz";
var friend3 = "David";
var friend4 = "Mattias";

// ^^ Not considered DRY code

var friends = ["Charlie", "Liz", "David", "Mattias"];

// ^ Array - indexed starting at 0

console.log(friends[0]);	// "Charlie"

friends[1] + " <3 " + friends[2] //"Liz <3 David"

friends[0] = "Chuck";
friends[1] = "Lizzie";

friends[4] = "Amelie";

/*var colors = ["red", "orange", "yellow"];
undefined
colors
(3) ["red", "orange", "yellow"]
colors[1]
"orange"
colors[3] = "green"
"green"
colors
(4) ["red", "orange", "yellow", "green"]
colors[3] = "dark green"
"dark green"
colors
(4) ["red", "orange", "yellow", "dark green"]*/

//We can initialize an empty array two ways:
var friends = []; //no friends
var friends = new Array() //uncommon

//Arrays can hold any type of data
var random_collection = [49, true, "Hermoine", null];

//Arrays have a length property
var nums = [45, 37, 89, 24];
nums.length // 4

//Array Methods

//push (add)/pop (remove)
//shift/unshift
//indexOf
//slice

var colors = ["red", "orange", "yellow"];

colors[3] = "green";
colors[4] = "blue";

var colors = ["red", "orange", "yellow"];
colors.push("indigo");


//shift/unshift

var colors = ["red", "orange", "yellow"];
colors.unshift("infrared");

// Adds to front

var colors = ["red", "orange", "yellow"];
colors.shift();

// Removes 1st item

//shift() also returns the removed element
var col = colors.shift();


var nums = [34,54,22];
undefined
nums.unshift("Hello");
4
nums
(4) ["Hello", 34, 54, 22]
nums.shift()
"Hello"
nums
(3) [34, 54, 22]


//indexOf

var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];

//returns the first index at which a given element can be found
friends.indexOf("David"); //2
friends.indexOf("Liz"); //1, not 4

//returns -1 if the element is not present
friends.indexOf("Hagrid"); //-1

//Slice

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//use slice to copy the 2nd and 3rd fruits
//specifiy index where new array starts(1), and ends (3)
var citrus = fruits.slice(1, 3);

var nums = [1,2,3, "A", "b", 445, 34]
undefined
nums
(7) [1, 2, 3, "A", "b", 445, 34]
var letters = nums.slice(3,5);
undefined
letters
(2) ["A", "b"]

//Array quiz

//Exercise 1

var numbers = [22, 67, 33, 96, 88];

//what does the following line print?
console.log(numbers[numbers.length]) // numbers 5 doesnt exist, explains undefined - always going 1 above the actual amount


//Exercise 2

var friendGroups = [
	["Harry", "Ron", "Hermonie"],
	["Malfoy", "Crabbe", "Goyle"],
	["Mooney", "Wormtail", "Prongs"]
];

//What is the result of this line:

console.log(friendGroups[2][0]);  //original thought - print mooney/wormtail/prongs/harry/ron/hermoine
//actually specifies which group, and then which index within that group to print
//first number = group, second number = index

//Array Iterations

var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++){
	console.log(colors[i]);
}

//ForEach

arr.forEach(someFunction)

var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color){
	console.log(color);
});

function printColor(color){
	console.log("*********");
	console.log(color);
	console.log("*********");
}

//while example
var count = 0;
while(count < colors.length) {
	console.log(colors[count]);
	count++;
}

//Quick Array challenge
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color){
	if(color % 3 === 0){
		console.log(color);
	}
});

//defining two variables, but only referring to numbers with forEach - should print 3, 6, 9, colors is not being referred to


//Arrays Problem Set
printReverse([1,2,3,4]);
//4
//3
//2
//1

printReverse(["a", "b", "c"]);
//c
//b
//a

isUniform([1,1,1,1]); //true
isUniform([2,1,1,1]); //false
isuniform(["a", "b", "p"]); //false
isUniform(["b","b","b"]); //true

sumArray ([1,2,3]); //6
sumArray([10,3,10,4]); //27
sumArray([-5, 100]); //95

max([1,2,3]); //3
max([10,3,10,4]); //10
max([-5, 100]); //100


