/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

/* Creaziione array di oggetti */
const squadre = [

    {nome : "Milan", punti : 0, falliSub : 0 },
    {nome : "Napoli", punti : 0, falliSub : 0 },
    {nome : "Lazio", punti : 0, falliSub : 0 },
    {nome : "Roma", punti : 0, falliSub : 0 },
    {nome : "Inter", punti : 0, falliSub : 0 },
    {nome : "Fiorentina", punti : 0, falliSub : 0 },

];
console.log(squadre)

for (i = 0; i < squadre.length; i++) {
    squadre[i].punti = randomNumber(1,10,1)
    squadre[i].falliSub = randomNumber(1,10,1)
}

/* Array Vuoto */
const falliSubSquadre = []

for (i = 0; i < squadre.length; i++) {
    falliSubSquadre.push(squadre[i].nome, squadre[i].falliSub)
}

console.log(falliSubSquadre)









/* FUNZIONI */
/* Generatore numeri casuali tra min e max*/
function randomNumber(min, max) {
    let number = Math.floor(Math.random() * (max - min +1)) + min
    return number
}