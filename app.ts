/* 
    Differenza tra tipi di dato dinamici e statici 
    
    In TypeScript il tipo delle variabili è statico, a differenza di JavaScript in cui il tipo di dato è dinamico. 
    Questo significa che in TypeScript il tipo di una variabile viene definito in fase di dichiarazione e 
    non può essere cambiato successivamente.
*/

// Esempio di assegnamento non valido in TypeScript a causa della tipizzazione statica 
let number: number = 5;
// number = '5'; // Questo assegnamento darebbe un errore a compile time

// Dichiarazione di una funzione in TypeScript
function sum(a: number, b: number) {
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
let _number = 5

// In questo caso, il tipo di dato deve essere specificato esplicitamente
function _sum(a: number, b: number): number {
    return a + b;
}

/*
    String
*/

let _name: string = 'Andrea'
let surname = "Occhipinti"
let string: string = `My full name is ${_name} ${surname}`

/*
    Number
*/

let num1: number = 8
let num2 = 6
let __sum = num1 + num2

/*
    Boolean
*/

let bool = false
let _bool = false
let ___bool: boolean
___bool = (bool === _bool) ? true : false

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