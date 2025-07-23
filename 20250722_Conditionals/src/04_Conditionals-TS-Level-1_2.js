// function weather() {
function weatherTester() {
  let quality = document.getElementById("weather").value
  console.log(quality)
  if (quality >= 0 && quality <= 2) {
    document.getElementById("result").innerHTML = "Schlecht"
  } else if (quality >= 2 && quality < 5) {
    document.getElementById("result").innerHTML = "Okay"
  } else if (quality >= 6 && quality < 8) {
    document.getElementById("result").innerHTML = "Gut"
  } else if (quality >= 8 && quality <= 10) {
    document.getElementById("result").innerHTML = "Super"
  } else {
    document.getElementById("result").innerHTML = "Error"
  }
}
