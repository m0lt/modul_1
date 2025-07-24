import { differenceInBusinessDays, differenceInYears } from "date-fns"

// ![=================== Aufgabe 1 ===================]

document.getElementById("zahlFormular").addEventListener("submit", function (e) {
  e.preventDefault()
  const eingabe = document.getElementById("zahlEingabe").value
  const doppelt = eingabe * 2
  document.getElementById("zahlEingabe").value = doppelt
})

// ![=================== Aufgabe 2 ===================]

document.getElementById("geburtsdatumFormular").addEventListener("submit", function (e) {
  e.preventDefault()
  const heute = new Date()
  console.log("heute : " + heute)

  const birthday = new Date(document.getElementById("geburtsdatumEingabe").value)
  console.log("Birthday: " + birthday)

  const alter = differenceInYears(heute, birthday)
  console.log("alter: " + alter)
  document.getElementById("userAge").innerHTML = "Alter: " + alter
})

// ![=================== Aufgabe 3 ===================]

document.getElementById("compareForm").addEventListener("submit", function (e) {
  e.preventDefault()
  const erstesAlter = new Date(document.getElementById("alterEins").value)
  const zweitesAlter = new Date(document.getElementById("alterZwei").value)
  const altersAbstand = differenceInYears(erstesAlter, zweitesAlter) * -1
  document.getElementById("altersDifferenz").innerHTML = altersAbstand + " Jahre"
})
