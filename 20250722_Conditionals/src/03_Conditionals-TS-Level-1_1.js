function ageCheck() {
  let age = document.getElementById("age").value
  if (age < 18) {
    document.getElementById("result").innerHTML = "Unter 18"
  } else if (age == 18) {
    document.getElementById("result").innerHTML = "Genau 18"
  } else {
    document.getElementById("result").innerHTML = "Über 18"
  }
}
