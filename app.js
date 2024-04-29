/* // const calculator = {
//     plus: function (a, b) {
//         return (a + b);
//     },
//     minus: function (a, b) {
//         return (a - b);
//     },
//     times: function (a, b) {
//         return (a * b);
//     },
//     divide: function (a, b) {
//         return (a / b);
//     },
//     power: function (a, b) {
//         return (a ** b);
//     }
// }

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);
// console.log(plusResult, minusResult, timesResult, divideResult, powerResult);

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     const result = ageOfForeigner + 2;
//     return result;
// }

// const KrAge = calculateKrAge(age);
// console.log(KrAge);

let age = parseInt(prompt("How old are you?"));

while (true) {
  if (isNaN(age) || age < 0) {
    age = parseInt(prompt("Please write a real positive number."));
    continue;
  } else if (age < 18) {
    alert("You are too young.");
    break;
  } else if (age >= 18 && age <= 50) {
    alert("You can drink.");
    break;
  } else if (age > 50 && age <= 80) {
    alert("You can drink.");
    break;
  } else if (age == 100) {
    alert("wow you are wise.");
    break;
  } else if (age > 80) {
    alert("You can do whatever you want.");
    break;
  }
}
 */
/* 
const h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click() {
  h1.style.color = "blue";
}

function handlemouseenter() {
  h1.innerText = "mouse is here!";
}

function handlemouseleave() {
  h1.innerText = "mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "event";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("All good");
}

h1.onclick = handleh1Click;
h1.onmouseenter = handlemouseenter;
h1.addEventListener("mouseleave", handlemouseleave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
 */
// const h1 = document.querySelector("div.hello:first-child h1");

// const originalClass = h1.className;

// function handleH1Click() {
//   /* 아래의 코드 4줄을 한줄로 줄임
//   const clickedClass = "clicked";
//   h1.classList.contains(clickedClass)
//     ? h1.classList.remove(clickedClass)
//     : h1.classList.add(clickedClass); */
//   h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleH1Click);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 자동으로 넘겨 받는 event를 통해
// 브라우저가 새로고침 되는 것을 통제한다.
function onLoginSubmit(event) {
  // 기본동작(새로고침 등)이 실행되는 것을 막아준다.
  event.preventDefault();
  console.log(savedUsername);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show greeting
  paintGreetings(savedUsername);
}
