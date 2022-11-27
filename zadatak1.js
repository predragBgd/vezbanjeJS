let turisti = [
  {
    ime: "Jovan",
    prezime: "Petrović",
    godiste: 1989,
    telefon: "+301601123557",
    posetioGradove: ["Prag", "Pariz", "Minhen"],
    zeljeniGradovi: ["Lisabon", "London", "Njujork", "Venecija", "Atina"],
  },
  {
    ime: "Milan",
    prezime: "Zorić",
    godiste: 2001,
    telefon: "+301638954171",
    posetioGradove: ["London", "Minhen", "Prag", "Pariz", "Budimpešta"],
    zeljeniGradovi: ["Čikago", "Venecija", "Atina", "Sidnej", "Kairo"],
  },
  {
    ime: "Aleksandra",
    prezime: "Nikolić",
    godiste: 2010,
    telefon: "+381698709000",
    posetioGradove: ["Prag", "Moskva", "Pariz", "Sidnej", "Solun"],
    zeljeniGradovi: ["Minhen", "Rim", "Tel Aviv", "Budimpešta", "Lisabon"],
  },
  {
    ime: "Monika",
    prezime: "Bubić",
    godiste: 2015,
    telefon: "+30165167415",
    posetioGradove: ["Njujork", "Beč", "Minhen", "Venecija"],
    zeljeniGradovi: ["Rim", "Budimpešta", "Atina", "Madrid", "Lisabon"],
  },
  {
    ime: "Goran",
    prezime: "Brkić",
    godiste: 1973,
    telefon: "+381648120942",
    posetioGradove: ["Pariz", "Prag", "Venecija", "Beč", "Solun"],
    zeljeniGradovi: ["Kairo", "Lisabon", "Los Andjeles", "Tokio", "Minhen"],
  },
];

// for (let turista in turisti) {
//   console.log(turisti[turista].ime + " " + turisti[turista].prezime);
// }

// Funkcija kreira novog turistu
function kreirajNovogTuristu(
  ime,
  prezime,
  godiste,
  telefon,
  posetioGradove,
  zeljeniGradovi
) {
  turisti.push({
    ime: ime,
    prezime: prezime,
    godiste: godiste,
    telefon: telefon,
    posetioGradove: posetioGradove,
    zeljeniGradovi: zeljeniGradovi,
  });
}
kreirajNovogTuristu(
  "Milan",
  "Dobrić",
  1981,
  "+38164910298",
  "Lisabon",
  "London"
);

// Funkcija upisuje novi grad koji je turista posetio
function dodajGradTuristi(ime, grad) {
  turisti.forEach((turista) => {
    if (turista.ime == ime) {
      turista.posetioGradove.push(grad);
    } else if (briseGradTuristi(ime, grad));
  });
}
dodajGradTuristi("Monika", "Budimpešta");

// Funkcija brise grad turisti
function briseGradTuristi(ime, grad) {
  turisti.forEach((turista) => {
    if (turista.ime == ime) {
      for (let i in turista.zeljeniGradovi) {
        if (turista.zeljeniGradovi[i] == grad) {
          turista.zeljeniGradovi.splice(i, 1);
        }
      }
    }
  });
}

// Funkcija ispisuje turiste prema gradovima koje turista zeli da poseti
function prikaziTuristeGdeZeleDaIdu(grad) {
  turisti.forEach((turista) => {
    for (let i in turista.zeljeniGradovi) {
      if (turista.zeljeniGradovi[i] == grad) {
        console.log(grad + " zeli da poseti " + turista.ime);
      }
    }
  });
}
prikaziTuristeGdeZeleDaIdu("Minhen");

// Funkcija ispisuje gradove koje je posetio turista
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
posetioci("Aleksandra");

// Funkcija menja broj telefona turiste
function promeniTelefon(ime, telefon) {
  for (let turista of turisti) {
    if (turista.ime == ime) {
      return (turista.telefon = telefon);
    }
  }
}
console.log(promeniTelefon("Milan", "+38161357990"));

// Funkcija prikazuje turiste prema godistu
function prikaziTuristePoGodistu(godiste) {
  console.log("Turisti mladji od " + godiste + " godine:");
  turisti.forEach((turista) => {
    if (turista.godiste < godiste) {
      console.log(turista.ime + " " + turista.godiste);
    }
  });
}
prikaziTuristePoGodistu(1999);

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
        turista.posetioGradove +
        " " +
        turista.zeljeniGradovi
    );
  });
}
prikaziTuriste(2000);
