//even or odd
let num = 10;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//if else if else
let num = 21;

if (num % 3 === 0 && num % 7 === 0) {
    console.log("FizzBuzz");
} else if (num % 3 === 0) {
    console.log("Fizz");
} else if (num % 7 === 0) {
    console.log("Buzz");
} else {
    console.log("Not divisible by 3 or 7");
}

//find greatest number among three numbers
let a = 15;
let b = 25;
let c = 10;

if (a >= b && a >= c) {
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
} else {
    console.log(c);
}

//pass and fail
let marks = 45;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//operations
console.log(true && true);     // true
console.log(true && false);    // false
console.log(false && true);    // false
console.log(false && false);   // false

console.log(true || true);     // true
console.log(true || false);    // true
console.log(false || true);    // true
console.log(false || false);   // false

//finds vowels in a string
let str = "JavaScript is awesome";
let vowels = "aeiouAEIOU";

for (let ch of str) {
    if (vowels.includes(ch)) {
        console.log(ch);
    }
}

//count vowels in a string
let str = "Masai School";
let count = 0;
let vowels = "aeiouAEIOU";

for (let ch of str) {
    if (vowels.includes(ch)) {
        count++;
    }
}

console.log("Vowels:", count);

//print each character of a string
let str = "Full Stack Development";

for (let ch of str) {
    console.log(ch);
}

//count spaces in a string
let str = "We are learning JavaScript";
let spaces = 0;

for (let ch of str) {
    if (ch === " ") {
        spaces++;
    }
}

console.log("Spaces:", spaces);


//print reverse of a string
let str = "Hello";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}

console.log(reverse);


//print numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//print numbers from 20 to 1
let i = 20;

while (i >= 1) {
    console.log(i);
    i--;
}

//multiplication table of 7
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}


//print even numbers from 1 to 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//sum of first 100 natural numbers
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum =", sum);

