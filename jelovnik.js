"use strict";
const Supa = require("./klase/rucak");
const GlavnoJelo = require("./klase/rucak");
const Salata = require("./klase/rucak");

const Dezert = require("./klase/dezert");
const Torta = require("./klase/dezert");
const Kolaci = require("./klase/dezert");
const SlavskiKolaci = require("./klase/dezert");

// Supe
let pilecaSupa = new Supa(
  "Pileća supa",
  ["Pileće meso", "Rezanci"],
  false,
  200
);

// Glavna jela
let sarma = new GlavnoJelo("Sarma", ["Kupus", "Meso", "Pirinač"], false, 570);
let posniPasulj = new GlavnoJelo(
  "Posni pasulj",
  ["Pasulj", "Šaran"],
  true,
  480
);
let gulas = new GlavnoJelo("Gulaš", ["Meso"], false, 550);
let punjenePaprike = new GlavnoJelo(
  "Punjene paprije",
  ["Paprike", "Meso"],
  false,
  600
);
let glavnaJela = [sarma, posniPasulj, gulas, punjenePaprike];
// Salate
let kupusSalata = new Salata(
  "Kupus salata",
  ["Kupus", "Ulje", "Sirće", "So"],
  true,
  150
);
let sopskaSalata = new Salata(
  "Šopska salata",
  ["Paradajiz", "Krastavac", "Sir"],
  false,
  200
);

// Torte
let moskvaTorta = new Torta(
  "Moskva Torta",
  ["Orasi", "Jaja"],
  1000,
  false,
  350
);
let cheesecake = new Torta("Cheesecake", ["Mleko", "Jaja"], 234, false, 300);
// Kolaci
let cokoladniKolac = new Kolaci(
  "Čokoladni kolač",
  ["Čokolada", "Mleko", "Orasi"],
  6006,
  false,
  350
);
let vocniKolac = new Kolaci("Voćni kolač", [], 500, true, 350);

// for (let el of glavnaJela) {
//   el.rucak("");
// }
// for (let el of glavnaJela) {
//   if (el.ime == "Gulaš") {
//     el.rucak();
//   }
// }
sarma.zaVremePosta();
posniPasulj.zaVremePosta();
kupusSalata.zaVremePosta();
kupusSalata.popustZaSalatu();
moskvaTorta.upozorenje();
