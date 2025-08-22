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