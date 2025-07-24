function check() {
  const bundeslandEingabe = document.getElementById("bundeslandInfo").value
  const cleanedBundesland = bundeslandEingabe.toLowerCase()
  console.log(cleanedBundesland)

  switch (cleanedBundesland) {
    case "baden-württemberg":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
      break
    case "bayern":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt"
      break
    case "berlin":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt"
      break
    case "brandenburg":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt"
      break
    case "bremen":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"
      break
    case "hamburg":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt"
      break
    case "hessen":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt"
      break
    case "mecklenburg-vorpommern":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt"
      break
    case "niedersachsen":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt"
      break
    case "nordrhein-westfalen":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt"
      break
    case "rheinland-pfalz":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt"
      break
    case "saarland":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt"
      break
    case "sachsen":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt"
      break
    case "sachsen-anhalt":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt"
      break
    case "schleswig-holstein":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt"
      break
    case "thüringen":
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt"
      break
    default:
      document.getElementById("bundeslandInfoErgebnis").innerHTML =
        "Ein solches Bundesland gibt es in Deutschland nicht."
  }
}
