import { format, getDate, getDay } from "date-fns"

console.log("%c Date Methoden", "background-color: red; color:white")

const myDate = new Date()

console.log("myDate", myDate)
console.log(typeof myDate)
console.log(typeof myDate.toString())

// ? Koordinierte Weltzeit (UTC)
console.log(myDate.toUTCString())

console.log(format(new Date(), "'Heute ist' eeee"))

const gibMirTag = getDay(new Date(2025, 6, 29))
const gibMirTag2 = getDate(new Date(2025, 6, 29))
console.log(gibMirTag)
