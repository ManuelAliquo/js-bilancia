let pesiBase = [2, 5, 1, 1, 7, 3, 12, 6, 9, 3];
console.table(pesiBase);

// chiedo all'utente quale valore vuole conoscere
let task = prompt(`chiedi tra: "media", "max", "min", "num"`);

// elaborazioni richieste
let output;

if (task === "media") {
  let sommaPesi = 0;

  for (let i = 0; i < pesiBase.length; i++) {
    let pesoCorrente = pesiBase[i];
    sommaPesi += pesoCorrente;
  }

  let mediaPesi = sommaPesi / pesiBase.length;

  output = `Peso medio: ${mediaPesi}`;
  alert("Peso medio: " + mediaPesi);
} else if (task === "max") {
  let pesoMax = 0;

  for (let i = 0; i < pesiBase.length; i++) {
    let pesoCorrente = pesiBase[i];
    if (pesoCorrente > pesoMax) {
      pesoMax = pesoCorrente;
    }
  }

  output = `Peso massimo: ${pesoMax}`;
  alert("Peso massimo: " + pesoMax);
} else if (task === "min") {
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

  output = `Peso minimo: ${pesoMin}`;
  alert("Peso minimo: " + pesoMin);
} else if (task === "num") {
  let numGiocattoli = 0;

  for (let i = 0; i < pesiBase.length; i++) {
    let pesoCorrente = pesiBase[i];
    if (pesoCorrente > 0) {
      numGiocattoli++;
    }
  }

  output = `Numero giocattoli: ${numGiocattoli}`;
  alert("Numero giocattoli: " + numGiocattoli);
}

//output
console.log(output);
