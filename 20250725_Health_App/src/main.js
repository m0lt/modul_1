import "./style.css"

const bodySizeInput = document.querySelector("#bodySize")
const ageInput = document.querySelector("#age")
const weigthInput = document.querySelector("#weigth")
const activityInput = document.querySelector("#activity")

const BMRkcalOutput = document.querySelector("#BMRkcal")
const TDEEkcalOutput = document.querySelector("#TDEEkcal")
const BMRkJOutput = document.querySelector("#BMRkJ")
const TDEEkJOutput = document.querySelector("#TDEEkJ")

let BMRkcal
let BMRkJ
let TDEEkcal
let TDEEkJ

function toKJ(kCal) {
  return kCal * 4.184
}

function toTDEE(BMR, actVal) {
  return BMR * actVal
}

document.querySelector("#formInput").addEventListener("submit", function (e) {
  e.preventDefault()

  const bodySizeValue = bodySizeInput.value
  const ageValue = ageInput.value
  const weightValue = weigthInput.value
  const activityValue = activityInput.value
  const genderInput = document.querySelector('input[name="gender"]:checked')
  const genderValue = genderInput.value

  console.log(
    "Bodysize: " +
      bodySizeValue +
      " Age: " +
      ageValue +
      " Weight: " +
      weightValue +
      " Activity: " +
      activityValue +
      " Gender: " +
      genderValue
  )

  if (genderValue === "male") {
    BMRkcal = 66.4 + 13.7 * weightValue + 5 * bodySizeValue - 6.8 * ageValue
    BMRkJ = toKJ(BMRkcal)
    TDEEkcal = toTDEE(BMRkcal, activityValue)
    TDEEkJ = toKJ(TDEEkcal)
  } else {
    BMRkcal = 655.1 + 9.6 * weightValue + 1.8 * bodySizeValue - 4.7 * ageValue
    BMRkJ = toKJ(BMRkcal)
    TDEEkcal = toTDEE(BMRkcal, activityValue)
    TDEEkJ = toKJ(TDEEkcal)
  }

  BMRkcalOutput.innerHTML = BMRkcal.toFixed(2)
  TDEEkcalOutput.innerText = TDEEkcal.toFixed(2)
  BMRkJOutput.innerText = BMRkJ.toFixed(2)
  TDEEkJOutput.innerText = TDEEkJ.toFixed(2)
})
