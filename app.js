// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('chal bahg');
// });

// server.listen(port, hostname, () => {
//   console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
// });

// let numb1 = 12;
// let numb2 = 12
// console.log(numb1);

// numb1+=3;
// console.log(numb1)
// console.log(numb2 + ++numb1); // prefix
// console.log(numb2 + numb1++); // postfix
// console.log(numb1)

// console.log(numb1 >= numb2)
// console.log(numb1 == numb2)
// console.log(numb1 === numb2)


// let b = numb1 != numb2;
// console.log(b)
// numb1 === numb2 ? console.log("done") : console.log("not done")


// let age = 10;
// let citizen = "india";
// && is and opratore it will check both the condition and then give response ad true 
// let canvote = age >= 18 && citizen == "indian" ? "can vote" : "can not vote";
// console.log(canvote)
// || is or opratore it will check both the condition and if any one condition is true it will reture the value of ture or false 
// let canvote = age >= 18 || citizen == 'indian' ? "can vote" : "can not vote "
// console.log(canvote)

// let user = {
//     name:"ankit",
//     country:"india",
//     age:18
// }
// // console.log(user)

// // delete user.name;

// // console.log(user)

// // user.name = 'ankit'

// // console.log(user)

// // console.log(typeof user)

// console.log( user.name)


// let firstname = "ankit";
// let surname = "Singh";

// // This will only work with ``  this. this will not work with "" or ''
// console.log(`I am ${firstname} ${surname}`)

// if wee want ot add "" in string then we have to use \ for that for eg \"Indian"\ 
// if you are using '' then you can use "" in that 
// let name = "Ankit is an \"Indian\"."
// console.log(name)


// if we want to print something in next line the we can use \n to print string after \n to print in next line 
// let fullname = "Ankit is an \nIndian."
// console.log(fullname)

// // .toUpperCase will captialise all the letters of the string
// console.log(
//     fullname.toUpperCase()
// )

let firstname = "Ankit"

console.log(firstname.toUpperCase())

// this will convert all strings into lowercase 
console.log(firstname.toLowerCase())