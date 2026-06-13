
console.log("hello world ");
var a = 22;
var b = "22";
var c = "hello";
var d = false;
if (a == b) {
    console.log("true");
} else {
    console.log("false");
}

if (a === b) {
    console.log("true");
} else {
    console.log("false");
}

for (var i = 0; i < 15; i++) {
    console.log(i);
}
var year = 286381;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

var prime = 5;
for (var i = 2; i < prime; i++) {
    if (prime % i == 0) {
        console.log(prime + " is not a prime number.");
        break;
    }
}
if (prime > 1) {
    console.log(prime + " is a prime number.");
}