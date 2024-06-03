// W pliku `app.js` znajdziesz zmienną o nazwie `numbers`, która przechowuje tablicę liczb.
// Twoim zadaniem będzie obliczenie sumy wszystkich liczb parzystych znajdujących się w tablicy.
// Do rozwiązania tego zadania wykorzystaj funkcję tablicową `.filter()` oraz `.reduce()`.


const numbers = [1, 2, 3, 4, 5, 6, 7];

const sumOfEvenNumbers = numbers.filter( function(el){
    return el % 2 === 0;
}).reduce(function(a, b) {
    return a + b;
});

console.log(sumOfEvenNumbers);
