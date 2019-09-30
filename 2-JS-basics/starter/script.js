/****************

SECTION 1

var firstName = 'John';
console.log(firstName);
//this is a single line comment

//this is a
//multi-line comment 
var lastName = 'John';
var age = 25;
var fullAge=true;
console.log(fullAge);
var job ='teacher';
console.log(job);

*********** */

/******* SECTION 2 

var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' ' + age + ' ' + job + ' ' + isMarried);


age = 'twenty eight';
job = 'driver';
alert(firstName + ' ' + age + ' ' + job + ' ' + isMarried);

var lastName = prompt('what is his last name ? ');
console.log(lastName);

**************** */

/**********SECTION 3 

var year = 2018 - 28;

console.log(year);

console.log(typeof x);

************* */

/*********** SEcTION 4 

var now = 2018;
var yrJohn= 1998;
var fullAge = 18;

var isFullAge = now - yrJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yrJohn;
var ageMark = 39;

var avg = (ageJohn + ageMark) / 2;
console.log(avg);

var x, y ; 

x = y= (3 + 5) *4 -6;
console.log(x , y);

x *= 2;
console.log(x , y);

*/ 



/*************************/
/**** CODING CHALLENGE 1 */
/************************


var MarkMass = prompt(" Enter mark's mass in kg");
var JohnMass = prompt(" Enter John's mass in kg");

var MarkHeight = prompt(" Enter mark's height in meters");
var JohnHeight = prompt(" Enter John's height in meters");

var MarkBMI = MarkMass / (MarkHeight * MarkHeight);
var JohnBMI = JohnMass / (JohnHeight * JohnHeight);
console.log(MarkBMI, JohnBMI);

if (MarkBMI > JohnBMI){
   console.log('Mark s BMI greater') ;
}else {
    console.log('John s BMI greater') ;  
} 


var firstName = 'john';
var age =16;

if(age<13){
    console.log("A boy");
}else if(age >=13 && age < 20){
    console.log('teen');
}else {
    console.log('A man');
}
*/

/*********If else 


var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married') {
    console.log(firstName + ' is married ');
} else {
    console.log(firstName + ' is not married');
}

var isMarried = true;

if(isMarried){
      console.log(firstName + ' is married ');
} else {
    console.log(firstName + ' is not married');
}
  
*/


/***** switch 


var firstName = 'john';
var age = 16;

age >= 18 ? console.log('beer') : console.log('juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


var job = 'techer';

switch (job){
    case 'teacher':
        console.log('teacher');
        break;
        
    case 'driver':
        console.log('drive');
        break;
    
    default :
        console.log('nothing');
                                                                                                                                                                                               
} */

/******************/
/*** CHALLENGE 2****/
/*****************

var JScr1 = 89;
var JScr2 = 20;
var JScr3 = 103;

var MScr1 = 134;
var MScr2 = 27;
var MScr3 = 105;

var MryScr1 = 27;
var MryScr2 = 134;
var MryScr3 = 105;

var Javg = (JScr1 + JScr2 + JScr3)/3;
var Mavg = (MScr1 + MScr2 + MScr3)/3;
var Mryavg = (MryScr1 + MryScr2 + MryScr3)/3;

if(Javg > Mavg && Javg > Mryavg){
    console.log("Jonh team wins");
}else if(Mavg > Javg && Mavg > Mryavg){
    console.log('Mike\'s team wins');
}else if (Mryavg > Javg && Mryavg > Mavg){
    console.log('Mary\'s team won');
}else if(Mavg > Mryavg && Mavg === Javg){
    console.log('John and Mike tied');
}else if(Mryavg > Mavg && Mryavg === Javg){
    console.log('John and Mary tied');
}else if(Mavg > Javg && Mryavg === Mavg){
    console.log('Mike and Mary tied');
}else {
    console.log('all tied');
}

*/

/*** Functions ****

function calcAge (birthYear){
    return 2019 - birthYear;
}

function untilRet (year, person){
    var age = calcAge(year);
    var ret = 65 -age;
    if(ret > 0){
        console.log(person + ' ret in ' + ret); 
    }
    else {
        console.log(person + ' ret  ' + (0-ret)  + ' years before' );

    }
}

var year1=1993;
var age1 = calcAge(year1);
var year2=1990;
var age2 = calcAge(year2);
var year3=2000;
var age3 = calcAge(year3);

console.log(age1);
console.log(age2);
console.log(age3);

untilRet(1937, "John");


var occu = function(job, firstName){
    switch (job){
        case 'teacher':
            return firstName + "teaches";
        case 'driver':
            return firstName + 'drives';
        case 'enginr':
            return firstName + 'designs';
        default:
            return firstName + 'nothing';
            
    }
}


console.log(occu('teacher','Mark'));
console.log(occu('driver','Mary'));
console.log(occu('enginr','Mike'));
*/

/****** Arrays ***** 

var names = ['sas', true, 'mark'];

var years = new Array(1993, 1969, 1948);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(names);
console.log(names.length);

names[2] = 'Jess';
console.log(names);

names[5] = 1;
console.log(names, names.length);

names.push('blue');
names.unshift('mr.');
console.log(names, names.length);
names.pop()
names.shift()
console.log(names.indexOf('jess'));
console.log(names, names.length);
*/

/**********************/
/***CHALLENGE 3 *******/
/*********************

function tipCalc(bill){
    if(bill < 50){
        return bill * 0.2;
    }else if(bill >= 50 && bill <= 200){
        return bill * 0.15;
    }else {
        return bill * 0.1;
    }
}

var allThreeTips= [tipCalc(124), tipCalc(48), tipCalc(268)];

console.log(allThreeTips);

var finalPaidAmount = [(124 + tipCalc(124)), (48 + tipCalc(48)), (268 + tipCalc(268)) ];

console.log(finalPaidAmount);
*/

/**** Objects ***

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

var x = 'birthYear'
console.log(john[x]);

john[x] = 1993;
console.log(john[x]);

john.isMarried =true;
console.log(john.isMarried)
*/

/****** Methods ***

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    
    calcAge: function (birthYear){
        this.age = 2019 - this.birthYear;
    }
};
    
    console.log(john.calcAge());
console.log(john)
*/


/*******************/
/*****chAlLenge 4*****/
/******************


var john= {
    name: "John",
    mass: 70,
    height: 1.8,
    calcBMI: function(){
        this.bmi = this.mass/ (this.height * this.height);
    return this.bmi;
    }
  
};


var mark= {
    name: "Mark",
    mass: 160,
    height: 1.7,
    calcBMI: function(){
        this.bmi = this.mass/ (this.height * this.height);
    return this.bmi;
    }
  
};


if(john.calcBMI() > mark.calcBMI()){
    console.log(john.name + ' BMI of '+ john.bmi +' is greater');
}else if (john.calcBMI() < mark.calcBMI()){
    console.log(mark.name + ' BMI of '+ mark.bmi +' is greater');
} else {
    console.log('Both ' + john.name + ' and ' + mark.name + ' have equal BMIs');
}

*/

/************************/
/*******CHALLENGE 5*******/
/************************/

var johnObj={
    bills: [0],
    tips:[0],
    amounts:[0],
    avg: 0,
    calcTip: function(){
        for(var i=0; i<this.bills.length; i++){
            if(this.bills[i] < 50){
                this.tips[i] = this.bills[i] *0.2 ;
                this.amounts[i] = this.bills[i] + this.tips[i];
            }else if(this.bills[i] >= 50 && this.bills[i] <=200){
                this.tips[i] = this.bills[i] *0.15 ;
                this.amounts[i] = this.bills[i] + this.tips[i];                
            }else if (this.bills[i] > 200) {
                this.tips[i] = this.bills[i] *0.1 ;
                this.amounts[i] = this.bills[i] + this.tips[i];                  
            }else {
                console.log("Not proper value for a bill");
                this.tips[i] = this.bills[i] *0 ;
                this.amounts[i] = this.bills[i] + this.tips[i];                    
            }

        }
    },
    calcAvg: function(){
        var sum =0;
        for(var i=0; i< this.tips.length; i++){
            sum = sum + this.tips[i];
        }
        this.avg = sum/this.tips.length;
        return this.avg;
    }
    
};

var markObj={
    bills: [0],
    tips:[0],
    amounts:[0],
    avg: 0,
    calcTip: function(){
        for(var i=0; i<this.bills.length; i++){
            if(this.bills[i] < 100){
                this.tips[i] = this.bills[i] *0.2 ;
                this.amounts[i] = this.bills[i] + this.tips[i];
            }else if(this.bills[i] >= 100 && this.bills[i] <= 300){
                this.tips[i] = this.bills[i] *0.1 ;
                this.amounts[i] = this.bills[i] + this.tips[i];                
            }else if (this.bills[i] > 300) {
                this.tips[i] = this.bills[i] *0.25 ;
                this.amounts[i] = this.bills[i] + this.tips[i];                  
            }else {
                console.log("Not proper value for a bill");
                this.tips[i] = this.bills[i] *0 ;
                this.amounts[i] = this.bills[i] + this.tips[i];                    
            }

        }
    },
    calcAvg: function(){
        var sum =0;
        for(var i=0; i< this.tips.length; i++){
            sum = sum + this.tips[i];
        }
        this.avg = sum/this.tips.length; 
        return this.avg;
    }
    
};

johnObj.bills = [124, 48, 268, 180, 42];
johnObj.calcTip();
console.log("John tips: " + johnObj.tips);
console.log("John amounts: " + johnObj.amounts);
console.log("John avg tips: " + johnObj.calcAvg());

markObj.bills = [77, 375, 110, 45];
markObj.calcTip();
console.log("Mark tips: " + markObj.tips);
console.log("Mark amounts: " + markObj.amounts);
console.log("Mark avg tips: " + markObj.calcAvg());

if(johnObj.calcAvg() > markObj.calcAvg()){
    console.log("John\'s family paid the higer amounts in tips");
}else if(johnObj.calcAvg() < markObj.calcAvg()){
    console.log("Mark\'s family paid the higer amounts in tips");
}else {
    console.log("Both families paid equals amouts as tips");
}

