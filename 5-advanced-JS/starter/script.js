// function constructor
/*
var john = {
    name:'John',
    birthYear: 1990,
    job: 'teacher'
    
};

var Person = function(name, year, job){
    this.name = name;
    this.year = year;
    this.job = job;

}

Person.prototype.calcAge = function(){
        console.log(2019- this.year)
    }

Person.prototype.lastName = 'smith'

var john = new Person('John', 1990, 'teacher');

john.calcAge()

console.log(john.lastName)

var Mark = new Person('mark', 1991, 'doctor');

console.log(Mark);*/

// Object.create
/*
var personProto = {
    calcAge : function(){
        console.log(2019 - this.year)
    }
};

var john = Object.create(personProto);

john.name = "john"

var jose = Object.create(personProto,{
    name: {value: 'jose'},
    job: {value: 'designer'}
    */


/*
//Primitives vs Objects

var a = 23;
var b = a;
a =46;
console.log(a);
console.log(b);


var obj1 = {
    name: 'john',
    age: 26
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1)
console.log(obj2)


var age =26;

var obj = {
    name: 'johas',
    city: 'shrews'
}

function change(a,b){
    a=30;
    b.city = 'san';
}

change(age, obj);

console.log(age);
console.log(obj.city) */

/*
var years = [1190,1991,1992,1993,1994];

function arcalc (arr, fn){
    var ar_res = [];
    for(var i=0; i< arr.length; i++){
        ar_res.push(fn(arr[i]));
    }
    return ar_res;
}

function calcAge (ele){
    return 2016 -ele;
}

function isFullAge (e) {
    return e >= 18
}

function hrtrate(ele) {
    return 206.9 - (0.67 * ele);
}

var fn_ar = arcalc(years, calcAge)

console.log(fn_ar)

var fage = arcalc(fn_ar, isFullAge)

console.log(fage)

var hrt = arcalc(fn_ar, hrtrate)

console.log(hrt)*/

/*
function interQues(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you exp what UX design is?')
        }
    }else if (job === 'teacher'){
        return function(name){
            console.log(name + 'what subject?')
        }
    }else {
        return function (name){
            console.log(name + ' what do you do ?')
        }
    }
}


var teahQues = interQues('teacher');
var desQues = interQues('designer')

teahQues('john')

desQues('john')

interQues('teacher')('mark') */



//// IIFE /////
/*
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game() */

/*
(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck)
})(Math.random() * 5); */

//console.log(score)


///// Closures ////
/*
function ret (retage) {
    var a ='yrs unt ret';
    return function (year){
        var age = 2016 -year;
        console.log((retage - age) + a);
    }
}

var retUS= ret(66);
retUS(1990)

var retGerm = ret(65);

var retIce = ret(67)
retGerm(1990)
retIce(1990) */



///Call, apply bind

/*
var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    prest: function (style, time){
        if (style === 'formal'){
            console.log("good " + time)
        }else if (style === 'friendly'){
            console.log("hey! woo, I\'m" + this.name +'its a great' + time)
        }
    }
}

var emil = {
    name : 'emil',
    age: 35,
    job: 'des'
};

john.prest.call(emil, 'friendly', 'afternoon')
john.prest('formal', 'morning')

//john.prest.apply(emil, [friendly, ])

var johnFrnd = john.prest.bind(john, 'friendly');

johnFrnd('morning') */


/// CHALLENGE- 7 

(function(){  

 var Question  = function(question,arr_ans, correct_ans ){
    this.ques =question;
    this.user_ans = arr_ans;
    this.ans = correct_ans;

}

Question.prototype.printQues = function(){
    console.log('your ques: ' + this.ques);
    
    for ( var i =0; i< this.user_ans.length; i++){
        console.log(i + ' : ' + this.user_ans[i])
    }
    }

Question.prototype.ansCheck = function(ans_player, score){
    var isCorrect = (this.ans == ans_player)? true:false;

    
    if(isCorrect){ 
        console.log('your ans: ' + this.user_ans[this.ans] + ' is correct. your score: ' + (++score));        
    }else {
        console.log('your ans: ' + this.user_ans[this.ans] + ' is not correct. your score ' + score);          
    }
    
    if(ans_player != 'exit'){
        console.log("not exited")
        quesLoop(Question, score)
    }else {
        console.log('exited')
    }
    
 
    }

    function quesLoop(Question, score_outs){
        var ques1 = new Question('choose 1', ['1','0','34'], 0);

        var ques2 = new Question('choose a', ['q', 'a', 'bee'], 1);

        var ques_arr = [ques1, ques2];


        var rand_ques = (Math.random() > 0.5)? 1:0;

        ques_arr[rand_ques].printQues();

        var ans_from_user = prompt("Choose the correct option number or enter 'exit' to exit the quiz");

        console.log(ans_from_user)

        ques_arr[rand_ques].ansCheck(ans_from_user, score_outs);


    }
    
    quesLoop(Question, 0);

})();