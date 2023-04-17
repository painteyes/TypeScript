/*
    Differenza tra tipi di dato dinamici e statici
    
    In TypeScript il tipo delle variabili è statico, a differenza di JavaScript in cui il tipo di dato è dinamico.
    Questo significa che in TypeScript il tipo di una variabile viene definito in fase di dichiarazione e
    non può essere cambiato successivamente.
*/
// Esempio di assegnamento non valido in TypeScript a causa della tipizzazione statica 
var number = 5;
// number = '5'; // Questo assegnamento darebbe un errore a compile time
// Dichiarazione di una funzione in TypeScript
function sum(a, b) {
    return a + b;
}
// Esempio di utilizzo della funzione sum, con un errore di tipo a compile time
// console.log(sum(3, '5'));
// Esempio di utilizzo corretto della funzione sum
console.log(sum(3, 5));
/*
    Type assignment e Type inference

    In TypeScript, il tipo di una variabile può essere assegnato esplicitamente o può essere
    dedotto automaticamente dal compilatore in base al valore iniziale della variabile.

*/
// In questo caso, il tipo di dato viene inferito automaticamente a number
var _number = 5;
// In questo caso, il tipo di dato deve essere specificato esplicitamente
function _sum(a, b) {
    return a + b;
}
/*
    String
*/
/*
    Number
*/
/*
    Boolean
*/
/*
    Object
*/
/*
    Array
*/
/*
    Tuple
*/
/*
    Custom type
*/
/*
    Enum
*/
/*
    Any
*/
/*
    Union
*/
/*
    Alias
*/ 
