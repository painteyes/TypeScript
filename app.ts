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
    Functions
*/

// Definizione di una funzione che accetta un oggetto con tre proprietà
function getData(data: {id: number, username: string, password: string}) {
    console.log(data.id, data.username)
}

// Definizione di un oggetto "data" con tre proprietà
const data = {id:1, username:'bonobo', password:''}

// Chiamata alla funzione "getData" passando l'oggetto "data" come argomento
getData(data)

/*
    Object
*/

// Definizione di un oggetto "person1" con due proprietà
const person1 = {
    name: "Pietro",
    surname: "Rossi"
}

// Non da errore, perché person1 è un oggetto con proprietà "name" e "surname"
person1.name

/*  Dichiarazione di un oggetto "person2" di tipo generico "object" (significa che il contenuto dell'oggetto 
    può essere qualsiasi tipo di oggetto non primitivo, inclusi gli array, gli oggetti letterali e 
    gli oggetti istanziati dalle classi) 
*/
let person2: object = {
    name: "Luca",
    surname: "Rossi"
}

// Dichiarazione di un oggetto "person3" di tipo "{}" o "Object" (rappresenta l'oggetto globale JavaScript)
let person3: {} = {
    name: "Giovanni",
    surname: "Rossi"
}

/*  Il tipo di oggetto vuoto "object" o "{}" indica un oggetto senza proprietà. 
    Quando si definisce un oggetto con questo tipo, TypeScript non riconosce alcuna proprietà su di esso. 
    Ciò significa che l'oggetto potrebbe contenere qualsiasi tipo di valore, 
    ma TypeScript non avrà alcuna informazione sulle proprietà specifiche dell'oggetto. 
    Quindi, se si cerca di accedere a una proprietà specifica come "surname" su un oggetto di tipo "{}", 
    TypeScript restituirà un errore poiché non è in grado di riconoscere quella proprietà. 
    Per risolvere questo errore, è possibile specificare le proprietà dell'oggetto in fase di dichiarazione 
    oppure utilizzare un tipo di oggetto più specifico che definisce le proprietà richieste. 
*/

/*  In questo caso, person2 è di tipo "object", che non ha nessuna proprietà specifica definita al suo interno,
    quindi TypeScript non riconosce la proprietà "name"
*/
// person2.name

// In questo caso, person3 è di tipo "{}", quindi TypeScript non riconosce la proprietà "surname"
// person3.surname

// Dichiarazione di un oggetto "person" con proprietà nidificate
let person: {
    name: string,
    surname: string,
    age: number,
    address: {
        street: string,
        number: number,
        cap: string,
        city: string
    }
}

// Assegnazione di un valore all'oggetto "person"
person = {
    name: "Paolo",
    surname: "Rossi",
    age: 30,
    // In questo caso, l'oggetto "address" deve contenere le proprietà "street", "number", "cap" e "city"
    address: {
        street: "Via Cavour",
        number: 87,
        cap: '00100',
        city: 'Rome'
    }
    // address: { // // Questo da errore perchè mancano le proprietà
    //     street: "Via Cavour",
    //     number: 87,
    // }
    //address: "Via Cavour 87, 00100, Rome" // Questo da errore perchè il tipo è diverso
}





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