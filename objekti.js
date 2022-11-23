/*
Objekti
*/

let turisti = [
  {
    ime: "Petar",
    prezime: "Jović",
    jmbg: 1234568,
    posetio: ["Njujork", "London", "Pariz", "Moskva", "Peking"],
  },
  {
    ime: "Marko",
    prezime: "Ković",
    jmbg: 8765233,
    posetio: ["Beč", "Moskva", "London", "Minhen", "Atina"],
  },
  {
    ime: "Zoran",
    prezime: "Djordjević",
    jmbg: 7378967,
    posetio: ["Tel Aviv", "Njujork", "London", "Pariz", "Moskva"],
  },
  {
    ime: "Mirko",
    prezime: "Mitić",
    jmbg: 5201739,
    posetio: ["Minhen", "Atina", "Moskva", "Los Andjeles", "Čikago"],
  },
  {
    ime: "Jovana",
    prezime: "Cekić",
    jmbg: 9127439,
    posetio: ["Peking", "Moskva", "Los Andjeles", "Tel Aviv", "Njujork"],
  },
  {
    ime: "Nikola",
    prezime: "Brkić",
    jmbg: 4810984,
    posetio: ["London", "Moskva", "Tokio", "Čikago", "Peking"],
  },
  {
    ime: "Petar",
    prezime: "Zorić",
    jmbg: 1947204,
    posetio: ["Atina", "Moskva", "Los Andjeles", "Čikago", "Tel Aviv"],
  },
  {
    ime: "Marija",
    prezime: "Ivić",
    jmbg: 4209843,
    posetio: ["Čikago", "Tel Aviv", "Peking"],
  },
  {
    ime: "Biljana",
    prezime: "Lekić",
    jmbg: 8147409,
    posetio: ["Atina", "Tokio", "Njujork", "Pariz"],
  },
];

function posete() {
  turisti.forEach((el) => {
    return el.ime;
  });
}
console.log(posete());

function posete1() {
  turisti.forEach((el) => {
    console.log(el.ime);
  });
}
posete1();
