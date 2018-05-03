//i could use an array like this:
var person = ["Cindy", 32, "Missoula"];

//to retreive the persons hometown:
person[2] //not very meaningful code

//what if i accidentally reversed the order?
var person2 = ["Travis", "Los Angeles", 21];


//ObjectExample

var person = {
  name: "Cindy",
  age: 32,
  city: "Missoula"
};


var person = {
  name: "Travis",
  age: 21;
  city: "LA"
};

//objects have no order (unlike arrays)

//to retreive

console.log(person["name"]) //similar to arrays, not great

console.log(person.name); //shorter, cleaner

//cannot use dot notation if property starts with a number
someObject.1blah //invalid
someObject["1blah"] //Valid

//cannot use dot notation for properties with spaces
someObject.fav color //invalid
someObject["fav color"]; //Valid


//look up variable  with bracket notation
var str = "name";
someObject.str //doesnt look for "name"
someObject[str] //does evaluate str and looks for "name"

//Updating Data
var person = {
  name: "Travis",
  age: 21,
  city: "LA"
};

//to update age
person["age"] += 1;

//to update city
person.city = "London";

//Creating objects

//make an empty object then add to it
var person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA";

//all at once

var person = {
  name: "Travis",
  age: 21,
  city: "LA"
};

//another way of initializing an object
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";


//objects can hold all sorts of Data
var junkObjective = {
  age: 57,
  color: "Purple",
  isHungry: true,
  friends: ["Horatio", "Hamlet"],
  pet: {
    name: "Rusty",
    species: "Dog",
    age: 2
  }
};


//Comparing Objects and Arrays Syntax
//arrays = bound to index (0,1,2)
//objects = no particular order (dictionary)

var dogs = ["Rusty", "Lucky", "Bubba"]; //arrays

var dog = {
  name: "Bubba",
  breed: "Lab",
};                    //object

dogs[1]; //"Lucky" - array
dog["name"]; //"Bubba" - object
dog.name //"Bubba" - object

dogs.push("Wyatt"); //Add to array
dog.age = 6; //object

dogs[1] = "Lucy"
dog.breed = "Black Lab"


//Nested Arrays/objects

var posts = [ // array nested
  {
    title: "Cats are mediocre",
    author: "Colt",
    comments: ["Awesome post", "terrible post"]
  },
  {
    title: "Cats are actually awesome",
    author: "Cat Lovr",
    comments: ["<3", "Go to hell I hate you"]
  }
]

posts[0].title
//"Cats are mediocre"
posts[1].comments[1]
//"Go to hell I hate you"

//Objects Quiz 1 Exercise 1

var someObject = {};

// which of the following are Valid
someObject._name = "Hedwig";    //correct doesnt start with number or have a space

someObject.age = 6;     //correct

var prop = "color"
someObject[prop] = "red"; //correct - evaluates string and changes to red

someObject.123 = true;  //false - cannot use dot notation with numbers


//Objectives Quiz 1 Exercise 2

var someObject = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true
};

//write code to retrieve Malfoy - go one layer at a time
someObject.friends[0] // goes into someObject - reads first index of friends - Malfoy
someObject.friends[0].name // Prints out Malfoy


//Movie DB Array
//Add methods to objects (method is function inside a property)

var obj = {
  name: "chuck",
  age: 45,
  isCool: false,
  friends: ["bob", "tina"],
  add: function(x,y){
    return x + y;
  }
}

function speak(){
  return "WOOF!";
}

function speak(){
  return "MEOW!";
}


//two above cause name space collision, cannot refer to Woof anymore.
//creating them under an object prevents the collision and keeps them available

var dogSpace = {};
var catSpace = {};

dogSpace.speak =  function(){
  return "Woof!";
}

catSpace.speak = function(){
  return "Meow!";
}

//keeps them logicially together, prevents to name space collision
//underscorejs library
//keyword this

var comments = {};

comments.data = ["Good Job!", "Bye", "Lame"];

function print(arr){
  arr.forEach(function(el){
    console.log(el);
  });
}

comments.print = function(){
  this.data.forEach(function(el){
    console.log(el);
  });
}
