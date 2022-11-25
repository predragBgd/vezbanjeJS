let a = "4";
/*
Uslovno izvršavanje
*/

//if
if (a < 10) {
  console.log(a);
}

// if else if
if (a < 5) {
  console.log("a < 5");
} else if (a > 5) {
  console.log("a > 5");
} else console.log("a je 5");

// swich radi strogo poredjenje (===)
switch (a) {
  case 0:
    console.log("a = 0");
    break;
  case 1:
    console.log("a = 1");
    break;
  case 2:
    console.log("a = 2");
    break;
  case 3:
    console.log("a = 3");
    break;
  case 4:
    console.log("a = 4");
    break;
  case 5:
    console.log("a = 5");
    break;
  default:
    console.log("a nije izmedju 0 i 5");
    break;
}
/*
Petlje
*/

// break prekida rad petlje
/*
  if(uslov){
    break
  }
*/

// for petlja
for (let i = 1; i <= 5; i++) {
  console.log("for petlja " + i);
}

//wile petlja
let w = 1;
while (w <= 5) {
  console.log("Wile " + w);
  w++;
}

// for in petlja

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

for (let index in osobe) {
  console.log(osobe[index]); // koristi index elementa u nizu
}

const GRADSKA_PUT = 9.3;
const OTVORENI_PUT = 5.8;

function potrosnjaGoriva(gorivo, autoPut) {
  if (gorivo > 50) {
    return "Proveri koliko je kapacitet rezervoara!";
  } else if (autoPut === true) {
    return (
      "Preci ces " +
      ((gorivo / OTVORENI_PUT) * 100).toString().slice(0, 5) +
      " kilometara."
    );
  } else
    return (
      "Preci ces " +
      ((gorivo / GRADSKA_PUT) * 100).toString().slice(0, 5) +
      " kilometara."
    );
}

console.log(potrosnjaGoriva(20, true));
