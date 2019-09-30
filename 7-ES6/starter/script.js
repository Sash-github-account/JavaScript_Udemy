
/*var name5 = 'Jane Smith'
var age5= 23
name5 = 'Jane Miller'

console.log(name5)

const name6 = 'jane smith'
let age6 = 23
//name6 = 'jane miller'
//age6 = 24
//console.log(age6)


function driversLicense5(passedTest){
    if(passedTest){
        var firstName = 'john'
        var yesr = 1990
   
    }
         
        console.log(firstName + ' ' +yesr)
}

driversLicense5(true)



function driversLicense6(passedTest){
 
    let fistName;
    const yesr= 1990;
    if(passedTest){
        firstName = 'john'

    }
            
        console.log(firstName + ' ' +yesr)
}

driversLicense6(true)





var  i=23;

for(var i=0 ; i < 5; i++){
    console.log(i)
}

console.log(i)*/

/*

{
    const a =1;
    let b= 2;
}

    console.log(a+b)*/


/*
let firstName = 'John'
let lastName = 'smith'

const year = 1990;

function calculateAge (year){
    return 2016 - year;
}


console.log('this is' + firstName +' '+ lastName+ ' born '+ year+ ' and '+calculateAge(year)+' old.')

console.log(`This is ${firstName} ${lastName}, born in ${year} and ${calculateAge(year)} old`)


const nam = `${firstName} ${lastName}`

console.log(nam.startsWith('j'))
console.log(nam.endsWith('h'))
console.log(nam.includes(' '))
*/

/*
const years = [1990,1992,1937]

var ages5 = years.map(function(el){
    return 2016 - el
})

console.log(ages5)


let ages6 = years.map(el => 2016-el)

console.log(ages6)

ages6 = years.map((el,index)=> `Age element ${index}: ${2016-el}`)

console.log(ages6)

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear;
    const age  = now-el
    return `Age element ${index}: ${age}`
})*/


/*
var box5 ={
    color:'green',
    position:1,
    clickMe:function(){
        var self = this;
        document.querySelector('.green').addEventListener('click',function(){
            var str = 'This is box '+ self.position  +' and it is '+self.color;
            alert(str);
        });
        
    }
}

//box5.clickMe()


const box66 ={
    color:'green',
    position:1,
    clickMe:function(){
        
        document.querySelector('.green').addEventListener('click',() =>{
            var str = 'This is box '+ this.position  +' and it is '+this.color;
            alert(str);
        });
        
    }
}

*/
/*

const box6 ={
    color:'green',
    position:1,
    clickMe:() => {
        
        document.querySelector('.green').addEventListener('click',() =>{
            var str = 'This is box '+ this.position  +' and it is '+this.color;
            alert(str);
        });
        
    }
}

box66.clickMe() */

/*
function Person (name){
    this.name = name;
}

Person.prototype.myFriends = function(friends){
 
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));
    
    console.log(arr);
}

var  friends = ['bob', 'jane', 'mark']
new Person('John').myFriends(friends)



Person.prototype.myFriends6 = function(friends){
 
    var arr = friends.map( el =>` ${this.name} ' is friends with ' ${el}` );
    
    console.log(arr);
}


new Person('Mike').myFriends6(friends);
*/

/*
var john = ['john', 26];
var name = john[0];
var age = john[1];

const [name6, year] = ['john', 25];

console.log(name6 + year)

const obj = {
    firstName: 'john',
    lastName: 'smith'
};

const{firstName, lastName}= obj
    
console.log(firstName+ lastName)

const {firstName:a, lastName: b}=obj;
console.log(a)


function calcAgeRet(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age]
}

const [age2,ret] = calcAgeRet(1990);

console.log(age2 )*/



//const boxes = document.querySelectorAll('.box');

/*
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue'
}) 

const boxesArr6 = Array.from(boxes);

boxesArr6.forEach(cur=>cur.style.backgroundColor = 'dodgerblue');

/*
for ( var i=0; i<boxesArr5.length; i++){
    
    if(boxesArr5[i].className === 'box blue'){
        break;
    }else{
        boxesArr5[i].textContent = 'changd to blue'
    }
}*/

/*
for(const cur of boxesArr6){
    if(cur.className === 'box blue'){
        continue;
    }else{
        cur.textContent = 'changed'
    }
}


var ages = [12,17,8,21,14,11];
var full = ages.map(function(cur){return cur >= 18;})

console.log(full)

console.log(full.indexOf(true))
console.log(ages[full.indexOf(true)])

console.log(ages.findIndex(cur => cur >= 18))
console.log(ages.find(cur => cur >=18))
*/

/*

function addFourAges(a,b,c,d){
    return a+b+c+d;
}

var sum1 = addFourAges(18,30,12,21)
console.log(sum1)

var ages = [18,30,12,21]
var sum2 = addFourAges.apply(null,ages)
console.log(sum2)

const ma3 = addFourAges(...ages)
console.log(ma3)

const famSmith = ['john', 'jane','mark'];
const famMiller = ['mary', 'bob', 'ann'];

const BigFam = [...famSmith, ...famMiller];

console.log(BigFam);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple')

*/
/*
function isFull5 (limit){
    //console.log(arguments);
    var args = Array.prototype.slice.call(arguments,1);
    
    args.forEach(function(cur){console.log((2019 - cur) >= limit)});
}

isFull5(40,1990,1999,1965);

function isFull6 (limit, ...years){
    //console.log(years)
    years.forEach(cur =>console.log( 2019 - cur >= limit))
    
}
isFull6(50,1990,1999,1965);

*/

/*
function SmithPerson(firstName, year, lastName, nationality){
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality ='america' : nationality = nationality;
    this.fileName = firstName;
    this.lastName =lastName;
    this.year = year;
    this.nationality =nationality;
}*/

/*
function SmithPerson(firstName, year, lastName = 'SMITH', nationality = 'american'){
       this.fileName = firstName;
    this.lastName =lastName;
    this.year = year;
    this.nationality =nationality;
}


var emily = new SmithPerson('emiily', 1983, 'Diaz', 'spanih')

var john = new SmithPerson('john', 1990)

*/
/*
const question = new Map();

question.set('question', 'What is name?');
question.set(1, 'ES5');
question.set(2,'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct ans');
question.set(false, 'try again');

console.log(question.get('question'))
console.log(question.size)

//question.delete(4)


//question.clear()

//question.forEach((value, key)=> console.log(key + '  '+value))

for(let [key, value] of question.entries()){
        if(typeof(key)==='number'){
            console.log(`Answer ${key}: ${value}`)
        }
}

const ans = parseInt(prompt('Write the correct ans'));

console.log(question.get(ans === question.get('correct')))
*/
/*
var Person5 = function (name,year, job){
    this.name =name;
    this.year = year;
    this.job = job;
}

Person5.prototype.calcAge = function (){
    var age =new Date().getFullYear() - this.year;
    console.log(age)
}

var john5 = new Person5('john', 1990, 'teacher')


class Person6{
    constructor (name,year,job){
        this.name=name;
        this.year=year;
        this.job=job;
    }
    caluclAge(){
        var age =new Date().getFullYear() - this.year;
        console.log(age)       
    }
    
    static greeting(){
        console.log('Hi')
    }
}

var Mike = new Person6('john', 1988, 'flyer')

Person6.greeting();*/
/*
var Person5 = function (name,year, job){
    this.name =name;
    this.year = year;
    this.job = job;
}

Person5.prototype.calcAge = function (){
    var age =new Date().getFullYear() - this.year;
    console.log(age)
}

var Athelete5 = function(name,year, job, games, medals){
    Person5.call(this, name,year,job);
    this.games = games;
    this.medals = medals;
}



Athelete5.prototype = Object.create(Person5.prototype);

Athelete5.prototype.wonMetal = function(){
    this.medals++;
    console.log(this.medals)
}
var johnAth5 = new Athelete5('john', 1990, 'swimmer',3,10)
johnAth5.calcAge()




class Person6{
    constructor (name,year,job){
        this.name=name;
        this.year=year;
        this.job=job;
    }
    caluclAge(){
        var age =new Date().getFullYear() - this.year;
        console.log(age)       
    }
    

}

class Athlete6 extends Person6 {
    constructor(name,year,job,games,medals){
        super(name,year,job)
        this.games =games;
        this.medals =medals;
    }
    
    wonMetal(){
     this.medals++;
    console.log(this.medals)       
    }
}

const johnAth6 = new Athlete6('john',1997,'driver',3,13)
*/



//CHALLENGE-8
/*
class Town {
    constructor(parksNames, streetNames, parkYear, streetYear){
        this.parksNames =parksNames;
        this.streetNames = streetNames;
        this.parkYear =parkYear;
        this.streetYear = streetYear;
    }
}
*/

class Park{
    constructor(parksName,parkYear, numTrees, area ){
        this.parkName = parksName;
        this.parkYear = parkYear;
        this.numTrees    = numTrees;
        this.area =area;
        this.treeDens = 0;
    }
    
    calcTreedensity(){
       this.treeDens = this.numTrees / this.area;
    }

    
    dispPark(){
        console.log(`${this.parkName} park has a tree density of ${Math.round(this.treeDens)} tres per sq.km`);
    }
    
}

class Street{
    constructor(streetName, streetYear, size){
        this.streetName =streetName;
        this.streetYear = streetYear;
        this.size = size;
        this.classif = 'normal';
    }
    
    classifyStreet(){
        if(this.size < 1){
            this.classif = 'tiny';
        }else if(this.size >=1 && this.size < 5){
            this.classif = 'small';
        }else if (this.size >=5 & this.size <10){
            this.classif = 'normal';
        }else if(this.classif >=10 & this.size < 50){
            this.classif = 'big';
        }else{
            this.classif = 'huge'
        }
    }
    
    dispStreet(){
        console.log(`${this.streetName} built in ${this.streetYear} is a ${this.classif} street`);
    }
}

function dispTownInfo(parks,streets){
    var ages = []
    parks.forEach(cur => ages.push(2019 - cur.parkYear));
    console.log(ages)
    
    var avgAge = 0;
    ages.forEach(cur => {avgAge = avgAge+cur; console.log(avgAge)})
    avgAge = avgAge/ages.length;
    
    
    
    var totalLen = 0;
    streets.forEach(cur => {totalLen = totalLen + cur.size});
    
    console.log('--------PARK REPORT------------');
    console.log(`Our ${parks.length} parks have an average age of ${Math.round(avgAge)} `)
    parks.forEach(cur=> cur.calcTreedensity());
    parks.forEach(cur=> cur.dispPark());    
    parks.forEach(cur => {
        if(cur.numTrees >= 1000){
            console.log(`${cur.parkName} has 1000 or more trees`)
        }
    })
    console.log('--------STREETS REPORT------------');
    console.log(`our ${streets.length}  streets have a total length of ${totalLen} with an avg of ${Math.round(totalLen/streets.length)}`)
    streets.forEach(cur => cur.dispStreet())

    
}

var park1 = new Park('Park 1', 1990, 1200, 12);
var park2 = new Park('Park 2', 1994, 100, 9);
var park3 = new Park('Park 3', 1999, 200, 10);

var str1 = new Street('Commons dr.', 1982, 0.5);
var str2 = new Street('stratton dr.', 1982, 0.5);
var str3 = new Street('mccullum dr.', 1982, 0.5);
var str4 = new Street('main str.', 1982, 0.5);

dispTownInfo([park1,park2,park3],[str1,str2,str3,str4])