
// console.log("hello world ");
// var a = 22;
// var b = "22";
// var c = "hello";
// var d = false;
// if (a == b) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// if (a === b) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// for (var i = 0; i < 15; i++) {
//     console.log(i);
// }
// var year = 286381;
// if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }

// var prime = 5;
// for (var i = 2; i < prime; i++) {
//     if (prime % i == 0) {
//         console.log(prime + " is not a prime number.");
//         break;
//     }
// }
// if (prime > 1) {
//     console.log(prime + " is a prime number.");
// }




// var data=[10, 20, 22.22, "Hello"]
// console.log(data);

// data.push(101);
// console.log(data);
// data.pop();

// console.log(data);
// data.shift();

// console.log(data);
// data.unshift(1);


// console.log(data);



// var data2=[1,3,4,5,8];

// console.log(data2);


// var data3=[9.23,234,345,234];
// console.log(data3);
// var newdata=[10000, ...data, ...data2, ...data3]
// console.log(newdata);




// var myobj={
//     id: 1,
//     name: "riya",
//     age: 21
// }

// console.log(myobj.name);
//JSON
var data = [
    {
        id: 1,
        name: "riya",
        age: 21,
        technology: ["javascript", "cloud", "python", "full stack"]
    },
    {
        id: 2,
        name: "priya",
        age: 22,
        technology: ["javascript"]
    }
]
console.log(data[0].technology[1]);

//hoisting

// add(2, 3);
// function add(a, b) {
//     console.log(a + b);
// }


// add(2, 3);
// function add(a, b) {
//     console.log(a * b);
// }

// add(2, 3)

// // Functions

// function add(a, b) {
//     console.log(a + b);
// }

// const myfun = function (a, b) {
//     console.log(a * b);
// }

// const myfun2 = (a, b) => {
//     console.log(a - b);
// }

// const myfun3 = (a, b) => a+b;

// add(2, 3);
// myfun(2, 3);
// myfun2(2, 3);
// console.log(myfun3(2, 3));

// document.getElementsByTagName("h1")[0].innerText = "Hello World";

// document.getElementById("para").innerText = "This is a simple HTML page. Welcome to JavaScript!";

// let headings = document.getElementsByTagName("h1");
// headings[0].innerText="Heading 1";
// headings[1].innerText="Heading 2";
// document.write(headings[0].innerText);

// const change=()=>{
//     var dis=document.getElementsByTagName("h1")[0];
//     dis.innerText="bye";
//     dis.style.color="red";
//     dis.style.backgroundColor="yellow";
//     dis.style.back
// }
const changecolour = ()=>{
    var dis=document.getElementById("display");
    var arr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F  "];
    var randomcolour="#";
    for(var i=0;i<6;i++){
        randomcolor+=arr[Math.floor(Math.random()*16)];
    }
    
    dis.style.backgroundColor=randomcolour;
}
