console.log("Connected");

//example

function myForEach(arr, func){
	//loop through array
	for(var i = 0; i < arr.length; i++){
		//call func for each item in array
		func();
	}
}

//example of above, with actual functions

var colors = ["red", "orange", "yellow"];

myForEach(colors, alert) 	//causes an alert for each item in array - no output though

//to pass data into func

function myForEach(arr, func){
	//loop through array
	for(var i = 0; i < arr.length; i++){
		//call func for each item in array
		func(arr[i]);
	}
}


//anonymous function

myForEach(colors, function(){alert("HI")})		// <-- since its an anonymous function
												// the function defined above will execute it afterwards
myForEach(colors, function(color){
    console.log(color);
});

//returns red, orange, yellow

//object/array

Array.prototype.myForEach = function(func){
    for(var i = 0; i  < this.length; i++){
        func(this[i]);
    }
}

friends.myForEach(function(name){
    console.log("I love " + name);
})

