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


let age = 10;
let citizen = "india";
// && is and opratore it will check both the condition and then give response ad true 
// let canvote = age >= 18 && citizen == "indian" ? "can vote" : "can not vote";
// console.log(canvote)
// || is or opratore it will check both the condition and if any one condition is true it will reture the value of ture or false 
let canvote = age >= 18 || citizen == 'indian' ? "can vote" : "can not vote "
console.log(canvote)