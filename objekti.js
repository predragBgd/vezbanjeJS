/*
Objekti
*/

let turisti = [
  {
    ime: "Petar",
    prezime: "Jović",
    posetio: ["Njujork", "London", "Pariz", "Moskva", "Peking"],
    godiste: 1999,
  },
  {
    ime: "Marko",
    prezime: "Ković",
    posetio: ["Beč", "Moskva", "London", "Minhen", "Atina"],
    godiste: 1987,
  },
  {
    ime: "Zoran",
    prezime: "Djordjević",
    posetio: ["Tel Aviv", "Njujork", "London", "Pariz", "Moskva"],
    godiste: 2002,
  },
  {
    ime: "Mirko",
    prezime: "Mitić",
    posetio: ["Minhen", "Atina", "Moskva", "Los Andjeles", "Čikago"],
    godiste: 1974,
  },
  {
    ime: "Jovana",
    prezime: "Cekić",
    posetio: ["Peking", "Moskva", "Los Andjeles", "Tel Aviv", "Njujork"],
    godiste: 1991,
  },
  {
    ime: "Nikola",
    prezime: "Brkić",
    posetio: ["London", "Moskva", "Tokio", "Čikago", "Peking"],
    godiste: 2001,
  },
  {
    ime: "Petar",
    prezime: "Zorić",
    posetio: ["Atina", "Moskva", "Los Andjeles", "Čikago", "Tel Aviv"],
    godiste: 2005,
  },
  {
    ime: "Marija",
    prezime: "Ivić",
    posetio: ["Čikago", "Tel Aviv", "Peking"],
    godiste: 1981,
  },
  {
    ime: "Biljana",
    prezime: "Lekić",
    posetio: ["Atina", "Tokio", "Njujork", "Pariz"],
    godiste: 1991,
  },
];

let osobe = [
  "Mladen",
  "Jovan",
  "Ivana",
  "Jelena",
  "Miloš",
  "Ivan",
  "Nina",
  "Mila",
  "Zoran",
];

let arv = turisti.map((el) => el.ime + " je bio u " + el.posetio);
console.log(arv);
