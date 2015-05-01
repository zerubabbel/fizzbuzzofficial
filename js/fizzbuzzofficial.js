$(document).ready(function(){
var inputNumber= prompt ("***input a number***");
var max = + inputNumber;
var fizzBuzz = function () {
for (var i=1; i<=max; i++){
	if (i%15===0){
		document.write("fizzbuzz");
	}
	else if (i%3===0){document.write("fizz");}
	else if (i%5===0){document.write("buzz");}
	else{document.write(i);
	}
}
if(isNaN(max)){prompt("enter only a whole number");
}
};
$("#data").append(fizzBuzz());
});

