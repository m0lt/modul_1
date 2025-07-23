let num1 = 5.56789
let num2 = 5.16698
let num3 = 7.78714
let num4 = "12.3"
let num5 = true
let num6 = false
let num7 = "321"
let num8 = "Supercode"

let n2 = Number(num2).toFixed(2)
let n3 = Number(num3).toFixed(2)
let n1 = Number(num1).toFixed(2)
let n4 = Number(num4).toFixed(2)
let n5 = Number(num5).toFixed(2)
let n6 = Number(num6).toFixed(2)
let n7 = Number(num7).toFixed(2)
let n8 = Number(num8).toFixed(2)

console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
console.log(n5)
console.log(n6)
console.log(n7)
console.log(n8)

// [=================== Aufgabe 2 ===================]
console.log("[=================== Aufgabe 2 ===================]")
// let test = 15
// let test = 15.16698
// let test = 7.78714;
// let test = "12.3"
let test = "3.14random"
// let test = "32px";
// let test = true
// let test = false
// let test = "321"
// let test = "Supercode"

let test2 = Number(test)

let a = test2.toString()
let b = test2.toString(2)
let c = test2.toString(8)
let d = test2.toString(16)

console.log("a()= " + a + " // b(2)=" + b + " // c(8)=" + c + " // d(16)=" + d)

// [=================== Aufgabe 3 ===================]
console.log("[=================== Aufgabe 3 ===================]")

// let test3 = 15
let test3 = 15.16698
// let test3 = 7.78714;
// let test3 = "12.3"
// let test3 = "3.14random"
// let test3 = "32px";
// let test3 = true
// let test3 = false
// let test3 = "321"
// let test3 = "Supercode"

let test4 = Number(test3)

console.log("Int: " + parseInt(test4))
console.log("Float: " + parseFloat(test4))
