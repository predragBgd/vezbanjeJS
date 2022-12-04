"use strict";

const Hrana = require("./hrana");

class Supa extends Hrana {}
class GlavnoJelo extends Hrana {
  rucak() {
    console.log(`${this.ime} sluzi se od 12 do 19 časova.`);
  }
  zaVremePosta() {
    super.zaVremePosta();
  }
  static popust1(naPopustu) {
    return `Popust na ${naPopustu} od 12 do 14 časova.`;
  }
}
class Salata extends Hrana {
  popustZaSalatu() {
    console.log(
      `${this.ime} je na popustu uz Glavno jelo. Nova cena je ${
        this.cena - 15
      } dinara.`
    );
  }
  zaVremePosta() {
    super.zaVremePosta();
  }
}
console.log(GlavnoJelo.popust1("jela od juče"));
module.exports = Supa;
module.exports = GlavnoJelo;
module.exports = Salata;
