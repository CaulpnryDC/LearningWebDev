//First Problem

var num = -10;

console.log("Problem #1 - -10 to 19");

while (num <= 19){
	console.log(num);
	num++;
}

//Second Problem

var secondNum = 10;

console.log("Problem #2 - Evens between 10 and 40");

/*while (secondNum <= 40){			SLOWER CODE - but better for verification
	if(secondNum % 2 === 0){
		console.log(secondNum);
	}
	secondNum++;
}*/
while (secondNum <= 40){
	console.log(secondNum);
	secondNum+=2;
}


//Third Problem

var tNum = 300;

console.log("Problem #3");

while (tNum <= 333){
	if(tNum % 2 !== 0){
		console.log(tNum);
	}
	tNum+=1;
}

//Fourth Problem

var fNum = 5;

console.log("Problem #4");

while(fNum <= 50){
	if(fNum % 5 === 0 && fNum % 3 === 0){
		console.log(fNum)
	}
	fNum++;
}