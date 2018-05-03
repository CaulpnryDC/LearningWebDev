console.log("All numbers between -10 and 19");

for(var a = -10; a <= 19; a++){
	console.log(a);
}

console.log("All even numbers between 10 and 40");

/*for(var b = 10; b <= 40; b+=2){
	console.log(b);
}*/

for(var b = 10; b <= 40; b++){
	if(b % 2 === 0){
		console.log(b);
	}
}

console.log("All odd numbers between 300 and 333");

for(var c = 300; c <= 333; c++){
	if(c % 2 !== 0){
		console.log(c);
	}
}

console.log("Numbers divisible by 5 and 3 between 5 and 50");

for(var d = 5; d <= 50; d++){
	if(d % 5 === 0 && d % 3 === 0){
		console.log(d);
	}
}