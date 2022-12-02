"use strict";

const Hrana = require("./hrana");

class Dezert extends Hrana {
  constructor(ime, alergeni, kalorije, posnoJelo, cena) {
    super(ime, posnoJelo, cena);
    this.alergeni = alergeni;
    this.kalorije = kalorije;
  }
  upozorenje() {
    if (this.kalorije > 500)
      console.log(`${this.ime} je visoko kalorično jelo.`);
  }
  zaVremePosta() {
    super.zaVremePosta();
  }
}
class Torta extends Dezert {}
class Kolaci extends Dezert {}
class SlavskiKolaci extends Kolaci {
  popustZaSlavu() {
    console.log(`Svi slavski kolaci su na dan vaše slave na popustu!`);
  }
}
module.exports = Dezert;
module.exports = Torta;
module.exports = Kolaci;
module.exports = SlavskiKolaci;
