/*  document.write("Hello JavaScript");
  document.write("!!!");
console.log("Hello JavaScript");
console.error("Hello JavaScript");
console.warn("Hello JavaScript");
console.info("Hello JavaScript");

let num = 5;
const some_new = "Result:";

console.log(some_new + num + "!");

const number = 10;
console.log(number);

let isJohnHasCar = true;
num = "Word";
console.log(num);

let num1 = 15;
let num2 = 10;
/let res = num1 - num2;

console.log("Result:" + (num1 - num2));
console.log("Result:" + (num1 + num2));
console.log("Result:" + num1 * num2);
console.log("Result:" + num1 / num2);
console.log("Result:" + (num1 % num2));

let num3 = 5;
let num4 = "10";
console.log(num3 + Number(num4));
num1 += 10;
num1++;
console.log(num1);

let pi = Math.PI;
console.log(Math.max(2, 3, -8, 10, -2));

let number = 15;
let isHasCar = true;

if (number >= 15 || !isHasCar) {
  console.log("Yes");
  console.log("Yes, he has a car");
} else if (number == 15) {
  console.log("Num is 15");
} else console.log("Else");*/

/*let word = "some";

switch (word) {
  case "new":
    console.log("Let is new");
    break;
  case "5":
    console.log("Let is 5");
    break;
  case "Some":
    console.log("Let is Some");
    break;
  default:
    console.log("Let is unknown");
    break;
}*/

/*let data = [9, 7, 2, 5, 8.2, "Word", true]; //new Array(4, 5, 2, 8)
data[0] = "Some";
console.log(data.length);

let matrix = [
  [5, 6],
  ["World", false],
  [true, 5.9, 0],
];
matrix[0][0] = 60;
console.log(matrix[2][1]);*/

/*for (let i = 100; i > 10; i /= 2) {
  console.log(i);
}

let i = 0;
while (i < 15) {
  console.log(i);
  i += 2;
}

let i = 100;
do {
  console.log(i);
  i /= 2;
} while (i > 10);

for (let i = 10; i > 0; i--) {
  if (i == 2) {
    break;
  }
  if (i % 2 == 0) continue;
  console.log(i);
}

let nums = [5, 6, 2, 7, 100, 10];

for (let i = 0; i < nums.length; i++) {
  nums[i] *= 2;
  console.log("Element is:" + nums[i]);
}*/

// alert("Привіт");
/*let data = confirm("ok?");
if (data) alert("Hello");
else console.log("Error");

let user = prompt("How are you?", "Ok");
if (user == null) alert("It's bad");
else console.log("It's good");*/

/*function print(word) {
  alert(word + "!");
}

function add(x, y) {
  if (x != null && y != null) {
    let res = Number(x) + Number(y);
    print("Result:" + res);
  } else alert("Error");
}
let user1 = prompt("Enter one number", 0);
let user2 = prompt("Enter second number", 0);
add(user1, user2);
print("Hello");
let someNew = "New text";
print(someNew);*/

/*function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let arr1 = [5, 4, 2, 6];
let sum1 = arrSum(arr1);

let arr2 = [5, 4, 2, 6, 10];
let sum2 = arrSum(arr2);

if (sum1 > sum2) console.log(sum1);
else console.log(sum2);*/

/*let counter = 0;
function btnClick(el) {
  counter++;
  el.innerHTML = "Counter:" + counter;
  // el.name = "New value";
  // alert(el.name);
}

function inputValue(el) {
  if (el.value == "font") el.style.fontSize = "20px";
  else if (el.value == "color") el.style.color = "red";
  else if (el.value == "bg") el.style.backgroundColor = "orange";
}*/

/*let block = document.getElementById("some-block");
block.innerHTML = "Hello <b>world</b>!";
block.style.color = "red";
block.style.backgroundColor = "pink";
block.className = "block";

console.log(block.className);

document.getElementById("param").innerHTML = "New text";
//let spans = document.getElementsByTagName("span");

let spans = document.getElementsByClassName("el_span");
for (let index = 0; index < spans.length; index++) {
  spans[index].style.fontSize = "20px";
  spans[index].title = spans[index].innerText + "!";
}*/

/*document.getElementById("my-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const el = document.getElementById("my-form");
  let username = el.username.value;
  let email = el.email.value;
  let password = el.password.value;
  let gender = el.gender.value;

  let error = "";
  if (username.length < 2) error = "Name shorts";
  else if (email.length < 2) error = "Email shorts";
  else if (!email.includes("@")) error = "Email don't have @";
  else if (password.length < 2) error = "Password shorts";
  else if (gender == null || gender == "") error = "Gender error";

  if (error != "") {
    document.getElementById("error").innerText = error;
    return false;
  }
  document.getElementById("error").innerText = "";
  window.location = "google.com";
  return false;
});*/

/*let timerid = setTimeout(() => {
  alert("Message");
}, 5000);

let id = setInterval(my_func, 1000);

let counter = 0;
function my_func() {
  document.getElementById("timer").innerHTML = "Counter:" + counter;
  counter++;
}
function stopInterval() {
  //clearInterval(id);
  clearTimeout(timerid);
}

setInterval(function () {
  console.log("Sec:");
}, 2000);*/

/*setInterval(() => {
  let data = new Date();
  // data.setHours(23);
  let oclock =
    "Hours:" +
    data.getHours() +
    ":" +
    data.getMinutes() +
    ":" +
    data.getSeconds();
  document.getElementById("time").innerText = oclock;
}, 1000);

let arr = [9, 2, 5, "Some", true];
console.log(arr.sort().reverse());

let user = prompt("Enter films:");
let films = user.split(",");
console.log(films.join("-"));*/

class Person {
  name = "";
  age = 0;
  gender = "";

  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  info() {
    console.log("Person:" + this.name + this.age + this.gender);
  }
}

let alex = new Person("Alex", 25, "male");
alex.info();

let bob = new Person("Bob", 18, "male");
bob.age = 30;
bob.info();

console.log(alex.name);
console.log(bob.name);
