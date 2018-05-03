var logo = document.querySelector("#hplogo");
	setInterval(function(){
		logo.width+=5;
	}, 100)




var name = "Rusty";
var num = 43;

"hello there " + name + ". Happy " + num + "rd birthday!"

//alert

//prompt

//console.log

var userName = prompt("What is your name?");

//creates prompt for user to input info

! = flips answer (so if true, becomes false)

var str = ""	// false
var msg = "haha!"	// true
var isFunny = "false"	// true

!((str || msg) && isFunny)  // false

// str || msg = true due to msg
// isFunny = true due to "false" 

!!((str || msg) && isFunny)  // true

if(age < 18){
	console.log("Sorry, you are not old enough to enter the venue");
}

else if(age < 21){
	console.log("You can enter, but cannot drink");
}

else {
	console.log("Come on in. You can drink");
}

// loops - 8m9s - infinite loop occurs when the terminating condition never returns false

Purpose of loops
DRY Code // Dont Repeat Yourself

while(someCondition){
	//run some code
}

var count = 1;

while(count < 6){
	console.log("count is: " + count);
	count++;
}

//string we're looping over
var str = "hello";

//first character is at index 0
var count = 0;

while(count < str.length){
	console.log(str[count]);
	count++;
}


//infinite loop example

var count = 0;
while (count < 10){
	console.log(count);
}

//exercise while loops
var num = 1;
while(num <= 10){
	console.log(num);
	num += 2;
}

//exercise 2
var num = 1;

while(num <= 20){
	if(num % 4 === 0){			//only printing numbers with 0 remainder after division - dividing evenly by 4 into num
		console.log(num);
	}
	num++;
}

//exercise 3 -- THIS IS AN INFINITE LOOP
var num = 100;

while(num < 150) {
	console.log(num + 1);		//printing out current num + 1
	num--;						//taking away 1 number after each loop
}	

//Section 9, Lecture 104
count = 1 // not count = 0

for (init; condition; step){
	//run some code
}

for (var count = 1; count < 6; count++){
	console.log(count);
}

var str = "hello";
for(var i = 0; i < str.length; i++){
	console.log(str[i]);
}


//For Loop exercise 1

for(var i = 0; i < 16; i+=8){
	console.log(i);
}


//For Loop exercise 2

var str = "ahceclwlxo";		// answer is hello, not accwx - A = 0 in this

for(var i = 1; i < str.length; i+=2){
	console.log(str[i]);
}