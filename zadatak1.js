let turisti = [
  {
    ime: "Jovan",
    prezime: "Petrović",
    godiste: 1989,
    telefon: "+301601123557",
    posetioGradove: ["Prag", "Pariz", "Minhen"],
  },
  {
    ime: "Milan",
    prezime: "Zorić",
    godiste: 2001,
    telefon: "+301638954171",
    posetioGradove: ["London", "Minhen", "Prag", "Pariz", "Budimpešta"],
  },
  {
    ime: "Aleksandra",
    prezime: "Nikolić",
    godiste: 2010,
    telefon: "+381698709000",
    posetioGradove: ["Prag", "Moskva", "Pariz", "Sidnej", "Solun"],
  },
  {
    ime: "Monika",
    prezime: "Bubić",
    godiste: 2015,
    telefon: "+30165167415",
    posetioGradove: ["Njujork", "Beč", "Minhen", "Venecija"],
  },
  {
    ime: "Goran",
    prezime: "Brkić",
    godiste: 1973,
    telefon: "+381648120942",
    posetioGradove: ["Pariz", "Prag", "Venecija", "Beč", "Solun"],
  },
];

// for (let turista in turisti) {
//   console.log(turisti[turista].ime + " " + turisti[turista].prezime);
// }

// Funkcija kreira novog turistu
function kreirajNovogTuristu(ime, prezime, godiste, telefon, posetioGradove) {
  turisti.push({
    ime: ime,
    prezime: prezime,
    godiste: godiste,
    telefon: telefon,
    posetioGradove: posetioGradove,
  });
}
kreirajNovogTuristu("Milan", "Dobrić", 1981, "+38164910298", "Lisabon");

// Funkcija upisuje novi grad koji je turista posetio
function dodajGradTuristi(imeTuriste, grad) {
  for (let turista in turisti) {
    if (turisti[turista].ime == imeTuriste) {
      turisti[turista].posetioGradove.push(grad);
    }
  }
}
dodajGradTuristi("Goran", "Madrid");
//funkcija ispisuje gradove koje turista zeli da poseti

// Funkcija ispisuje gradove koje je posetio turista------i brise zelje--------
function posetioci(ime) {
  for (let turista in turisti) {
    if (turisti[turista].ime == ime) {
      console.log(
        turisti[turista].ime +
          " je posetio gradove: " +
          turisti[turista].posetioGradove.join(", ") +
          "."
      );
    }
  }
}
posetioci("Goran");
/*
let noviTuristaA = ["Milan1", "Dobrić4", 1981, "+38164910298", "Lisabon6"];
let noviTuristaO = {};
let noviT = () => {
  for (let el of noviTuristaA) {
    return noviTuristaO[el].ime;
  }
};
noviT();
console.log(noviTuristaO);
*/

//Funkcija menja broj telefona turiste
function promeniTelefon(ime, telefon) {
  for (let turista of turisti) {
    if (turista.ime == ime) {
      return (turista.telefon = telefon);
    }
  }
}
console.log(promeniTelefon("Goran", "+38161357990"));

// Funkcija prikazuje turiste prema godistu
function prikaziTuristePoGodistu(godiste) {
  console.log("Turisti mladji od " + godiste + " godine.");
  turisti.forEach((turista) => {
    if (turista.godiste <= godiste) {
      console.log(turista.ime + " " + turista.godiste);
    }
  });
}
prikaziTuristePoGodistu(2000);

// Prikazuje sve turiste
function prikaziTuriste() {
  console.log("Turisti u sistemu:");
  turisti.forEach((turista) => {
    console.log(
      turista.ime +
        " " +
        turista.prezime +
        " " +
        turista.godiste +
        " " +
        turista.telefon +
        " " +
        turista.posetioGradove
    );
  });
}
prikaziTuriste(2000);
