const randomNumbers = [3.14, 193.4464, 0.8596433607, -2.940629089]

console.log("Original:", randomNumbers)

function runden(eckig) {
  return Math.round(eckig)
}

const gerundeteZahlen = randomNumbers.map(runden)

console.log("Gerundet:", gerundeteZahlen)

console.log("[=================== Aufgabe 2 ===================]")

const randomNum = Math.random()
console.log(randomNum)

const random1bis10 = Math.round(Math.random() * 10)
console.log(random1bis10)

const random1bis100 = Math.round(Math.random() * 100)
console.log(random1bis100)

console.log("[=================== Aufgabe 3 ===================]")

const unbekannteZahl = Math.ceil(Math.random() * 10)
console.log(unbekannteZahl)

const answer = prompt("Wanna play a game? An welche Zahl von 1 bis 10 denke ich?")

if (answer == unbekannteZahl) {
  alert("Das ist ein BINGO")
} else {
  alert("Das ist schade...")
}
