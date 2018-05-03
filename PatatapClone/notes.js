var myCircle = new Path.Circle(new Point(100, 70), 10);
myCircle.fillColor = 'green';

var myCircle2 = new Path.Circle(new Point(200, 150), 80);
myCircle2.fillColor = 'grey';

var circle3 = new Path.Circle(new Point(230, 175), 25);
circle3.fillColor = 'black';

//create a paper.js path to draw a line into it:
var path = new Path();
//give the stroke a color
path.strokeColor = 'green';
var start = new Point(230, 175);
//move to start and draw a line from there
path.moveTo(start);
//note the plus operator on Point objects.
//paperscript does that for us, and much more!
path.lineTo(start + [ 500, 175 ]);

//create a paper.js path to draw a line into it:
var path2 = new Path();
//give the stroke a color
path2.strokeColor = 'green';
var start2 = new Point(290, 105);
//move to start and draw a line from there
path2.moveTo(start);
//note the plus operator on Point objects.
//paperscript does that for us, and much more!
path2.lineTo(start + [ 500, 200 ]);

for (var i = 0; i < 50; i++){
  var center = new Point(70 + i * 20, 50);
  var path = new Path.Circle(center, 20);
  path.fillColor = 'red';
  path.strokeColor = 'black';
}

for (var x = 0; x < 1000; x+= 100){
  for (var y = 0; y < 1000; y+= 100){
    new Path.Circle(new Point(x, y), 10).fillColor = 'green';
  }
}


//HOWLER

//if key is A
if(event.key === "a"){
  sound1.play();
  newCircle.fillColor = "purple";
}
else if(event.key === "s"){
  sound2.play();
  newCircle.fillColor = "#16a085";
} else {
  newCircle.fillColor = 'orange';
  }


  function onFrame(event){
    for(var i = 0; i < circles.length; i++){
      circles[i].scale(0.9);
      circles[i].fillColor.hue += 1;
      if(circles[i].area < 1){
        circles[i].remove();
        circles.splice(i, 1);
        i--;
        console.log(circles);
      }
    }
  }
