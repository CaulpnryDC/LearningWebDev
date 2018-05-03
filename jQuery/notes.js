//prints when item with id 'submit' is clicked
$("#submit").click(function(){
  console.log("Another click");
});

//alerts when ANY button is clicked
$("button").click(function(){
  alert("Someone clicked a button");
});

//typo in next lessions (section 17, lecture 18)
$('input[type="text"]') //correct way

//listen for any keypress in text input
$('input[type="text"]').keypress(function(){
  alert("text input keypress!");
});


//on()
//prints when item with id 'submit' is clicked
$("#submit").on('click', function(){
  console.log("another click");
});

//alerts when ANY button is clicked
$("button").on('click', function(){
  console.log("button clicked!");
});


//double click event
$('button').on('dblclick', function(){
  alert("double clicked");
});

//drag start event
$("a").on("dragstart", function(){
  console.log("drag started!");
});

//keypress event
$('input[type="text"]').on('keypress', function(){
  alert("key press in an input");
});
