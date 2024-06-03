const years = [1980, 1934, 2002, 2019];

const currentYear = (new Date()).getFullYear();
const yearsPassed = years.map( function countYears (element, index) {
    return currentYear - element;
});

console.log(yearsPassed);



// Twoim zadaniem będzie wygenerowanie na jej podstawie nowej tablicy liczb określających lata, 
// które minęły od wskazanej daty do obecnego czasu. Do rozwiązanie tego zadania 
// wykorzystaj metodę tablicową `.map()`.
// Przykładowo: `2021 - 1980 = 41` – liczba 41 ma się pojawić jako pierwszy element nowej tablicy.


function countYearsBetween(elements) {
    return elements.map((element, index, array) => {
        if (index < array.length - 1) {
            return array[index + 1] - element;
        } else {
            return null; // end of the array
        }
    }).filter(diff => diff !== null); // Remove the null
}

const yearsDifference = countYearsBetween(years);
console.log(yearsDifference); // [ -46, 68, 17 ]