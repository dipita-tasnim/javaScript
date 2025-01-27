// print
console.log("I am learning JavaScript.");

// variable
let age = 25;
age = age + 1;
console.log(age);

const fullName = "Dipita Tasnim";
console.log(fullName);

// data type
console.log(typeof age);
console.log(typeof fullName);

//object
const student = {
    name: "Dipita Tasnim",
    ID: 1234,
    cgpa: 8.2,
    isPass: true
};
console.log(student);
console.log(student["name"]);
console.log(student.name);

console.log(typeof student);
console.log(typeof student["name"]);


//conditional statement_ Task 1
//Ques 1: Get user to input a number using prompt("Enter a number"). Check if the number is a multiple of 5 or not.

let number = prompt("Enter a number");
if (number % 5 == 0){
    console.log(`${number} is a multiple of 5`);
}
else{
    console.log(`${number} is not a multiple of 5`);
}
//Done!

//conditional statement_Task 2
//Ques 2: Write a code which can give grades to students according to their scores:(80-100) A, (70-89) B, (60-69) C, (50-59) D, (0-49) F. 
let score = 75;
let grade
if (score >= 80 && score <= 100){
    grade = "A";
}
else if (score >= 70 && score <= 89){
    grade = "B";
}
else if (score >= 60 && score <= 69){
    grade = "C";
}
else if (score >= 50 && score <= 59){
    grade = "D";
}else if (score >= 0 && score <= 49){
    grade = "F";
}
console.log(`According to your score your grade is ${grade}`);
//Done!

//loop_Task 1
//Ques 1: Print all even numbers from 0 to 100.

for (let i = 0; i <= 100; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}
// Done!

// loop_Task 2
// Ques 2: Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value.

let user_number = prompt("Guess the game number");
let game_number = 20;
while (user_number != game_number){
    user_number = prompt("Try Again!");
}
console.log("Congratulations, You Win!");
//Done!


// string_Task 1
// Ques 1: Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the full name length.

let fullName  = prompt("Enter your full name without space");

let username = "@" + fullName + fullName.length;
console.log(username);
//Done!

//array_Task 1
//Ques 1: For a given array with marks of students -->[85, 97, 44, 37, 76, 60] Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < marks.length; i++){
    sum += marks[i];
}
let avg = sum / marks.length;
console.log(`The average marks of the entire class is ${avg}`);

//or
//using for-of loop
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let elem of marks){
    sum += elem;
}
let avg = sum / marks.length;
console.log(`The average marks of the entire class is ${avg}`);
//Done!

//array_Task 2
//Ques 2: For a given array with prices of 5 items -->[250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let price = [250, 645, 300, 900, 50];
for (let i = 0; i < price.length; i++){
    discount = (price[i] * 10)/100;
    price[i]-= discount;
}
console.log(`After 10% OFF the prices of element will be:\n${price}`);
//Done!

//array_Task 3
//Ques 3: Create an array to store companies --> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
//a) Remove the first company from the array.
//b) Remove Uber and add Ola in its place.
//c) Add "Amazon" at the end.

//a)
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log(companies);

//b)
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.splice(2, 1, "Ola");
console.log(companies);

//c)
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.push("Amazon");
console.log(companies);
//Done!