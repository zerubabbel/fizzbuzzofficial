$(document).ready(function(){
var enterNumber = prompt("Enter a Number");
var maxValue = + enterNumber;
var fizzBuzzFunc = function(){
	for(var i = 1; i <= maxValue ; i++){
		if(i % 15 === 0){
	document.write("Fizz Buzz ");
	}
		else if(i % 3 === 0){
	document.write("Fizz ");
	}
		else if(i % 5 === 0){
	document.write("Buzz ");
	}
		else{
	document.write(" " + i + " ");
	}
}
};


$("#numbers").append(fizzBuzzFunc());
});