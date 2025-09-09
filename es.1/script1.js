/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

/* Selezione variabili collegamento css*/
const titolo = document.querySelector(".biciclette")
const piuLeggera = document.querySelector(".piuLeggera")

/* Creaziione array di oggetti */
const biciclette = [

    {nome : "bici 1", peso : 20 },
    {nome : "bici 2", peso : 14 },
    {nome : "bici 3", peso : 10 },
    {nome : "bici 4", peso : 21 },
    {nome : "bici 5", peso : 15 },
    {nome : "bici 6", peso : 11 },
    {nome : "bici 7", peso : 12 },
    {nome : "bici 8", peso : 18 },

];

let biciPiuLeggera = biciclette[0];


for (let i = 1; i < biciclette.length; i++) {
     if (biciclette[i].peso < biciPiuLeggera.peso) { /* confronta ogni peso con la prima se è inferiore prende il valore di bici più leggera*/
    // Aggiorna l'bici più leggera
    biciPiuLeggera = biciclette[i]
  }
}

console.log(biciPiuLeggera);

titolo.append(biciclette["nome"]);
piuLeggera.append(biciPiuLeggera.nome)