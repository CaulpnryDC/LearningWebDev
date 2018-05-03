DOM Manipulation

For This - Put JavaScript code in <script> tags above </body> not in header

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Test</title>
</head>
<body>
  <h1>Some HTML Code here</h1>

  <script src="test.js"></script>
</body>
</html>


What is DOM (games, scrolling effects, dropdown menus, form validations, interactivity)

Google uses DOM - search bar changes as you add characters

//patatap.com

DOM - Document Object Model
Interface between JS & HTML/CSS

console.dir(document);

Select & Manipulate - dom.js

Dom nodes:

Document
root element: <html>
element: <head>
element: <title>
text: "my title"

element: <body>
element: <a>
  attribute: "href"
text: "My link"

element: <h1>
text: "My header"

document.URL
document.links
document.body
document.head

//5 Main Methods
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()


QuerySelector - use CSS style selectors (# or .)
//#highlighted - by id
//.bolded - by class
querySelector returns first element only


var li = document.querySelector("li a.special") //specify list item with anchor tag class

querySelectorAll returns all matching elements


Manipulation

change element style
add/remove class
change content of tags
changing attributes (a href etc)

//Select
var tag = document.getElementById("highlighted")

//Manipulate
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

// Separation of Concerns
// HTML - Structure
// JS - Behavior
// CSS - Presentation


//Better way to do above shown below

var tag = document.getElementById("highlighted");
tag.style.color = "blue";
tag.style.border = "10px solid red";

//Instead of this use below example

/*Define a class in css*/
.some-class{
  color: blue;
  border: 10px solid red;
}

var tag = document.getElementById("highlighted");
//add the new class to selected element
tag.classList.add("some-class");

/*Define a class in css*/

.another-class {
  color: purple;
  fontSize: 76px;
}

var tag = document.querySelector("h1");
//add a class
tag.classList.add("another-class");

//remove a class
tag.classList.remove("another-class");

//toggle a class
tag.classList.toggle("another-class");
//example below for toggle

.big {
  font-size: 100px;
  color: orange;
  border: 5px solid red;
}

var p = document.querySelector("p");
p.classList.add("big");

//Example - To Do List - use Toggle for done/not done - cross out word if done

//ClassList is not an array

//Manipulate text/content

//textContent
<p>This is an <strong>awesome</strong> paragraph</p>

var tag = document.querySelector("p");
tag.textContent //"This is an awesome paragraph"
tag.textContent = "blah blah blah"; //resets text content

//examples

var h1 = document.getElementsByTagName("h1")[0]
h1.textContent //spits out text of first h1

var ul = document.querySelector("ul")
ul.textContent //spits out text of entire ul

h1.textContent = "Corgi mixes are really really super adorable"; //would overwrite strong

//innerHTML - keeps html tags

<p>This is an <strong>awesome</strong> paragraph</p>
var tag = document.querySelector("p")
p.textContent
ul.innerHTML
h1.innerHTML  //not usually used to set something


document.querySelector("h1").textContent = "END OF THIS LESSON!";

textContent doesnt render html tags
innerHTML does render tags

//Manipulate attributes

<a href="www.google.com">I am a link</a>
<img src="logo.png">

var link = document.querySelector("a");
link.getAttribute("href"); //should show google.com
link.setAttribute("href", "www.dogs.com"); //sets the attribute

var img = document.querySelector("img");
img.setAttribute("src", "corgi.png"); //sets img src to new img


Google Code Along

//srcset instead of src

var logo = document.querySelector("#hplogo");

logo.setAttribute("srcset", "https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/");

logo.style.width = "500px";
logo.style.height = "100px";
"100px"
logo.style.width = "200px";
"200px"
logo.style.border = "2px solid purple";

//loop

var links = document.getElementsByTagName("a");
for(var i = 0; i < links.length; i++){
    console.log(links[i].textContent)
}

for(var i = 0; i < links.length; i++){
    links[i].style.background = "pink";
}

for(var i = 0; i < links.length; i++){
    links[i].style.background = "pink";
}

for(var i = 0; i < links.length; i++){
    links[i].style.border = "1px dashed purple";
	links[i].style.color = "orange";
}

for(var i = 0; i < links.length; i++){
    links[i].setAttribute("href", "http://www.bing.com");
}


//events - interactive abilities

The Process

Listen for a click on this <button>

Listen for a hover event on the <h1>

List for a keypress event on text input

element.addEventListener(type, functionToCall);

var button = document.querySelector("button");
button.addEventListener("click", function(){
  console.log("SOMEONE CLICKED THE BUTTON");
});


<button>Click me</button>
<p>No one has clicked me yet</p>

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//setup click lisener

button.addEventListener("click", function(){
  paragraph.textContent = "Someone clicked the button!";
});

document.querySelector("ul").addEventListener("click", function(){
    console.log("You clicked the UL");
});


var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color = "pink";
    });
}


//Another example
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", changeText);

function changeText() {
  paragraph.textContent = "Someone clicked the button!";
}
