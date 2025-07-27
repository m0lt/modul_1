// [=================== Bsp 1 ===================]

function loginFunction() {
  const usernameInput = document.querySelector("#username").value
  document.querySelector("p").innerText = `Hallo ${usernameInput}`
}

// [=================== V2 ===================]

const usernameInputElement = document.querySelector("#username")
const passwordInputElement = document.querySelector("#password")
const result = document.querySelector("p")

let userNameVomBackend = "Joe"
let passwordVomBackend = "123"

document.querySelector("#login").addEventListener("submit", function (e) {
  e.preventDefault()

  const userNameInputValue = usernameInputElement.value
  const passwordInputValue = passwordInputElement.value

  if (userNameInputValue === userNameVomBackend && passwordInputValue === passwordVomBackend) {
    result.innerText = `Guten Morgen ${userNameInputValue}, du bist eingeloggt.`
  } else {
    result.innerText = `Passwort oder Username ist falsch`
  }
})

// [=================== Bsp 2 ===================]

document.querySelector("#live-input").addEventListener("input", function (e) {
  // e.preventDefault()
  const inputValue = e.target.value
  console.log("Das ist die eingabe" + inputValue)
  document.querySelector("#live-input").style.color = "red"
  // e.style.color = "red"
})

document.querySelector

// [=================== bsp 3 ===================]

document.querySelector("#color-picker").addEventListener("input", function (e) {
  const inputElementValue = e.target.value
  document.body.style.backgroundColor = inputElementValue
})

// [=================== bsp 4 ===================]

// const myBtn = document.querySelector("#say-hi-tbn")
// const helloOutputElement = document.querySelector("#hello-output")

// myBtn.addEventListener("click", function () {
//   helloOutputElement.innerText = "Hallloo vom Eventlistener"
// })

// [=================== bsp5 ===================]

const textInputElement = document.querySelector("#text-input")

textInputElement.addEventListener("mouseover", function () {
  textInputElement.style.border = "3px solid black"
})

textInputElement.addEventListener("mouseout", function () {
  textInputElement.style.border = "3px solid blue"
})

// [=================== bsp 6 ===================]

const selectInputElement = document.querySelector("#select-input")
const selectOutputElement = document.querySelector("#select-output")

selectInputElement.addEventListener("change", function () {
  const selectInputValue = selectInputElement.value
  selectOutputElement.innerText = `Your Order is ${selectInputValue}`
})

// [=================== bsp 7 ===================]

const hacker = document.querySelector("#hacker")
const log = document.querySelector("#log")

hacker.addEventListener("keyup", function (e) {
  console.log(e.code)
})
