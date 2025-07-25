const wetterWert = document.getElementById("wetterSlider")
wetterWert.addEventListener("input", function (event) {
  checkAirQuality(event.target.value) //Callback function
})
console.log(wetterWert)

function checkAirQuality(luftQuali) {
  // console.log(event)
  document.getElementById("qualitaetOutput").innerHTML = luftQuali

  if (luftQuali >= 0 && luftQuali <= 50) {
    document.getElementById("health").innerHTML = "Good"
    document.getElementById("risk").innerHTML = "Little or no risk"
    document.body.style.backgroundColor = "green"
  } else if (luftQuali > 50 && luftQuali <= 100) {
    document.getElementById("health").innerHTML = "Moderate"
    document.getElementById("risk").innerHTML = "Acceptable Quality"
    document.body.style.backgroundColor = "yellow"
  } else if (luftQuali > 100 && luftQuali <= 150) {
    document.getElementById("health").innerHTML = "Unhealthy for sensitive groups"
    document.getElementById("risk").innerHTML = "Generable publics not likely affected"
    document.body.style.backgroundColor = "orange"
  } else {
    document.getElementById("health").innerHTML = "Error"
    document.getElementById("risk").innerHTML = "Error"
    document.body.style.backgroundColor = "red"
  }
}

// function checkAirQuality(value) {
//   console.log(value)
//   document.getElementById("qualitaetOutput").innerHTML = value

//   if (value >= 0 && value <= 50) {
//     document.getElementById("health").innerHTML = "Good"
//     document.getElementById("risk").innerHTML = "Little or no risk"
//     document.body.style.backgroundColor = "green"
//   } else if (value > 50 && value <= 100) {
//     document.getElementById("health").innerHTML = "Moderate"
//     document.getElementById("risk").innerHTML = "Acceptable Quality"
//     document.body.style.backgroundColor = "yellow"
//   } else if (value > 100 && value <= 150) {
//     document.getElementById("health").innerHTML = "Unhealthy for sensitive groups"
//     document.getElementById("risk").innerHTML = "Generable publics not likely affected"
//     document.body.style.backgroundColor = "orange"
//   } else {
//     document.getElementById("health").innerHTML = "Error"
//     document.getElementById("risk").innerHTML = "Error"
//     document.body.style.backgroundColor = "red"
//   }
// }

window.checkAirQuality = checkAirQuality
