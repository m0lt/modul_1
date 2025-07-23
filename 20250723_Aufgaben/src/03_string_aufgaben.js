console.log("[=================== Aufgabe 1 ===================]")

const earthQuote = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(earthQuote.indexOf("h"))
console.log(earthQuote.indexOf("Earth"))
console.log(earthQuote.indexOf("Moon"))

console.log("[=================== Aufgabe 2 ===================]")

const whereIsSusi = "Susi is back from codingschool"

function schnippel(satz, wort) {
  let start = satz.indexOf(wort)
  let ende = start + wort.length
  let ausschnitt = satz.substring(start, ende)
  return ausschnitt
}

const wort1 = schnippel(whereIsSusi, "Susi")
const wort2 = schnippel(whereIsSusi, "is")
const wort3 = schnippel(whereIsSusi, "school")

document.getElementById("subString1").innerHTML = wort1
document.getElementById("subString2").innerHTML = wort2
document.getElementById("subString3").innerHTML = wort3
document.getElementById("subString4").innerHTML = wort1 + " " + wort2 + " " + wort3
