let pesiBase = [2, 5, 1, 1, 7, 3, 12, 6, 9, 3];
console.table(pesiBase);

// chiedo all'utente quale valore vuole conoscere
let task = prompt(`chiedi tra: "media", "max", "min", "num"`);

// peso medio
if (task === "media") {
  let sommaPesi = 0;

  for (let i = 0; i < pesiBase.length; i++) {
    let pesoCorrente = pesiBase[i];
    sommaPesi += pesoCorrente;
  }

  let mediaPesi = sommaPesi / pesiBase.length;
  console.log("Peso medio: " + mediaPesi);
  alert("Peso medio: " + mediaPesi);
}

// peso massimo
if (task === "max") {
  let pesoMax = 0;

  for (let i = 0; i < pesiBase.length; i++) {
    let pesoCorrente = pesiBase[i];
    if (pesoCorrente > pesoMax) {
      pesoMax = pesoCorrente;
    }
  }
  console.log("Peso massimo: " + pesoMax);
  alert("Peso massimo: " + pesoMax);
}

// peso minimo
if (task === "min") {
  let pesoMax = 0;

  for (let i = 0; i < pesiBase.length; i++) {
    let pesoCorrente = pesiBase[i];
    if (pesoCorrente > pesoMax) {
      pesoMax = pesoCorrente;
    }
  }

  let pesoMin = pesoMax;

  for (let i = 0; i < pesiBase.length; i++) {
    let pesoCorrente = pesiBase[i];

    if (pesoCorrente < pesoMin) {
      pesoMin = pesoCorrente;
    }
  }
  console.log("Peso minimo: " + pesoMin);
  alert("Peso minimo: " + pesoMin);
}

//
// numero di giocattoli
