function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

function isUserInputValid(inputString) {
  // if (!inputString) {   !davanti vuol dire non esiste
  //   return false;
  // }
  if (isNan(inputString)) {
    return false;
  }
  if (inputString > 100) {
    return false;
  }
  if (inputString <= 0) {
    return false;
  }
  return true;
}

function winning(sceltaUtente, numeriBomba){
  if (numeriBomba.includes(sceltaUtente)) {

  }
}

var listaBombe = [];

while(listaBombe.length < 16) {
  var generated = randomNumber(1, 100);
  if (listaBombe.includes(generated) === false) {
    listaBombe.push(generated);
  }
}

while (winning(sceltaUtente, listaBombe) && listaSceltaUtente.length < 84) {
  var sceltaUtente = parseInt(prompt('Inserisci il numero'));
  if (isUserInputValid(sceltaUtente)) {
    if (listaSceltaUtente.includes(sceltaUtente) === true) {
      alert('Hai giá inserito questo numero');
    } else {
      if(winning(sceltaUtente, listaBombe) === false) {
        alert('Hai perso')
      }
      listaSceltaUtente.push(sceltaUtente);
      if (listaSceltaUtente.length === 84) {
        alert('hai vinto')
      }
    }
  } else {
      alert('per favore inserisci un numero da 1 a 100');
  }
}

// alert('il tuo punteggio é:' + listaSceltaUtente.length)
// function randomNumber (min, max)  {
//   return Math.floor(Math.random() * (max - min) ) + min
// }
//
// function controlNumber (numbersPc, numbersUser){
//   for (var i = 0; i < numbersPc.length; i++) {
//     if (numbersPc[i] == numbersUser) {
//       return true
//     } else {
//       return false
//     }
// }
// }
//
// var maxElements = 16;
// // var min = 1;
// // var max = 100;
//
// var numbersPc = [];
// var control;
//
// for(var x = 0; x < maxElements; x++) {
//   numbersPc.push(randomNumber(1, 100));
// }
// // var numbersPc = [1,2,3];
// // console.log(numbersPc);
// while (controlNumber (numbersPc, numbersUser) === true) {
//
// }
// for (var i = 0; i < 3; i++) {
//   var numbersUser = parseInt(prompt('Inserisci un numero intero da 1 a 100'));
//   console.log(numbersUser);
//   var controllo = controlNumber (numbersPc, numbersUser);
//   console.log(controllo);
//   if (controllo === true) {
//     alert('stop');
//   } else {
//     alert('stop');
//   }
// }
