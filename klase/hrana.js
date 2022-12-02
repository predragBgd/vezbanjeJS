"use static ";

module.exports = class Hrana {
  constructor(ime, sastojci, posnoJelo, cena) {
    this.ime = ime;
    this.sastojci = sastojci;
    this.posnoJelo = posnoJelo;
    this.cena = cena;
  }
  zaVremePosta() {
    if (this.posnoJelo === true) {
      console.log(`${this.ime} je posno jelo.`);
    } else console.log(`${this.ime} nije posno jelo.`);
  }
};
