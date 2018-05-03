var h1 = document.querySelector("h1");
h1.style.color = "blue";

for(var i = 0; i < h1.length; i++){
  h1[i].addEventListener("click", function(){
    this.style.color = "green";
  });
}

// var body = document.querySelector("body");  //selector
// var isBlue = false;
//
// setInterval(function(){ //Manipulation
//   if (isBlue){
//     body.style.background = "white";
//   }
//   else {
//     body.style.background = "#3498db";
//   }
//   isBlue = !isBlue; //false to true
// }, 1000);

var thead = document.querySelector("#highlight");

thead.style.color = "red";

var td = document.querySelector("td");
td.style.color = "yellow";
td.style.background = "Green";

// var tr = document.querySelector("tr");
// tr.style.background = "yellow";

var table = document.querySelector("table");
table.style.background = "red";


document.querySelector("ul").addEventListener("click", function(){
    console.log("You clicked the UL");
});


var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color = "red";
    });
}



//Another example
var button = document.querySelector("button");
var paragraph = document.querySelector("p");
var table = document.querySelector("td");

// button.addEventListener("click", changeText);
//
// function changeText() {
//   table.textContent = " ";
// }

button.addEventListener("click", changeP);

function changeP(){
  alert("Are you sure?");
  paragraph.textContent = "SOMEONE CLICKED THE BUTTON!";
  window.open('mailto:kris.bunney@gmail.com?subject=Test&body=Testing');
}

// function changeP(){
//   for(var i = 0; i < lis.length; i++){
//       lis[i].addEventListener("click", function(){
//           lis.style.color = "black";
//       });
//   }
// }


// button.addEventListener("click", function(){
//   alert("Are you sure?");
// });

// for(var i = 0; i < table.length; i++){
//     table[i].addEventListener("click", function(){
//         this.textContent = "";
//     });
// }
