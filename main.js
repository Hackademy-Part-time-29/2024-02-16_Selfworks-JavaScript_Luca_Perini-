//ESERCIZIO 1

let num1 = 12;
let num2 = 34;
let num3 = 156;
let num4 = 1974;
let num5 = 821;
let num6 = 7;
let num7 = 3452;

let somma = num1 + num2 + num3 + num4 + num5 + num6 + num7;

console.log("La somma dei numeri equivale a " + somma);

let media = somma / 7;

console.log("La media dei numeri equivale a " + media.toFixed(1));



//ESERCIZIO 2

let annoCorrente = 2024;

let annoNascita = 1937;

let etaCorrente = annoCorrente - annoNascita;

let anniMancanti = 100 - etaCorrente;

console.log("hai " + etaCorrente + " anni e te ne mancano " + anniMancanti + " per arrivare a 100.");



//ESERCIZIO 3

let numX = parseInt(prompt('Inserisci il primo numero:'));

let numY = parseInt(prompt('Inserisci il secondo numero:'));

let sommaXY = numX + numY;
let sottrazioneXY = numX - numY;
let moltiplicazioneXY = numX * numY;
let divisioneXY = numX / numY;

console.log("Con i numeri da te scelti, i risultati delle varie operazioni sono: somma: " + sommaXY + ", sottrazione: " + sottrazioneXY + ", moltiplicazione: " + moltiplicazioneXY + ", divisione: " + divisioneXY.toFixed(1) + ".");



//ESERCIZIO 4

let array_1 = [

    ['un', ' per', ' incatenarli.'],
  
    [' Anello', 'trovarli,'],
  
    [' ghermirli', ' e'],
  
    ['gondor', 'mark'],
  
  ];
  
  
  
  let array_2 = [
  
    [[' trovarli, ']],
  
    ['tu,', 'sciocchi'],
  
    ['tu,', 'sciocchi', ['padron', 'Sauron']],
  
    [' nel', ['fuggite', 'gandalf']],
  
    [[' domarli, ', 'passare'], ' buio']
  
  ];


  console.log(array_1[0][0] + array_1[1][0] + array_1[0][1] + array_2[4][0][0] + array_1[0][0] + array_1[1][0] + array_1[0][1] + array_2[0][0] + array_1[0][0] + array_1[1][0] + array_1[0][1] + array_1[2][0] + array_1[2][1] + array_2[3][0] + array_2[4][1] + array_1[0][2]);