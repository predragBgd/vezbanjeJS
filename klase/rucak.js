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
}
class Salata extends Hrana {
  popustZaSalatu() {
    console.log(
      `${this.ime} je na popustu uz Glavno jelo. Nova cena je ${this.cena - 15}`
    );
  }
  zaVremePosta() {
    super.zaVremePosta();
  }
}
module.exports = Supa;
module.exports = GlavnoJelo;
module.exports = Salata;
