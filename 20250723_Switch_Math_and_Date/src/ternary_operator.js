const myAge = 19

if (myAge > 20) {
  console.log("Ich darf Party machen")
} else {
  console.log("Geh nach haus")
}

myAge > 20 ? console.log("Ich darf Party machen") : console.log("Geh bitte nach Hause")

let test = myAge > 20 ? "Ich darf Party machen" : "Geh bitte nach Hause2"
console.log(test)

const a = 5
const b = 2
const operator = "+"

const ergebnis =
  operator == "+" ? a + b : operator == "*" ? a * b : operator == "/" ? a / b : operator == "-" ? a - b : "Error"
console.log(a + " " + operator + " " + b + " = " + ergebnis)
