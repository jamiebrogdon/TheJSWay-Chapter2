//CHAPTER 2
//Write a program that asks the user for his first name and his last name. The program then displays them in one sentence:
const yourName = prompt("Enter your first name:");
alert(`Hello there, ${yourName}`);

//CHAPTER 2
//Observe the following program and try to predict the final values of its variables:
let a = 2; //2
a -= 1; //1
a++; //a contains 2
let b = 8; //8
b += 2; //b contains 10
const c = a + b * b; //c contains 102
const d = a * b + b; //d contains 30
const e = a * (b + b); //e contains 40
const f = a * b / a; //f contains 10
const g = b / a * a; //g contains 10
console.log(a, b, c, d, e, f, g); //2, 10, 102, 30, 40, 10, 10