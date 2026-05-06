// const numeroUtente = parseInt(prompt('Inserisci un numero'));

// let somma = 0;

// for (let i = 0; i < numeroUtente; i++) {
//   let sommaPrecedente = somma;

//   somma += i;

//   console.log(
//     ' Il numero attuale è ' +
//       i +
//       ' Verrà sommato al numero ' +
//       sommaPrecedente +
//       ' La somma finale è ' +
//       somma,
//   );
// }

// const numeroUtente = parseInt(prompt('Inserisci un numero').trim());

// const stringaUtente = prompt('Inserisci una stringa').trim();

// for (let i = 0; i < numeroUtente; i++) {
//   console.log(stringaUtente);
// }

// const stringaUtente = prompt('Inserisci un numero').trim();

// for (let i = 0; i < stringaUtente.length; i++) {
//   console.log(stringaUtente[i]);
// }

// const numeroUtente = parseInt(prompt('Inserisci un numero').trim());

// if (numeroUtente > 0) {
//   console.log('Il numero è positivo');
// } else if (numeroUtente == 0) {
//   console.log('Il numero è uguale a 0');
// } else {
//   console.log('il numero è negativo');
// }

// const numeroUtente = parseInt(prompt('Inserisci un numero').trim());

// if (numeroUtente % 2 == 0) {
//   console.log('Il numero è pari');
// } else {
//   console.log('Il numero è dispari');
// }

// const etàPersona = parseInt(prompt('Inserisci la tua età').trim());

// const patente = prompt('Hai la patente?').trim().toUpperCase();

// if (etàPersona >= 18 && patente === 'SI') {
//   console.log('Puoi guidare correttamente');
// } else if (etàPersona >= 16 && patente === 'SI') {
//   console.log('Puoi guidare i 125');
// } else if (etàPersona >= 14 && patente === 'SI') {
//   console.log('Puoi guidare i 50');
// } else {
//   console.log('Non puoi guidare');
// }

// const punteggioStudente = parseInt(prompt('Che punteggio hai preso?').trim());

// if (punteggioStudente >= 90) {
//   console.log('Sei nel TIER A');
// } else if (punteggioStudente >= 80) {
//   console.log('Sei nel TIER B');
// } else if (punteggioStudente >= 70) {
//   console.log('Sei nel TIER C');
// } else {
//   console.log('Non classificato');
// }

// const arrayNum = [1, 3, 7, 4, 15, 10];
// let numeroMassimo = 0;

// for (let numero of arrayNum) {
//   if (numero > numeroMassimo) {
//     numeroMassimo = numero;
//   }
// }

// console.log('Il numero massimo di questo array è ', numeroMassimo);

// const stringa = 'Ciao';
// let reversedString = '';

// for (let parola of stringa) {
//   reversedString = parola + reversedString;
// }

// console.log('La stringa invertita è', reversedString);

// let Area;

// function calculateArea(base, altezza) {
//   return base * altezza;
// }

// const base = 5;

// const altezza = 8;

// let area = calculateArea(base, altezza);

// console.log("L'area è", area);

// function PariOrNot(numero) {
//   if (numero % 2 == 0) {
//     console.log('Il numero è pari');
//   } else {
//     console.log('Il numero è dispari');
//   }
//   return;
// }

// const numero = 10;

// let VerificaNumero = PariOrNot(numero);

// console.log(VerificaNumero);

// function PariOrNot(numero) {
//   return numero % 2 == 0;
// }

// const numero = 10;

// const isPari = PariOrNot(numero);

// console.log('Il numero è Pari?', isPari);

// function ConcatenaStringa(stringaprima, stringadue) {
//   return stringaprima + ' ' + stringadue;
// }

// const stringaprima = 'Ciao';

// const stringadue = 'Marco';

// const Concatenazione = ConcatenaStringa(stringaprima, stringadue);

// console.log(Concatenazione);

// function CalcoloFattoriale(numero) {
//   let fattoriale = 1;

//   for (let i = 1; i <= numero; i++) {
//     fattoriale *= i;
//   }
//   return fattoriale;
// }

// const numero = 6;

// const NumeroFattoriale = CalcoloFattoriale(numero);

// console.log(NumeroFattoriale);

// function GenerateRandomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const min = 5;

// const max = 10;

// const Generator = GenerateRandomNum(min, max);

// console.log(
//   'Genera un numero tra',
//   min,
//   'e',
//   max,
//   'Il numero generato è',
//   Generator,
// );

// function VerifyPalindroma(Parola) {
//   const ResettedParola = Parola.toLowerCase();
//   const ParolaReverse = ResettedParola.split('').reverse().join('');

//   return ResettedParola == ParolaReverse;
// }

// const Parola = 'ottO';

// const IsPalindroma = VerifyPalindroma(Parola);

// function sommaArray(numeri) {
//   let somma = 0;

//   for (let numero of numeri) {
//     somma += numero;
//   }

//   return somma;
// }

// const numeri = [1, 2, 3, 4, 5, 6, 7];

// const CalculateSum = sommaArray(numeri);

// console.log('La somma è', CalculateSum);

// function ArrayMinAndMax(numeri) {
//   const Massimo = Math.max(...numeri);
//   const Minimo = Math.min(...numeri);

//   return {
//     Massimo,
//     Minimo,
//   };
// }

// const numeri = [1, 2, 5, 7, 46, 80];

// const VerifyMaxAndMin = ArrayMinAndMax(numeri);

// console.log(
//   'Il massimo è',
//   VerifyMaxAndMin.Massimo,
//   'Il minimo è',
//   VerifyMaxAndMin.Minimo,
// );

// function OnlyVocals(stringa) {
//   let vocali = ['a', 'e', 'i', 'o', 'u'];
//   let conteggio = 0;

//   for (let carattere of stringa.toLowerCase()) {
//     if (vocali.includes(carattere)) {
//       conteggio++;
//     }
//   }
//   return conteggio;
// }

// const parola = 'Ciao a tutti';

// const VerifyVoc = OnlyVocals(parola);

// console.log(
//   'La parola è',
//   parola,
//   'Possiede il numero di vocali di',
//   VerifyVoc,
// );

// function CalculateMedia(numeri) {
//   let somma = 0;

//   for (let numero of numeri) {
//     somma += numero;
//   }

//   const Media = somma / numeri.length;

//   return Media;
// }

// const Numeri = [10, 20, 30, 40, 50];

// const Calculate = CalculateMedia(Numeri);

// console.log('La media dei numeri è', Calculate);

// const persona = {
//   nome: 'Gabriele',
//   età: 16,
//   sesso: 'Maschile',
// };

// let numArray = [1, 2, 3, 4, 5];

// let copyArray = [...numArray];

// console.log(copyArray);

// let num1Array = [1, 2, 3, 4, 5];

// let num2Array = [6, 7, 8, 9, 10];

// let UnireArray = [...num1Array, ...num2Array];

// console.log(UnireArray);

// const persona = {
//   nome: 'Gabriele',
//   cognome: 'Franti',
//   Nazionalità: 'Italia',
// };

// let copyPerson = { ...persona };

// console.log(copyPerson);

// const num = {
//   a: 1,
//   b: 2,
// };

// const num2 = {
//   c: 3,
//   d: 4,
// };

// let numAdded = { ...num, ...num2 };

// console.log(numAdded);

// let num = [1, 2, 3, 4, 5];

// let CopyandAdd = [...num, 10, 15];

// console.log(CopyandAdd);

// const persona = {
//   nome: 'Gabriele',
//   cognome: 'Franc',
//   nazionalità: 'Italia',
// };

// let copyPerson = {
//   ...persona,
//   sesso: 'Maschile',
// };

// console.log(copyPerson);

// function somma(a, b) {
//   return a + b;
// }

// let num1Array = [3, 7];

// let summarize = somma(...num1Array);

// console.log(summarize);

// let array1 = [1, 2, 3, 4, 5];

// let [primo, secondo, ...RestoArray] = array1;

// console.log(RestoArray);

// let stringa = 'Ciao';

// let array = [...stringa];

// console.log(array);

// const somma = (a, b) => a + b;

// console.log(somma(3, 4));

// const doppiodelnum = (a) => a ** 2;

// console.log(doppiodelnum(4));

// const numVerify = (a) => a > 0;

// console.log(numVerify(-1));

// const UnifyString = (a, b) => a + ' ' + b;

// console.log(UnifyString('Ciao', 'Francesco'));

// const AreaRettangolo = (base, altezza) => (base * altezza) / 2;

// console.log(AreaRettangolo(10, 5));

// const VerifyPalindroma = (parola) => {
//   const resettedParola = parola.toLowerCase();
//   const parolaInvertita = resettedParola.split('').reverse().join('');
//   return parolaInvertita === resettedParola;
// };

// console.log(VerifyPalindroma('Otto'));

// const CuboNumero = (numero) => numero ** 3;

// console.log(CuboNumero(3));

// const MaxAndMinRandom = (min, massimo) => {
//   const NumeroRandom = Math.floor(Math.random() * (massimo - min + 1)) + min;
//   return NumeroRandom;
// };

// console.log(MaxAndMinRandom(3, 10));

// const UnifyStringArray = (ArrayStringa) => ArrayStringa.join(' ');

// console.log(UnifyStringArray(['Ciao', 'a', 'tutti', 'come', 'va', '?']));

// const Verifylength = (parola, lunghezza) => parola.length > lunghezza;

// console.log(Verifylength('Broccolo', 10));

// const array1 = [1,2,3,4,5]

// const form = document.getElementById('loginForm');

// const messaggio = document.getElementById('messaggio');

// const button = document.getElementById('btnclassic');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   let formData = new FormData(form);

//   let email = formData.get('email');
//   let password = formData.get('password');

//   validateData(email, password);

//   console.log('Email:', email, 'Password:', password);
// });

// function validateData(email, password) {
//   if (email === '' || password === '') {
//     messaggio.textContent = 'Tutti i campi devono essere riempiti';

//     button.classList.add()
//     event.preventDefault();
//   } else {
//     messaggio.textContent = 'Form inviato correttamente';
//   }
// }

// var form = document.getElementById('loginForm');

// var messaggio = document.getElementById('messaggio');

// var button = document.getElementById('btnclassic');

// var email = document.getElementById('email');

// var password = document.getElementById('password');

// form.addEventListener('input', function () {
//   if (email.value === '' || password.value === '') {
//     button.disabled = true;
//   } else {
//     button.disabled = false;
//   }
// });

// let codicefiscale = 'RSSAQEQDAJBHWUIQUIR';

// const arrayCaratteri = codicefiscale.split('');

// console.log(arrayCaratteri);

// console.log(arrayCaratteri.length);

// console.log(arrayCaratteri.indexOf('Q'));

// console.log(arrayCaratteri.slice(2, 5));

// console.log(arrayCaratteri.pop());

// console.log(arrayCaratteri.sort());

// console.log(arrayCaratteri.toString());

// const arrayStryinga = arrayCaratteri.toString();

// console.log(arrayStryinga.toLowerCase());

// const giocatore1 = {
//   nome: 'xCarlo03',
// };

// const giocatore2 = {
//   nome: 'LucaRossixPlays',
// };

// const partitaonline = {
//   giocatori: [],

//   disconnetti: function (giocatore) {
//     const index = this.giocatori.indexOf(giocatore);

//     this.giocatori.splice(index, 1);

//     console.log(`il seguente giocatore: ${giocatore.nome} è stato disconnesso`);

//     this.mostraGiocatori();
//   },

//   connetti: function (giocatore) {
//     this.giocatori.push(giocatore);
//     console.log(`il seguente giocatore: ${giocatore.nome} si è connesso`);
//     this.mostraGiocatori();
//   },

//   mostraGiocatori: function () {
//     console.log(
//       this.giocatori.length == 0
//         ? 'Non ci sono giocatori'
//         : this.giocatori.map((giocatore) => giocatore.nome).join(','),
//     );
//   },
// };

// partitaonline.mostraGiocatori();

// partitaonline.connetti(giocatore1);
// partitaonline.connetti(giocatore2);

// partitaonline.disconnetti(giocatore1);

// partitaonline.disconnetti(giocatore2);

// const dataoggi = new Date();

// const nuovaData = new Date(2021, 5, 6, 16, 15, 18);

// const differenzaGiorni = Math.floor(
//   (dataoggi - nuovaData) / (1000 * 60 * 60 * 24),
// );

// console.log(differenzaGiorni);

// const x = 6;

// console.log(!(x > 50));

// const player = {
//   username: 'Triccio',
//   partiteGiocate: 0,
//   stats: function () {
//     if (this.partiteGiocate == 0 || this.partiteGiocate < 0) {
//       console.log('Non ha ancora giocato');
//     } else {
//       console.log('Ha giocato', this.partiteGiocate, 'partite');
//     }
//   },
// };

// player.stats(this.partiteGiocate);

// const player = {
//   username: 'Triccio',
//   partiteGiocate: -1,
//   stats: function () {
//     console.log(
//       this.partiteGiocate <= 0
//         ? 'Non ha giocato partite'
//         : `Ha giocato ${this.partiteGiocate} partite`,
//     );
//   },
// };

// player.stats();

// const giorno = 'Lunedì';

// switch (giorno.toLowerCase()) {
//   case 'lunedì':
//   case 'martedì':
//   case 'mercoledì':
//   case 'giovedì':
//   case 'venerdì':
//     console.log('Giorno lavorativo');
//     break;
//   case 'sabato':
//   case 'domenica':
//     console.log('Giorno festivo');
//     break;
// }

// const arrayNum = [1, 10, 20, 40, 50, 60];

// console.log(
//   arrayNum.length % 2 == 0
//     ? 'Contiene un numero pari di elementi'
//     : 'Non contiene un numero pari di elementi',
// );

// console.log(
//   arrayNum.length % 2 == 0
//     ? arrayNum[2] == 20
//       ? 'Contiene il numero 20 nella posizione 2'
//       : 'Non contiene il numero 20 nella posizione 2'
//     : 'Non contiene un numero pari di elementi',
// );

// if (arrayNum.length % 2 == 0) {
//   console.log('Contiene un numero pari di elementi');
//   if (arrayNum.includes(20) && arrayNum.indexOf(2)) {
//     console.log('Contiene il numero 20 nella posizione 2');
//   } else {
//     console.log('Il numero 20 non è nella posizione 2 ');
//   }
// } else {
//   console.log('Contiene numero dispari di elementi');
// }

const numeri = [1, 2, 3, 4, 5, 6, 10];

// let somma = 0;

// for (let i = 0; i < numeri.length; i++) {
//   somma += numeri[i];
//   console.log(somma);
// }

// console.log(somma);

for (let numero of numeri) {
  const indice = numeri.indexOf(numero);
  console.log(
    `Il numero precedente: ${numeri[indice - 1] == undefined ? 'Nessun numero' : numeri[indice - 1]} \n il numero attuale è : ${numeri[indice]}\n il numero futuro è ${numeri[indice + 1] == undefined ? 'Nessun numero futuro' : numeri[indice + 1]}`,
  );
}

// numeri.forEach((element) => {
//   console.log(element);
// });

// const persona = {
//   nome: 'Gabriele',
//   cognome: 'Chioschio',
//   Età: '15',
// };

// let chiavi = Object.keys(persona);

// for (chiave of chiavi) {
//   console.log(
//     `Ecco la chiave: ${chiave} ed il valore interno: ${persona[chiave]}`,
//   );
// }

// for (let i = 0; i < chiavi.length; i++) {
//   console.log(
//     `Ecco la chiave: ${chiavi[i]} ed il valore interno: ${persona[chiavi[i]]}`,
//   );
// }
