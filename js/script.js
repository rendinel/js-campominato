function randomNumber (min, max)  {
  return Math.floor(Math.random() * (max - min) ) + min
}

var maxElements = 16;
// var min = 1;
// var max = 100;

var numbersPc = [];
var numbersUser = [];

for(var x = 0; x < maxElements; x++) {
  numbersPc.push(randomNumber(1, 100));
  console.log(numbersPc);
}

for (var i = 0; i < maxElements; i++) {
  numbersUser.push(parseInt(prompt('Inserisci un numero intero da 1 a 100 (te lo chiederó 16 volte non mi sono incantato)')));
  console.log(numbersUser);
};

if (numbersUser[i].length <= 3 || numbersUser[i] % numbersUser[i] = 1 || numbersUser[i] !== isNaN ) {
  alert('ok');
} else  {
  alert('non prendermi in giro');
}
