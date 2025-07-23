function sayHello(firstName) {
  const btnOutput = document.querySelector(".btn-output")
  console.log(btnOutput)
  btnOutput.innerHTML = `<p>${firstName}</p>`
}

// ?[=================== Counter ===================]

let outputVal = 0

function calc(operator) {
  const outputH4 = document.querySelector(".output-vom-rechner")
  outputVal = outputVal + operator
  outputH4.innerText = outputVal
}

function malZwei() {
  const outputH4 = document.querySelector(".output-vom-rechner")
  outputVal = outputVal * 2
  outputH4.innerText = outputVal
}

function reset() {
  const outputH4 = document.querySelector(".output-vom-rechner")
  outputH4.innerText = outputVal
}

// #[=================== Values auslesen ===================]

function getInputVal() {
  const name = document.querySelector("#name").value
  const age = document.querySelector("#age").valueAsNumber
  const range = Number(document.querySelector("#range").value)
  const checkbox = document.querySelector("#checkbox").checked
  const bday = document.querySelector("#bday").value

  console.log("Name" + name)
  console.log("Age" + age)
  console.log("Range" + range)
  console.log("Checkbox" + checkbox)
  console.log("Bday" + bday)

  document.querySelector(
    ".values"
  ).innerHTML += `<p>${name}, ${age}, range: ${range}, happy: ${checkbox}, Bday: ${bday}</p>`
}

// #[=================== Conditionals Statements -> if/else ===================]

const age = 17

if (age >= 18) {
  console.log("Du bist volljährig")
} else {
  console.log("Du bist minderjährig")
}

//function check

function checkNumber() {
  const inputNum = document.querySelector(".num-input")
  const inputNumVal = inputNum.value
  if (inputNumVal < 0) {
    console.log("Zahl ist kleiner als 0")
  } else if (inputNumVal == 0) {
    console.log("Zahl ist Null")
  } else {
    console.log("Zahl größer als Null")
  }
}

//LOgin
//? Logidaten
const username = "Marco"
const password = "supercode"

function checkUserData() {
  let loginUserName = document.querySelector("#userName")
  let passwordInput = document.querySelector("#password")

  const userNameVal = loginUserName.value
  const passwordVal = passwordInput.value

  const output = document.querySelector(".login-feedback")

  if (username == userNameVal && password == passwordVal) {
    output.innerHTML = "<p>Login successful.</p>"
  } else {
    output.innerHTML = "<p>Username or password wrong.</p>"
  }
}

//#Switch

const age1 = 29

switch (age1) {
  case 20:
    console.log("Age = 20")
    break
  case 21:
    console.log("Age = 21")
    break
  case 18:
    console.log("Age = 18")
    break
  default:
    console.log("Age = uns egal")
}

//add

function addClass() {
  const headline = document.querySelector(".add")
  headline.classList.add("big")
}

//remove

function removeClass() {
  const headline1 = document.querySelector(".remove")
  headline1.classList.remove("remove")
}
function toggleClass() {
  const headline1 = document.querySelector(".headline-toggle")
  headline1.classList.toggle("remove")
}
