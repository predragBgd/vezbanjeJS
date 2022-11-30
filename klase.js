"use static ";
// Hrana
class Hrana {
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
}
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
class SlavskiKolaci extends Kolaci {}

// Glavna jela
let sarma = new GlavnoJelo("Sarma", ["Kupus", "Meso", "Pirinač"], false, 570);
let posniPasulj = new GlavnoJelo(
  "Posni pasulj",
  ["Pasulj", "Šaran"],
  true,
  480
);
// Salate
let kupusSalata = new Salata(
  "Kupus salata",
  ["Kupus", "Ulje", "Sirće", "So"],
  true,
  150
);
// Dezerti
// Torte
let moskvaTorta = new Torta(
  "Moskva Torta",
  ["Orasi", "Jaja"],
  1000,
  false,
  350
);
let cheesecake = new Torta("Cheesecake", ["Mleko"], 234, false, 300);

sarma.rucak();
sarma.zaVremePosta();
posniPasulj.zaVremePosta();
kupusSalata.zaVremePosta();
kupusSalata.popustZaSalatu();
