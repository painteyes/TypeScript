/*
    Differenza tra tipi di dato dinamici e statici
    
    In TypeScript il tipo delle variabili è statico, a differenza di JavaScript in cui il tipo di dato è dinamico.
    Questo significa che in TypeScript il tipo di una variabile viene definito in fase di dichiarazione e
    non può essere cambiato successivamente.
*/
var _a;
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
var _name = 'Andrea';
var surname = "Occhipinti";
var string = "My full name is ".concat(_name, " ").concat(surname);
/*
    Number
*/
var num1 = 8;
var num2 = 6;
var __sum = num1 + num2;
/*
    Boolean
*/
var bool = false;
var _bool = false;
var ___bool;
___bool = (bool === _bool) ? true : false;
/*
    Functions
*/
// Definizione di una funzione che accetta un oggetto con tre proprietà
function getData(data) {
    console.log(data.id, data.username);
}
// Definizione di un oggetto "data" con tre proprietà
var data = { id: 1, username: 'bonobo', password: '' };
// Chiamata alla funzione "getData" passando l'oggetto "data" come argomento
getData(data);
/*
    Object
*/
// Definizione di un oggetto "person1" con due proprietà
var person1 = {
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
var person2 = {
    name: "Luca",
    surname: "Rossi"
};
/*  Dichiarazione di un oggetto "person3" di tipo "{}", che in TypeScript rappresenta l'oggetto vuoto.
    Questo significa che l'oggetto può contenere qualsiasi tipo di proprietà,
    ma non è specificato il tipo di alcuna proprietà dell'oggetto.
    Pertanto, non è possibile accedere alle proprietà dell'oggetto senza specificare il tipo corretto delle proprietà.
    In pratica, person3 non è molto utile perché non specifica il tipo delle proprietà dell'oggetto.
*/
var person3 = {
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
var person = { name: "Luca", surname: "Rossi" };
// Dichiarazione di un oggetto "person" con proprietà nidificate
var _person;
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
var numArr = [1, 3, 11];
// Definizione di un array di stringhe
var strArr = ["", ""];
// Definizione di un array di qualsiasi tipo di dato
var anyArr = ["", 17, true, [], {}];
// Definizione di un array con elementi di tipo union (string, number, boolean)
var unionArr = ["hello", 42, true];
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
var tuple = [1, 2];
// Esempio di utilizzo di tuple all'interno di un oggetto
var game = {
    id: '',
    accessCode: '',
    players: (_a = [
        'username1',
        'username2'
    ], string = _a[0], string = _a[1], _a)
};
var __person = {
    name: 'Mario',
    surname: 'Rossi',
    age: 42,
    address: {
        street: 'Via del Corso',
        number: 11,
        cap: '00100',
        city: 'Rome'
    }
};
function getPersonAddress(person) {
    console.log(person.address.street, ' ', person.address.number, ' ,', person.address.cap, ' ,', person.address.city);
}
/*
    Enum
*/
// Example 1
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
var day = WeekDays.Tuesday;
console.log(day); // Output: 2
if (day === WeekDays.Saturday || day === WeekDays.Sunday) {
    console.log("It's the weekend!");
}
else {
    console.log("It's not the weekend");
}
// Example 2
var PizzaToppings;
(function (PizzaToppings) {
    PizzaToppings["Pepperoni"] = "Pepperoni";
    PizzaToppings["Mushrooms"] = "Mushrooms";
    PizzaToppings["Onions"] = "Onions";
    PizzaToppings["Sausage"] = "Sausage";
    PizzaToppings["Bacon"] = "Bacon";
    PizzaToppings["Cheese"] = "Cheese";
    PizzaToppings["Pineapple"] = "Pineapple";
})(PizzaToppings || (PizzaToppings = {}));
var myToppings = PizzaToppings.Pepperoni;
console.log(myToppings); // Output: "Pepperoni"
if (myToppings === PizzaToppings.Pineapple) {
    console.log("Pineapple on pizza? Yay or nay?");
}
else {
    console.log("That's a good choice of toppings!");
}
/*
    Any
*/
var _anyArr = ["", 3];
var _tuple = [true, 4];
/*
    Union
*/
var union = 5;
var _union = ['', ''];
/*
    Alias
*/ 
