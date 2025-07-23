import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  differenceInYears,
  format,
  getDate,
  getDay,
} from "date-fns"
import { de } from "date-fns/locale"

let datum = new Date()

let tag = datum.getDate()
let monat = datum.getMonth() + 1
let jahr = datum.getFullYear()
console.log(tag + " " + monat + " " + jahr)

document.getElementById("datumV1").innerHTML = tag + "-0" + monat + "-" + jahr
document.getElementById("datumV2").innerHTML = tag + "/0" + monat + "/" + jahr

let uhrzeitUTC = datum.toUTCString()
let uhrzeitLocal = datum.toISOString()
console.log(uhrzeitLocal)
console.log(uhrzeitUTC)

document.getElementById("uhrUTC").innerHTML = uhrzeitUTC
document.getElementById("uhrLocale").innerHTML = uhrzeitLocal

// let UTCShort = datum.toLocaleDateString("de", { dateStyle: "short" })
// console.log(UTCShort)
// let localeShort = datum.toLocaleDateString("de", { dateStyle: "short" })
// console.log(localeShort)

let stunden = datum.getHours()
let minuten = datum.getMinutes()

document.getElementById("uhrzeit").innerHTML = stunden + ":" + minuten + " Uhr"

// ![=================== Aufgabe 2 ===================]

let damals = new Date(1970, 1, 1)

let diffYears = differenceInYears(damals, datum) * -1
let diffDays = differenceInDays(damals, datum) * -1
let diffHours = differenceInHours(damals, datum) * -1
let diffMinutes = differenceInMinutes(damals, datum) * -1
let diffSeconds = differenceInSeconds(damals, datum) * -1
console.log("Der 1.1.1970 ist " + diffYears + " Jahre her.")
console.log("Der 1.1.1970 ist " + diffDays + " Tage her.")
console.log("Der 1.1.1970 ist " + diffHours + " Tage her.")
console.log("Der 1.1.1970 ist " + diffMinutes + " Tage her.")
console.log("Der 1.1.1970 ist " + diffSeconds + " Tage her.")

const myBirthday = new Date(1991, 9, 25)

const alter = differenceInYears(datum, myBirthday)
console.log(alter)

console.log(format(myBirthday, "dd.MM.yyyy hh:mm:ss"))
console.log(format(myBirthday, "dd.MM.yyyy hh:mm"))
console.log(format(myBirthday, "dd.MM.yy"))
console.log(format(myBirthday, "dd. MMMM yyyy"))
console.log(format(myBirthday., "dd. MMMM yyyy"))

let meinGeburtstag = myBirthdaytoLocaleDateString("de")  