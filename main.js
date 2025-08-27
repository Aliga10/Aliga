//this is my first javaScript code!s 
console.log('hello world!');

let firstName = 'Aliga';
let lastName = 'developer';

//object
let person = {
    name : 'aliga',
    age : 20
};

// dot notation 
person.name = 'jhon'

console.log(person.name);

// bracket notation
person['name'] = 'marry'; 

//performing a task
function greet(firstName,lastName){
    console.log('hello ' + firstName + ' ' + lastName
    );
}

greet('Aliga','dev');

//calculating a value 
function square(number){
    return number * number;
}
let number = square(3);
console.log(number);
//another way 
console.log(square(4));

// comparing  type and value
console.log (1 === 1); 
console.log('1' === 1 );
// comparing value with the type of right side
console.log (true == 1 );

// if customer have more than 100 poin 
// they are gold customer , otherwise they are silver 
let points = 110 ;
let typeOfCustomer = points > 100 ? 'gold' : 'solver' ;
console.log (typeOfCustomer);

//logicaloperation
// AND (&&) return TRUE if both of operands is true 
console.log ( 'AND', true && true );

// OR (||) return TRUE if one is true 
console.log ( 'OR' ,true || false );

// NOT (!) return the oposite 
let NOT = !true ;
console.log ('NOT' , NOT)

// logical operator non boolean
// turthy and falsy 
// falsy is undefined null '' 0 NaN false , otherwise is turthy 

let usercolor = 'red';
let defaultColor = 'blue';
let selectedColor = usercolor || defaultColor;
console.log(selectedColor );

let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;
console.log( a );
console.log( b );

// if statement

// hour
// if hour is between 6 am and 12 pm say good morning
// if hour is between 12 pm and 6 pm say good afternoon 
// otherwise say good evening

// if (condition) {
//     statement
// } 
// else if (anotherCondition ) {
//     anotherStatement
// } else (yetAnotherCondition )
//     yetAnotherStatement;
    
let hour = 20;
if (hour >= 6 && hour < 12 )
    console.log('Good Morning!');
else if ( hour >= 12 && hour < 18 )
    console.log('Good Afternoon!');
else console.log('Good Evening!');

// loop
for (let i = 0 ; i <= 5 ; i++) {
    if (i % 2 !== 0 ) console.log (i)
}

let i = 0;
while (i <= 5 ){
    if (i % 2 == 0 ) console.log(i);
    i++;
}

// for in loop 

// const person ={
//     name : aliga ,
//     age : 20 
// };

for ( let key in person )
    console.log (key , person[key]);

const car = ['toyota' ,'honda','bmw']
for (let index in car ){
    console.log ( index, car[index]);
}
let x = 0;
while ( x < 10){
    if (x === 6 ) break;
    console.log(x);
    x++;
}

// exercise

// let width = 10;
// let hight = 20 ;
function isLancape ( width , hight ){
    if ( width > hight ) console.log ('lanscape');
    else console.log('potrait');
    
}
isLancape(10,20);

isLancape(25,16);

// fizzbuzz exercise
// if dixisible by 3 => fizz
// if divisible by 5 => buzz
// if divisible by both 3 and 5 => fizzbuzz
// if cannot divisible => return the number
// if input not a number => return not a number 

// const output = fizzbuzz(3)
// console.log(output);
fizzbuzz('3')

function fizzbuzz(input){
    if (typeof input !== 'number' ) {
        console.log('Not a Number') 
    }
    else if (input % 3 === 0 && input % 5 === 0 ){
        console.log('fizzbuzz');
    }
    else if (input % 3 === 0) {
        console.log('fizz');
    }
    else if (input % 5 === 0){
        console.log('buzz');
    }
    else console.log(input);
}

 halo (20)
function halo (pesan){
    if (pesan === 10)
        return 'kwaii'
    else return 'aliga' ;
}
console.log(halo(10));
console.log(halo(20))

// excercise
// speedlimit max = 70
// every 5 above speedlimit get 1 points
// use Math.floor()
// more than 12 ponts you get suspended



const speedLimit = 70 ;
const kmPerPoin = 5;

function checkSpeed(speed) {
    if (speed < speedLimit + kmPerPoin ){
        return 'OK';
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoin )
    if (points > 12)
        return 'suspended'
    else 
        return 'point ' + points;
}
console.log(checkSpeed(74))
console.log(checkSpeed(79))
console.log(checkSpeed(120))
console.log(checkSpeed(180))

// exercise
// show even and odd 

function showNumber(limit){
    for (let i = 0 ; i <= limit ; i++){
        const message = (i % 2 == 0) ? 'EVEN' : 'ODD'
        console.log(i , message)
    }
        
}
console.log(showNumber(10))

const array =[0,1,2,3,4, 'aliga','',0,undefined,'jhbscbh',null,'kwaii'] //truthy

function countTurthy(array){
    let counter = 0;
    array.forEach(function(nilai){
        if(!!nilai) counter++
    });
   return counter;
}
function counterTurthy2(array){
    let counter = 0;
    for(let value of array)
        if(value)
            counter++;
        return counter;
}
    
console.log(countTurthy(array))
console.log(counterTurthy2(array))

// print the value properties 

const movie = {
    tittle : 'naruto',
    releaseYear : 2010,
    rating : 8.1 ,
    studio : 'Toei'
};
function showProperties(obj){
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log (key , obj[key]);
}
showProperties(movie);
console.log(movie)

//sum function
//add all number multyple by 3 and 5 between the limit

function sum(limit){
    let multipleOf3 = 0;
    let multipleOf5 = 0;

    for (let i = 0;i <= limit; i++){
        if (i % 3 === 0){
           multipleOf3 += i ;
        }
        else if (i % 5 === 0){
            multipleOf5 += i;
        }
    }
    
    return multipleOf3 + multipleOf5;

}
console.log(sum(10));

// counting average of total array 
// 1-59 = F
// 60-69 = D
// 70-79 = C
// 80-89 = B
// 90-100 = A

let marks = [80,80,50];

function calculateGrade(marks){
    let total = 0;
    marks.forEach(function(item){
        total += item;
    })

    let jumlah = marks.length;
    let average = (total / jumlah);
   
    function grade(nilai) {
    if (nilai >= 90) {
        return 'A';
    } else if (nilai >= 80) {
        return 'B';
    } else if (nilai >= 70) {
        return 'C';
    } else if (nilai >= 60) {
        return 'D';
    } else {
        return 'E';
    }
    }
    return grade(average)

};


// console.log(calculateGrade(marks))

// let marks = [80, 80, 50];

// function calculateGrade(marks) {
//     // hitung rata-rata dengan reduce versi function biasa
//     let total = marks.reduce(function(acc, val) {
//         return acc + val;
//     }, 0);

//     let average = total / marks.length;

//     if (average >= 90) return 'A';
//     if (average >= 80) return 'B';
//     if (average >= 70) return 'C';
//     if (average >= 60) return 'D';
//     return 'F';
// }

// console.log(calculateGrade(marks)); // Output: C

// exercise

showStar(5);

function showStar(rows){
    for (let row = 0;row <= rows ; row++){
    let patern = '';
    for (let i = 0; i < row ; i++)
        patern += '*';
    
    console.log(patern)
}
}
