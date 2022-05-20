// Scrivi una variabile che stampi in console i numeri da 1 a 100 all’avvio della pagina.
// - Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// - Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

// selezioniamo tramite querySelector il div dove andremo a scrivere il risultato
const result = document.querySelector(".square-container");

for (let i = 1; i <= 100; i++) {
  const testo = `${i}`; // creiamo una variabile che contiene il numero da stampare

  if (i % 3 === 0) {
    console.log(i + " Fizz"); // stampiamo il numero se è multiplo di 3
    result.innerHTML += `<div class="square bg-green"> Fizz</div>`; // appendiamo il numero alla pagina
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");
    result.innerHTML += `<div class="square bg-yellow">Buzz</div>`;
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " FizzBuzz");
    result.innerHTML += `<div class="square bg-rose">fizzBuzz</div>`;
  } else {
    console.log(i);
    result.innerHTML += `<div class="square bg-blue">${testo}</div>`;
  }
}
