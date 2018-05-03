//isEven()

/*function isEven(num){
	if(num % 2 === 0){
		return true;
	}
	else{
		return false;
	}
}*/

function isEven(num){
	return num % 2 === 0;
}

//factorial

function factorial(num){
	//define result variable
	var result = 1;

	//calculate factorial/store result
	for(var i = 2; i <= num; i++){
		result *= i;
	}

	//return result variable
	return result;

}

//factorial(4) 4x3x2x1

//kebab

function kebabToSnake(str){
	//replace all - with _
	var newStr = str.replace(/-/g , "_")
	//return str
	return newStr;
}