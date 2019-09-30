///////////////////////////////////////
// Lecture: Hoisting

/*calcAge(1990);

function calcAge(year){
    console.log(2016 - year);
}




var ret = function(year){
    console.log(65-(2016-year));
}



console.log(age)
var age = 23;

function foo(){
    var age =65;
    console.log(age);
    
}
foo();
console.log(age);
*/




///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword



//console.log(this)
calcage(1905);

function calcage(year){
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: "john",
    year: 1990,
    calcage: function(){
        console.log(this);
    }
    
};

john.calcage();



