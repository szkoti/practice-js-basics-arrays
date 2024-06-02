const n = 50;
const oddNumbers = [];


for (let i = 1; i <= n; i++) {
    if ( i % 2 === 1) {
        oddNumbers.push(i);
    };
}

console.log(oddNumbers);




// Napisz program, który uzupełni w sposób automatyczny (czyli pewnie przy wykorzystaniu pętli) 
// tablicę `oddNumbers` wyłącznie liczbami nieparzystymi, które występują w ciągu od 1 do n.
// Program należy napisać w taki sposób, aby zmiana wartości dla `n` nie powodowała błędów w jego działaniu.
// Pamiętaj, aby sprawdzić, czy wszystko działa. Najczęściej robimy to poprzez sprawdzenie warunków brzegowych. 
// W tym przypadku warunkami brzegowymi mogą być liczby `n=0`, `n=1`, `n=100`.
