"use strict";
/*
    Differenza tra tipi di dato dinamici e statici
    
    In TypeScript il tipo delle variabili è statico, a differenza di JavaScript in cui il tipo di dato è dinamico.
    Questo significa che in TypeScript il tipo di una variabile viene definito in fase di dichiarazione e
    non può essere cambiato successivamente.
*/
// Esempio di assegnamento non valido in TypeScript a causa della tipizzazione statica 
let number = 5;
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
let _number = 5;
// In questo caso, il tipo di dato deve essere specificato esplicitamente
function _sum(a, b) {
    return a + b;
}
/*
    String
*/
let _name = 'Andrea';
let surname = "Occhipinti";
let string = `My full name is ${_name} ${surname}`;
/*
    Number
*/
let num1 = 8;
let num2 = 6;
let __sum = num1 + num2;
/*
    Boolean
*/
let bool = false;
let _bool = false;
let ___bool;
___bool = (bool === _bool) ? true : false;
/*
    Object
*/
// Definizione di un oggetto "person1" con due proprietà
const person1 = {
    name: "Pietro",
    surname: "Rossi"
};
// Non da errore, perché person1 è un oggetto con proprietà "name" e "surname"
person1.name;
/*  Dichiarazione di un oggetto "person2" di tipo generico "object",
    il che significa che può contenere qualsiasi tipo di oggetto non primitivo,
    inclusi gli array, gli oggetti letterali e gli oggetti istanziati dalle classi.
    Tuttavia, in questo caso, non è specificato il tipo di proprietà che l'oggetto dovrebbe avere,
    quindi non è possibile accedere alle proprietà dell'oggetto senza specificare il tipo corretto delle proprietà.
*/
let person2 = {
    name: "Luca",
    surname: "Rossi"
};
/*  Dichiarazione di un oggetto "person3" di tipo "{}", che in TypeScript rappresenta l'oggetto vuoto.
    Questo significa che l'oggetto può contenere qualsiasi tipo di proprietà,
    ma non è specificato il tipo di alcuna proprietà dell'oggetto.
    Pertanto, non è possibile accedere alle proprietà dell'oggetto senza specificare il tipo corretto delle proprietà.
    In pratica, person3 non è molto utile perché non specifica il tipo delle proprietà dell'oggetto.
*/
let person3 = {
    name: "Giovanni",
    surname: "Rossi"
};
/*  Il tipo di oggetto vuoto "object" o "{}" indica un oggetto senza proprietà definite.
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
/*  In questo caso, person3 è di tipo "{}", che indica un oggetto vuoto o un oggetto il cui tipo non è specificato
    quindi TypeScript non riconosce la proprietà "surname"
*/
// person3.surname
/*  Dichiara una variabile _person di tipo oggetto con due proprietà: name e surname, entrambe di tipo stringa.
    Viene poi assegnato un valore all'oggetto utilizzando la sintassi degli oggetti letterali,
    Questo tipo di dichiarazione esplicita il tipo delle proprietà dell'oggetto,
    in modo da poter accedere alle proprietà in modo sicuro durante la compilazione e prevenire errori a runtime.
*/
let person = { name: "Luca", surname: "Rossi" };
// Dichiarazione di un oggetto "person" con proprietà nidificate
let _person;
// Assegnazione di un valore all'oggetto "person"
_person = {
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
};
/*
    Array
*/
// Definizione di un array di numeri
const numArr = [1, 3, 11];
// Definizione di un array di stringhe
const strArr = ["", ""];
// Definizione di un array di qualsiasi tipo di dato
const anyArr = ["", 17, true, [], {}];
// Definizione di un array con elementi di tipo union (string, number, boolean)
const unionArr = ["hello", 42, true];
/*
    Tuple

    Le tuple in TypeScript sono una struttura dati simile agli array,
    ma di lunghezza fissa e in cui ogni elemento può avere un tipo di dati diverso.
    A differenza degli array, in cui è possibile accedere ai singoli elementi attraverso un indice numerico,
    in una tupla gli elementi sono identificati da un indice numerico ma anche da un tipo specifico.

    Le tuple sono utilizzate quando si vuole specificare un insieme di dati di
    diversi tipi che devono essere tutti presenti e ordinati in un determinato modo,
    ad esempio per rappresentare le coordinate geografiche (latitudine e longitudine)
    o le coordinate di un punto in uno spazio tridimensionale (x, y, z).

    Per definire una tupla in TypeScript si utilizza la sintassi [type1, type2, ..., typeN],
    dove type1, type2, ..., typeN sono i tipi di dati degli elementi della tupla.
    Ad esempio, la tupla [number, string] rappresenta un insieme di due elementi,
    il primo di tipo number e il secondo di tipo string.

    Per assegnare valori a una tupla, si utilizza la sintassi [value1, value2, ..., valueN],
    dove value1, value2, ..., valueN sono i valori degli elementi della tupla.
    Ad esempio, la tupla [1, "hello"] rappresenta un insieme di due elementi,
    il primo con valore 1 e il secondo con valore "hello".
*/
// Definizione di una tupla con due elementi numerici
const tuple = [1, 2];
// Esempio di utilizzo di tuple all'interno di un oggetto
const game = {
    id: '',
    accessCode: '',
    players: [string, string] = [
        'username1',
        'username2'
    ]
};
// Creiamo un oggetto di tipo Person con informazioni di esempio
let __person = {
    name: 'Mario',
    surname: 'Rossi',
    age: 42,
    address: {
        street: 'Via del Corso',
        number: 11,
        cap: '00100',
        city: 'Roma'
    }
};
// Definiamo una funzione che stampa l'indirizzo di una persona
function getPersonAddress(person) {
    console.log(person.address.street, ' ', person.address.number, ', ', person.address.cap, ', ', person.address.city);
}
/*
    Enum
*/
// Definiamo l'enumerazione PizzaToppings per i vari ingredienti della pizza
var PizzaToppings;
(function (PizzaToppings) {
    PizzaToppings["Pepperoni"] = "pepperoni";
    PizzaToppings["Mushroom"] = "mushroom";
    PizzaToppings["Pineapple"] = "pineapple";
})(PizzaToppings || (PizzaToppings = {}));
// Definiamo l'enumerazione weekDays per i giorni della settimana
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Monday"] = 1] = "Monday";
    weekDays[weekDays["Tuesday"] = 2] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 3] = "Wednesday";
    weekDays[weekDays["Thursday"] = 4] = "Thursday";
    weekDays[weekDays["Friday"] = 5] = "Friday";
    weekDays[weekDays["Saturday"] = 6] = "Saturday";
    weekDays[weekDays["Sunday"] = 7] = "Sunday";
})(weekDays || (weekDays = {}));
// Creiamo una variabile di tipo weekDays e la inizializziamo a Tuesday
let day = weekDays.Tuesday;
console.log(day); // Output: 2
/* if (day === weekDays.Saturday || day === weekDays.Sunday ) { /* Questo darebbe errore perché i valori di day e weekDays.Saturday/Sunday
appartengono a tipi differenti: day è un valore di tipo weekDays mentre weekDays.Saturday/Sunday sono stringhe. Per risolvere il problema,
possiamo specificare il tipo di enumerazione in entrambi i confronti. Possiamo fare ciò usando l'operatore "as" per forzare TypeScript a
considerare day e weekDays.Saturday/Sunday come valori di tipo weekDays: */
if (day === weekDays.Saturday || day === weekDays.Sunday) {
    console.log("È il weekend! Mangiamo la pizza con " + PizzaToppings.Pepperoni + " e " + PizzaToppings.Pineapple);
}
else {
    console.log("Spiacente, niente pizza oggi.");
}
/*  Ci sono diverse soluzioni per risolvere il problema

    * Verificare se si stanno confrontando valori appartenenti ad un tipo di enumerazione e assicurarsi
    che siano dello stesso tipo specificando il tipo di enumerazione in entrambi i confronti.
        
        Ad esempio: if (day === weekDays.Saturday as weekDays || day === weekDays.Sunday as weekDays)

    * Se si confrontano due variabili di tipo diverso, come una stringa e un numero,
    è possibile effettuare una conversione di tipo esplicita per entrambi i valori per
    assicurarsi che siano confrontabili tra loro.
        
        Ad esempio: if (Number(day) === weekDays.Saturday || Number(day) === weekDays.Sunday)

    * Se si sta confrontando una variabile con un valore noto, è possibile utilizzare un'array
    contenente tutti i possibili valori da confrontare, usando il metodo includes() per verificare
    se il valore è presente nell'array.

        Ad esempio: if ([weekDays.Saturday, weekDays.Sunday].includes(day))

    *Se si vuole escludere il controllo del compilatore TypeScript, è possibile utilizzare l'operatore
    as unknown as per forzare il compilatore a considerare la variabile come un tipo differente,
    ma è una soluzione meno sicura e non consigliata, in quanto può portare a problemi di runtime.

        Ad esempio: if (day as unknown as number === weekDays.Saturday || day as unknown as number === weekDays.Sunday)
*/
/*
    Any
*/
// Creiamo una variabile di tipo any che può contenere qualsiasi tipo di valore
let _any = 5;
_any = "test"; // Possiamo assegnare un valore di tipo stringa alla variabile
// Creiamo un array di tipo any che può contenere qualsiasi tipo di valore
let _anyArr = ["", 3];
// Creiamo una tupla di tipo any che può contenere qualsiasi tipo di valore
let _tuple = [true, 4];
/*
    Union
*/
// Creiamo una variabile di tipo union che può contenere un valore di tipo number o stringa
let union = 5;
// Creiamo un array di tipo union che può contenere un array di tipo any o un array di tipo stringa
let _union = ['', ''];
/*
    Alias
*/
/*
    Functions
*/
// Definizione di una funzione che accetta un oggetto con tre proprietà
function getData(data) {
    console.log(data.id, data.username);
}
// Definizione di un oggetto "data" con tre proprietà
const data = { id: 1, username: 'bonobo', password: '' };
// Chiamata alla funzione "getData" passando l'oggetto "data" come argomento
getData(data);
// Definizione di una funzione che prende due numeri come argomenti e restituisce la loro somma
// Nel caso in cui il secondo argomento non sia passato, la funzione assegna di default il valore 0 al parametro "num2".
// Grazie all'inference di TypeScript, il tipo dell'argomento "num2" viene dedotto automaticamente come number.
// Il tipo di ritorno della funzione è anch'esso number e viene dedotto dall'inference in base all'operazione di somma effettuata.   
function addNumbers(num1, num2 = 0) {
    const sum = num1 + num2;
    return sum;
}
// In questa funzione è possibile specificare un tipo di ritorno diverso dall'inference, in questo caso "string" o "void"
function _addNumbers(num1, num2 = 0) {
    const sumString = (num1 + num2).toString();
    console.log(sumString);
    if (typeof sumString === 'string') {
        return sumString;
    }
}
// In questo esempio si assegna una funzione con tipo generico "Function" ad una variabile "addNumbersFunc"
// Questo può causare problemi in quanto si potrebbe ri-assegnare "addNumbersFunc" ad una funzione che accetta argomenti di tipi diversi o restituisce tipi diversi
// In questo caso si assegna la funzione "print" a "addNumbersFunc", ma questa funzione accetta una stringa come argomento, e quindi non è compatibile con "addNumbers"
let addNumbersFunc = _addNumbers;
function _print(string) { console.log(string); }
addNumbersFunc = _print;
// Per risolvere il problema del tipo generico "Function", si può specificare il tipo della funzione "addNumbersFunc"
let _addNumbersFunc;
// In questa funzione si esegue una operazione di incremento sul parametro "num", e poi si esegue la funzione di callback "cb()"
function incrementAndExecute(num, cb) {
    const incrementedNum = num + 1;
    console.log(`Il numero incrementato è ${incrementedNum}`);
    cb();
}
// Questa è la funzione di callback che viene eseguita quando "incrementAndExecute()" viene chiamata
function callbackFunction() {
    console.log("La funzione di callback è stata eseguita!");
}
// Viene eseguita la funzione "incrementAndExecute()", passando il valore "5" come primo argomento e "callbackFunction" come secondo argomento
incrementAndExecute(5, callbackFunction);
/*
    Compilator
*/
/*
    tsc app.ts

    Questo comando esegue la compilazione di un singolo file TypeScript chiamato "app.ts".
    La compilazione genera un file JavaScript equivalente chiamato "app.js",
    che può essere eseguito in un ambiente Node.js o in un browser.
*/
/*
    tsc app.ts -w / tsc app.ts --watch

    Questi comandi eseguono la compilazione di un file TypeScript chiamato "app.ts",
    monitorando continuamente il file per eventuali modifiche e ricompilando in automatico il progetto.
*/
/*
    tsc --init

    Questo comando inizializza un file di configurazione "tsconfig.json" preimpostato,
    che può essere successivamente personalizzato per adattarlo alle esigenze del progetto.
    Il file di configurazione consente di specificare le opzioni di compilazione del progetto TypeScript,
    ad esempio per includere o escludere specifici file, specificare il livello di strictness del compilatore,
    specificare l'output directory e molto altro.
*/
/*
    tsc -w / tsc --watch

    Questi comandi eseguono la compilazione del progetto TypeScript in modo continuo,
    monitorando tutti i file del progetto per eventuali modifiche e ricompilando in automatico il progetto
    senza la necessità di specificare i file di input o le opzioni di compilazione ad ogni singola esecuzione del comando "tsc".
*/
/*
    Class
*/
// Classe che rappresenta una persona con nome "Gigi"
class Gigi {
    constructor() {
        this.name = 'Gigi';
        this.surname = '';
    }
}
// Definizione della classe PersonClass con costruttore per inizializzare le proprietà "name" e "surname"
class PersonClass {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    // Metodo introduceMyself che stampa una presentazione della persona corrente
    introduceMyself() {
        console.log(`My name's ${this.name}`);
    }
    // Metodo greet che saluta una persona specifica
    greet(person) {
        console.log(`Hello ${person.name}, nice to meet you`);
    }
}
// Creazione di un'istanza di PersonClass e inizializzazione delle proprietà name e surname
const personOne = new PersonClass("Mario", "Rossi");
const personTwo = new PersonClass("Lucia", "Verdi");
console.log(personOne.name); // Output: "Mario"
console.log(personOne.surname); // Output: "Rossi"
personOne.introduceMyself(); // Output: "My name's Mario"
personTwo.greet(personOne); // Output: "Hello Mario, nice to meet you"
