/**
 * Differenza tra tipi di dato dinamici e statici
 * 
 * In TypeScript il tipo delle variabili è statico, a differenza di JavaScript in cui il tipo di dato è dinamico.
 * Questo significa che in TypeScript il tipo di una variabile viene definito in fase di dichiarazione e
 * non può essere cambiato successivamente. Questa caratteristica aiuta a prevenire molti errori comuni
 * e migliora la manutenibilità del codice.
*/

// Esempio di tipizzazione statica in TypeScript
let number: number = 5;
// number = '5'; // Errore: Il tipo 'string' non è assegnabile al tipo 'number'.

// Esempio di tipizzazione dinamica in JavaScript (per confronto)
// let jsNumber = 5;
// jsNumber = '5'; // Valido in JavaScript, ma non consigliato

/**
 * Dichiarazione di funzioni in TypeScript
 * 
 * In TypeScript, possiamo specificare i tipi dei parametri e il tipo di ritorno delle funzioni.
 * Questo ci permette di catturare errori di tipo a compile-time invece che a runtime.
*/
function sum(a: number, b: number): number {
    return a + b;
}

// Utilizzo corretto della funzione sum
console.log(sum(3, 5)); // Output: 8

// Esempio di utilizzo errato della funzione sum (commentato per evitare errori di compilazione)
// console.log(sum(3, '5')); // Errore: L'argomento di tipo 'string' non è assegnabile al parametro di tipo 'number'.

/**
 * Type assignment e Type inference
 * 
 * In TypeScript, il tipo di una variabile può essere assegnato esplicitamente (type assignment)
 * o può essere dedotto automaticamente dal compilatore in base al valore iniziale della variabile (type inference).
*/

// Type assignment: il tipo viene specificato esplicitamente
let explicitNumber: number = 3;

// Type inference: il tipo viene dedotto automaticamente
let inferredNumber = 3; // TypeScript inferisce il tipo 'number'
let inferredString = "5"; // TypeScript inferisce il tipo 'string'

// Esempio di utilizzo delle variabili con tipi inferiti
console.log(typeof inferredNumber); // Output: "number"
console.log(typeof inferredString); // Output: "string"

/**
 * Esempio di errore di tipo a compile-time
 * 
 * TypeScript ci protegge da operazioni non valide tra tipi diversi.
*/
// console.log(sum(explicitNumber, inferredString)); // Errore: L'argomento di tipo 'string' non è assegnabile al parametro di tipo 'number'.

/**
 * Conversione esplicita di tipi (type casting)
 * 
 * Quando si è sicuri del tipo di una variabile, si può utilizzare il type casting per "forzare" il tipo.
 * Attenzione: questo bypassa i controlli di TypeScript e dovrebbe essere usato con cautela.
*/
let someValue: unknown = "10";
let strLength: number = (someValue as string).length;

// Oppure usando la sintassi alternativa:
let _strLength: number = (<string>someValue).length;


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


/**
 * Oggetti in TypeScript
 * 
 * TypeScript offre diversi modi per definire e tipizzare gli oggetti,
 * ciascuno con le proprie caratteristiche e casi d'uso.
*/

// 1. Oggetto con inferenza di tipo
const person1 = {
    name: "Pietro",
    surname: "Rossi",
    age: 30
}
console.log(person1.name); // OK: TypeScript inferisce correttamente il tipo
// person1.salary = 50000; // Errore: la proprietà 'salary' non esiste nel tipo inferito

/**
 * 2. Oggetto di tipo generico 'object'
 * 
 * Il tipo 'object' rappresenta qualsiasi valore non primitivo.
 * Questo include oggetti, array e funzioni, ma esclude null e undefined.
*/
let objectType: object = { key: "value" };
objectType = ["array"];
objectType = function() {};
// objectType = null; // Errore
// objectType = undefined; // Errore
// objectType = 42; // Errore: Type 'number' is not assignable to type 'object'

/**
 * 3. Oggetto di tipo '{}'
 * 
 * Il tipo '{}' rappresenta qualsiasi valore che non sia null o undefined.
 * Questo include tutti i tipi primitivi (eccetto null e undefined) e tutti i tipi di oggetto.
*/
let emptyType: {} = { key: "value" };
emptyType = ["array"];
emptyType = function() {};
emptyType = 42; // OK
emptyType = "string"; // OK
emptyType = true; // OK
// emptyType = null; // Errore
// emptyType = undefined; // Errore

// Dichiariamo una variabile di tipo '{}'
let value: {} = "Hello, TypeScript!";

// Questo genera un errore di compilazione
// console.log(value.length); // Errore: Property 'length' does not exist on type '{}'.

// Questo approccio usa un'asserzione di tipo (as string)
console.log((value as string).length); // Funziona, ma non è type-safe

// Un approccio più sicuro usando il controllo di tipo
if (typeof value === "string") {
    console.log(value.length); // OK
}

// Esempio con un oggetto
let obj: {} = { name: "Alice", age: 30 };

// Questo genera un errore di compilazione
// console.log(obj.name);
// Errore: Property 'name' does not exist on type '{}'.

// Questo funziona, ma non è type-safe
console.log((obj as { name: string }).name);

// Un approccio più sicuro usando il controllo di tipo
if (typeof obj === "object" && obj !== null && "name" in obj) {
    console.log((obj as { name: string }).name); // OK
}

/**
 * Differenze chiave tra 'object' e '{}'
 * 
 * 1. 'object' esclude tutti i tipi primitivi (number, string, boolean, null, undefined).
 * 2. '{}' esclude solo null e undefined, accettando tutti gli altri tipi primitivi.
 * 3. Entrambi accettano qualsiasi tipo di oggetto (inclusi array e funzioni).
*/

// Esempio di utilizzo
function acceptsObject(arg: object) {
    console.log(arg);
}

function acceptsEmptyType(arg: {}) {
    console.log(arg);
}

acceptsObject({});     // OK
acceptsObject([]);     // OK
// acceptsObject(42);  // Errore

acceptsEmptyType({});  // OK
acceptsEmptyType([]);  // OK
acceptsEmptyType(42);  // OK

/**
 * Nota: Sebbene '{}' accetti tipi primitivi, non permette l'accesso a proprietà specifiche.
*/
let someObj: {} = { prop: "value" };
// console.log(someObj.prop); // Errore: Property 'prop' does not exist on type '{}'

/**
 * Best Practice:
 * - Usa 'object' quando vuoi accettare solo oggetti non primitivi.
 * - Usa '{}' quando vuoi accettare qualsiasi valore tranne null e undefined.
 * - Per una tipizzazione più precisa, considerare l'uso di interfacce o tipi specifici.
*/

/**
 * 4. Oggetto con tipo esplicito
 * 
 * Definisce esattamente quali proprietà l'oggetto deve avere e di che tipo.
 */
let person: { 
    name: string; 
    surname: string;
    age: number;
    email?: string; // Proprietà opzionale
    readonly id: number; // Proprietà di sola lettura
} = { 
    name: "Luca", 
    surname: "Rossi",
    age: 35,
    id: 1
}
console.log(person.name); // OK
person.email = "luca.rossi@example.com"; // OK: proprietà opzionale
// person.id = 2; // Errore: non possiamo modificare una proprietà readonly

/**
 * 5. Oggetto con proprietà nidificate
 * 
 * Possiamo definire oggetti complessi con proprietà annidate.
*/
let complexPerson: {
    name: string;
    surname: string;
    age: number;
    address: {
        street: string;
        number: number;
        cap: string;
        city: string;
    };
    contacts: {
        email: string;
        phone?: string; // Proprietà opzionale
    }
}

complexPerson = {
    name: "Paolo",
    surname: "Rossi",
    age: 30,
    address: {
        street: "Via Cavour",
        number: 87,
        cap: '00100',
        city: 'Rome'
    },
    contacts: {
        email: "paolo.rossi@example.com"
    }
}

/**
 * Utilizzo di 'typeof' per inferire il tipo
*/
function printAddress(person: typeof complexPerson) {
    console.log(`${person.name} vive in ${person.address.street}, ${person.address.city}`);
}

printAddress(complexPerson); // OK
// printAddress(person1); // Errore: struttura non corrispondente


/**
 * Tipizzazione strutturale
 *
 * TypeScript usa un sistema di tipizzazione strutturale, dove la compatibilità
 * tra tipi è basata sulla struttura degli oggetti, non sul loro nome.
*/

interface Dog {
    name: string;
    breed: string;
}

interface Pet {
    name: string;
    breed: string;
}

let myDog: Dog = { name: "Fido", breed: "Labrador" };

function petInfo(pet: Pet) {
    console.log(`${pet.name} is a ${pet.breed}`);
}

petInfo(myDog); // OK: Dog e Pet hanno la stessa struttura

/**
 * Assegnabilità in TypeScript
 * 
 * Principio fondamentale: Un tipo è assegnabile a un altro se contiene
 * almeno tutte le proprietà richieste dal tipo di destinazione.
*/

type Minimal = { id: number };
type Detailed = { id: number; name: string };

let minimal: Minimal = { id: 1 };
let detailed: Detailed = { id: 2, name: "John" };

minimal = detailed; // OK: Detailed ha tutte le proprietà di Minimal
// detailed = minimal; // Errore: Minimal non ha tutte le proprietà di Detailed 

/**
 * Eccesso di proprietà (Excess Property Checking)
 *
 * TypeScript applica un controllo più rigoroso quando si assegna un 
 * oggetto letterale direttamente a un tipo con una forma specifica.
*/

// Assegnazione diretta: controllo rigoroso
let validPerson: { name: string } = { name: "Alice" };
// let invalidPerson: { name: string } = { name: "Bob", age: 30 }; // Errore: 'age' non esiste in { name: string }

// Assegnazione indiretta: più permissiva
let personObj = { name: "Charlie", age: 40 };
let typedPerson: { name: string } = personObj; // Questo è permesso

// Le proprietà extra non sono accessibili attraverso il tipo
console.log(typedPerson.name); // OK
// console.log(typedPerson.age); // Errore: 'age' non esiste in { name: string }

/**
 * Spiegazione
 * 
 * - Oggetto letterale: Quando assegni direttamente un oggetto letterale, 
 *      TypeScript esegue una verifica esatta per evitare errori accidentali. 
 *      Se lasciasse passare proprietà extra, potrebbe portare a bug indesiderati.
 * 
 * - Variabile intermedia: Quando assegni una variabile già dichiarata, 
 *      TypeScript è più flessibile perché suppone che tu abbia già controllato il contenuto dell'oggetto. 
 *      Non applica una verifica esatta, ma si limita a verificare che l'oggetto abbia almeno le proprietà richieste.
*/

// Metodi per aggirare il controllo di eccesso di proprietà:

// Asserzione di tipo
let bypassPerson1: { name: string } = { name: "Charlie", age: 40 } as { name: string };
// console.log(bypassPerson1.age); // Errore: Property 'age' does not exist on type '{ name: string }'

// Assegnazione indiretta
let temp = { name: "David", age: 50 };
let bypassPerson2: { name: string } = temp;
// console.log(bypassPerson2.age); // Errore: Property 'age' does not exist on type '{ name: string }'

// Indice di firma
interface FlexiblePerson {
    name: string;
    [key: string]: any;
}
let flexiblePerson: FlexiblePerson = { name: "Frank", age: 60, job: "Manager" };

// Tipizzazione strutturale e controllo delle proprietà in eccesso negli argomenti delle funzioni
function printPerson(p: { name: string }) {
    console.log(p.name);
    // console.log(p.age); // Errore: 'age' non esiste in Person
}

let _complexPerson = { name: "Grace", age: 35, skills: ["coding", "design"] };
printPerson(_complexPerson); // OK, ma 'age' e 'skills' non sono accessibili nella funzione

/**
 * Utility Types per la manipolazione dei tipi di oggetto
*/

// Partial<T>: Rende tutte le proprietà opzionali
type PartialPerson = Partial<typeof person>;
let partialPerson: PartialPerson = { name: "Marco" }; // OK: tutte le altre proprietà sono opzionali

// Esempio di utilizzo pratico
function updatePerson(person: typeof complexPerson, updates: Partial<typeof complexPerson>) {
    return { ...person, ...updates };
}

const updatedPerson = updatePerson(complexPerson, { age: 31, address: { ...complexPerson.address, number: 88 } });
console.log(updatedPerson);

// Readonly<T>: Rende tutte le proprietà di sola lettura
type ReadonlyPerson = Readonly<typeof person>;
let readonlyPerson: ReadonlyPerson = { ...person };
// readonlyPerson.name = "Mario"; // Errore: non possiamo modificare una proprietà readonly

// Pick<T, K>: Crea un tipo con solo alcune proprietà di T
type NameAge = Pick<typeof person, 'name' | 'age'>;
let nameAge: NameAge = { name: "Luigi", age: 35 };

// Omit<T, K>: Crea un tipo omettendo alcune proprietà di T
type PersonWithoutId = Omit<typeof person, 'id'>;
let personWithoutId: PersonWithoutId = { name: "Giulia", surname: "Verdi", age: 28 };

/**
 * Best Practices
 * 
 * 1. Usare tipi espliciti per oggetti complessi o riutilizzabili.
 * 2. Sfruttare l'inferenza di tipo per oggetti semplici o temporanei.
 * 3. Utilizzare interfacce per definire contratti di oggetti che possono essere implementati o estesi.
 * 4. Usare i tipi di utilità per manipolare i tipi esistenti secondo le proprie esigenze.
 * 5. Ricorda: la tipizzazione strutturale può portare a comportamenti inaspettati, usala con consapevolezza.
*/

/**
 *  Esempi di Best Practices
*/

// a. Uso di interfacce per contratti riutilizzabili
interface Employee extends Person {
    employeeId: number;
}

// b. Utilizzo di tipi per composizioni complesse
type Manager = Employee & { team: Employee[] };

// c. Uso di generics per flessibilità
function identity<T>(arg: T): T {
    return arg;
}

let employeeId = identity<number>(123);
let employeeName = identity("Alice");

/**
 * Punti chiave:
 * 
 * 1. Tipizzazione Strutturale:
 *    - Basata sulla struttura degli oggetti, non sui nomi dei tipi.
 *    - Permette l'assegnazione di oggetti con più proprietà a tipi con meno proprietà.
 * 
 * 2. Controllo delle Proprietà in Eccesso:
 *    - Più rigido con oggetti letterali assegnati direttamente.
 *    - Più permissivo con assegnazioni da variabili e argomenti di funzioni.
 * 
 * 3. Accesso alle Proprietà:
 *    - Le proprietà extra esistono a runtime.
 *    - TypeScript impedisce l'accesso statico alle proprietà non dichiarate nel tipo.
 * 
 * 4. Assegnabilità:
 *    - Un tipo è assegnabile se contiene almeno tutte le proprietà richieste dal tipo di destinazione.
 * 
 * 5. Flessibilità e Sicurezza:
 *    - Esistono metodi per aggirare il controllo quando necessario (es. asserzioni di tipo, indici di firma).
 * 
 * 6. Best Practices:
 *    - Uso di interfacce, tipi, generics e utility types per una tipizzazione flessibile e sicura.
*/


/*
    Array
*/

// Definizione di un array di numeri
const numArr: number[] = [1, 3, 11]

// Definizione di un array di stringhe
const strArr: string[] = ["", ""]

// Definizione di un array di qualsiasi tipo di dato
const anyArr: any[] = ["", 17, true, [], {}]

// Definizione di un array con elementi di tipo union (string, number, boolean)
const unionArr: (string | number | boolean)[] = ["hello", 42, true];

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
const tuple: number[] = [1,2]

// Esempio di utilizzo di tuple all'interno di un oggetto
const game = {
    id: '',
    accessCode: '',
    players: [string, string] = [
        'username1',
        'username2'
    ]
}

/*
    Custom type
*/

// Definiamo il tipo Person, che contiene informazioni su nome, cognome, età e indirizzo
type Person = {
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

// Creiamo un oggetto di tipo Person con informazioni di esempio
let __person: Person = {
name: 'Mario',
surname: 'Rossi',
age: 42,
address: {
        street: 'Via del Corso',
        number: 11,
        cap: '00100',
        city: 'Roma'
    }
}

// Definiamo una funzione che stampa l'indirizzo di una persona
function getPersonAddress(person: Person) {
console.log(
        person.address.street,
        ' ',person.address.number,
        ', ',person.address.cap,
        ', ',person.address.city,
    )
}

/*
    Enum
*/

// Definiamo l'enumerazione PizzaToppings per i vari ingredienti della pizza
enum PizzaToppings {
    Pepperoni = "pepperoni",
    Mushroom = "mushroom",
    Pineapple = "pineapple",
}
    
// Definiamo l'enumerazione weekDays per i giorni della settimana
enum weekDays {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}
    
// Creiamo una variabile di tipo weekDays e la inizializziamo a Tuesday
let day: weekDays = weekDays.Tuesday;
console.log(day); // Output: 2


/* 
    Questo darebbe errore perché i valori di day e weekDays.Saturday/Sunday appartengono a tipi differenti: 
    day è un valore di tipo weekDays mentre weekDays.Saturday/Sunday sono stringhe.

if (day === weekDays.Saturday || day === weekDays.Sunday ) { */
if (day === weekDays.Saturday as weekDays || day === weekDays.Sunday as weekDays) { /* Per risolvere il problema, 
possiamo specificare il tipo di enumerazione in entrambi i confronti. Possiamo fare ciò usando l'operatore "as" 
per forzare TypeScript a considerare day e weekDays.Saturday/Sunday come valori di tipo weekDays */
    console.log("È il weekend! Mangiamo la pizza con " + PizzaToppings.Pepperoni + " e " + PizzaToppings.Pineapple);
} else {
    console.log("Spiacente, niente pizza oggi.");
}
  
/*  
    Ci sono diverse soluzioni per risolvere il problema

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
let _any: any = 5;
_any = "test"; // Possiamo assegnare un valore di tipo stringa alla variabile

// Creiamo un array di tipo any che può contenere qualsiasi tipo di valore
let _anyArr: any[] = ["", 3];

// Creiamo una tupla di tipo any che può contenere qualsiasi tipo di valore
let _tuple: [any, number] = [true, 4];

/*
    Union
*/

// Creiamo una variabile di tipo union che può contenere un valore di tipo number o stringa
let union: number | string = 5;

// Creiamo un array di tipo union che può contenere un array di tipo any o un array di tipo stringa
let _union: any[] | string[] = ['', ''];

/*
    Alias
*/


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
    Definizione di una funzione che prende due numeri come argomenti e restituisce la loro somma
    Nel caso in cui il secondo argomento non sia passato, la funzione assegna di default il valore 0 al parametro "num2".
    Grazie all'inference di TypeScript, il tipo dell'argomento "num2" viene dedotto automaticamente come number.
    Il tipo di ritorno della funzione è anch'esso number e viene dedotto dall'inference in base all'operazione di somma effettuata. 
*/  
function addNumbers(num1: number, num2 = 0) {
    const sum = num1 + num2
    return sum
}
    
// In questa funzione è possibile specificare un tipo di ritorno diverso dall'inference, in questo caso "string" o "void"
function _addNumbers(num1: number, num2 = 0): string | void {
    const sumString = (num1 + num2).toString();
    console.log(sumString);
    if (typeof sumString === 'string') {
        return sumString;
    }
}
    
/*  
    In questo esempio si assegna una funzione con tipo generico "Function" ad una variabile "addNumbersFunc"
    Questo può causare problemi in quanto si potrebbe ri-assegnare "addNumbersFunc" ad una funzione che accetta argomenti di tipi diversi o restituisce tipi diversi
    In questo caso si assegna la funzione "print" a "addNumbersFunc", ma questa funzione accetta una stringa come argomento, e quindi non è compatibile con "addNumbers"
*/
let _addNumbersFunc: Function = _addNumbers
function _print(string: string) {console.log(string)}
_addNumbersFunc = _print
    
// Per risolvere il problema del tipo generico "Function", si può specificare il tipo della funzione "addNumbersFunc"
let addNumbersFunc: (num1: number, num2: number) => number = function(num1: number, num2: number): number {
  return num1 + num2;
};
console.log(addNumbersFunc(2, 3)); // Output: 5

// In questa funzione si esegue una operazione di incremento sul parametro "num", e poi si esegue la funzione di callback "cb()"
function incrementAndExecute(num: number, cb: () => void) {
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
    CLASSI

    - Creazione di una classe con la keyword "class"
    - Aggiunta di proprietà alla classe
    - Utilizzo di un costruttore standard con parametri
    - Uso dei modificatori di accesso "private", "public" e "protected"
    - Utilizzo del "shortened constructor"
    - Implementazione dell'ereditarietà tra classi
    - Uso di proprietà "readonly"
    - Creazione di una classe figlia con un costruttore predefinito e l'utilizzo della keyword "super"
    - Definizione di proprietà e metodi "static"
    - Utilizzo di classi astratte
    - Implementazione del pattern Singleton
*/

// Classe che rappresenta una persona con nome "Gigi"
class Gigi {
    name: string = 'Gigi'
    surname: string = ''
}

// Definizione della classe PersonClass con costruttore per inizializzare le proprietà "name" e "surname"
class PersonClass {
    
    private name: string; // proprietà privata
    public surname: string; // proprietà pubblica
    age: number; // proprietà pubblica (se non viene specificato alcun modificatore di accesso, la proprietà è "public" di default)

    // Costruttore standard
    constructor(name: string, surname: string, age: number) {
        this.name = name;
        this.surname = surname;
        this.age = age
    }

    // Metodo che stampa una presentazione della persona corrente
    introduce(): void {
        console.log(`My name's ${this.name}`)
    }

    // Metodo greet che saluta una persona specifica
    greet(person: PersonClass): void {
        console.log(`Hello ${person.name}, nice to meet you`)
    }
}
  
// Creazione di un'istanza di PersonClass e inizializzazione delle proprietà name e surname
const personOne = new PersonClass("Mario", "Rossi", 43);
const personTwo = new PersonClass("Lucia", "Verdi", 29);

// console.log(personOne.name); // Errore: la proprietà name è privata e non può essere accessibile da fuori la classe
console.log(personOne.surname); // Output: "Rossi"
personOne.introduce() // Output: "My name's Mario"
personTwo.greet(personOne) // Output: "Hello Mario, nice to meet you"

// La proprietà "name" è privata (private) e pertanto non può essere modificata direttamente dall'esterno della classe PersonClass.
// personOne.name = 'Richard'; // Errore: l'accesso alla proprietà name non è consentito al di fuori della classe PersonClass.

// La proprietà "surname" è pubblica (public) e pertanto può essere modificata direttamente dall'esterno della classe PersonClass.
personOne.surname = 'Benson'; // L'accesso alla proprietà surname è consentito al di fuori della classe PersonClass.

/* Shortend constructor */ 
// Definizione della classe GameClass
class GameClass {

    // Costruttore abbreviato che inizializza automaticamente le proprietà private id, usernameOne e usernameTwo.
    // Il modificatore di accesso "private readonly" definisce le proprietà come di sola lettura, non modificabili dopo la creazione.
    constructor(private readonly id: number, private userOne: PersonClass, private userTwo: PersonClass) {}
}

// Istanziazione della classe GameClass con i due oggetti PersonClass creati
const _game = new GameClass(100, personOne, personTwo)

/* Inheritance (ereditarietà) */
// Definizione della classe base `_PersonClass` che rappresenta una persona generica
class _PersonClass {

    // Il costruttore accetta il nome e il cognome della persona come argomenti
    constructor(private name: string, protected surname: string) {}
}

// Definizione della classe `Student` che eredita dalla classe `_PersonClass`.
class Student extends _PersonClass {

    /*  
        Costruttore della classe `Student`.
      
        Il costruttore della classe genitore `_PersonClass` viene ereditato, per cui accetta come parametri il nome e il cognome del nuovo studente 
        chiamando il costruttore della classe genitore. Se non vengono specificati dei parametri aggiuntivi non è necessario definire il costruttore, 
        in quanto verrà utilizzato il costruttore della classe genitore `_PersonClass`.
            
        Accetta due parametri aggiuntivi:
        `favoriteSubject`: la materia preferita dello studente (stringa);
        `votes`: (opzionale) un array di voti dello studente (array di numeri).
      
        Il costruttore chiama il costruttore della classe genitore `_PersonClass` utilizzando `super` per inizializzare il nome e il cognome,
        poi inizializza la proprietà `favoriteSubject` con la materia preferita dello studente e, se fornito, l'array dei voti.
    */
    constructor(name: string, surname: string, private favoriteSubject: string, private votes?: Array<number>) {
        super(name, surname); // Chiama il costruttore della classe genitore per inizializzare il nome e il cognome.
    }

    // Metodo per cambiare il nome dello studente.
    changeName(name: string) {
        // La proprietà `name` è privata (private) e quindi modificabile solo all'interno della classe `_PersonClass`. 
        // this.name = 'Giacomo'; // Errore: non è possibile modificare la proprietà `name`. 
    }

    // Metodo per cambiare il cognome dello studente.
    changeSurname(surname: string) {
        // La proprietà `surname` è protetta (protected) e quindi modificabile sia all'interno della classe `_PersonClass` che nelle sue sottoclassi.
        this.surname = 'Poretti'; 
    }
}

// Creazione di un'istanza della classe `Student` con il nome "Aldo", il cognome "Baglio" e la materia preferita "Storia"
const _student: Student = new Student('Aldo', 'Baglio', 'Storia');

// La proprietà "surname" è protetta (protected) e pertanto non può essere modificata direttamente al di fuori della sua classe o delle sue sottoclassi.
// _student.surname = 'Poretti'; // Errore: l'accesso alla proprietà surname è consentito solo all'interno della classe Student e delle sue sottoclassi.

/* Static */
// La classe Employee estende la classe Person e aggiunge una proprietà statica "company" e un metodo statico "createEmployee".
class _Employee extends _PersonClass {

    // La proprietà "company" è statica e contiene il nome dell'azienda.
    static company = "OpenAI";

    static createEmployee(name: string, surname: string): _Employee {
        // Il metodo "createEmployee" restituisce una nuova istanza della classe _Employee.
        return new _Employee(name, surname);
    }
}

_Employee.createEmployee('Giovanni', 'Storti'); // Restituisce una nuova istanza della classe _Employee.
_Employee.company // Output: "OpenAi"

/* Abstract */
/*  
    Definiamo una classe astratta chiamata "Animal"che rappresenta un animale generico.
    Poiché "Animal" è una classe astratta, essa non può essere istanziata direttamente.
    È stata pensata, invece, per essere estesa da altre classi che ereditano le proprietà
    e i metodi di "Animal" e possono definire le proprie proprietà e metodi.
*/
abstract class Animal {

    // Definiamo un costruttore che accetta un nome per l'animale
    constructor(public name: string) {}
    
    /*  
        Definiamo un metodo astratto chiamato "sound()" che rappresenta il suono prodotto dall'animale.
        I metodi astratti sono solo dichiarati e non implementati, il che significa che devono essere 
        implementati dalle classi figlie. Qualsiasi classe che estende "Animal" deve necessariamente
        fornire una propria implementazione di questo metodo  
    */
    abstract sound(): string;
    
    // Definiamo un metodo che stampa il nome dell'animale seguito dal suo suono
    makeSound(): void {
        console.log(`${this.name} fa ${this.sound()}`);
    }
}
    
// Definiamo una classe che estende la classe astratta "Animal"
class Cane extends Animal {

    // Implementiamo il metodo astratto "sound" specifico per i cani
    sound(): string {
        return "Bau";
    }
}

// Creiamo una nuova istanza della classe "Cane" e chiamiamo il metodo "makeSound"
const fido = new Cane("Fido");
fido.makeSound(); // Output: "Fido fa Bau"

/* Singleton */
// Definiamo una classe singleton per gestire la connessione al database
class DatabaseConnection {
    private static instance: DatabaseConnection;
    private connected: boolean;

    // Il costruttore è privato, quindi la classe può essere istanziata solo internamente.
    private constructor() {
        this.connected = false;
    }

    // Questo metodo statico restituisce l'unica istanza della classe DatabaseConnection.
    public static getInstance(): DatabaseConnection {
        // Se non esiste ancora un'istanza, viene creata.
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        // Viene restituita l'istanza esistente.
        return DatabaseConnection.instance;
    }

    public connect(): void {
        // Effettua la connessione al database, se non già connesso
        if (!this.connected) {
            console.log("Connessione al database effettuata");
            this.connected = true;
        } else {
            console.log("Connessione già attiva");
        }
    }

    public disconnect(): void {
        // Effettua la disconnessione dal database, se connesso
        if (this.connected) {
            console.log("Disconnessione dal database effettuata");
            this.connected = false;
        } else {
            console.log("Nessuna connessione attiva");
        }
    }
}

// Richiama il metodo statico getInstance() della classe DatabaseConnection per ottenere l'unica istanza della classe e connetterci al database
DatabaseConnection.getInstance().connect();

/* 
    Interfaces
    
    Le interfacce sono contratti che definiscono un insieme di proprietà e metodi che una classe deve implementare.
*/

// Definiamo un'interfaccia InternetConnection che descrive le proprietà e i metodi necessari per gestire una connessione a internet e accendimento e spegnimento.
interface InternetConnection {

    /* 
        Le interfacce contengono solo dichiarazioni di proprietà e metodi, ma non la loro implementazione. 
        Pertanto, come accade con le proprietà e i metodi astratti, qualsiasi classe che implementa l'interfaccia 
        InternetConnection deve fornire la propria implementazione dei metodi e delle proprietà definiti nell'interfaccia.
    */
    isConnected: boolean; // Proprietà che rappresenta la connessione a internet
    connect(): void; // Metodo per connettersi a internet
    disconnect(): void; // Metodo per disconnettersi da internet
}

/*  
    Differenza con custom type

    In TypeScript, possiamo definire un tipo personalizzato per descrivere la forma di un oggetto o di una variabile,
    simile a come definiamo un'interfaccia.

    La differenza principale tra un'interfaccia e un tipo personalizzato è che l'interfaccia viene utilizzata solo per descrivere 
    la forma di un oggetto,mentre un tipo personalizzato viene utilizzato per definire un tipo personalizzato e può includere unioni 
    di tipi, intersezioni di tipi, tipi condizionali e altre funzionalità avanzate.

    Inoltre, un'interfaccia può essere implementata da una classe o da un oggetto, mentre un tipo personalizzato non può essere utilizzato
    direttamente per implementare una classe o un oggetto.

    Infine, le interfacce possono essere estese da altre interfacce, mentre i tipi personalizzati non possono essere estesi.

    Tuttavia, i tipi personalizzati offrono maggiore flessibilità nella definizione dei tipi personalizzati rispetto alle interfacce,
    perché consentono di definire unioni di tipi, intersezioni di tipi, tipi condizionali e altre funzionalità avanzate.
*/
type CustomInternetConnection = {
    isConnected: boolean; // Proprietà che rappresenta la connessione a internet
    connect(): void; // Metodo per connettersi a internet
    disconnect(): void; // Metodo per disconnettersi da internet
}

// L'interfaccia PowerState definisce una proprietà per verificare lo stato di accensione del dispositivo.
interface PowerState {
    isPoweredOn: () => boolean; // Metodo per verificare se il dispositivo è acceso o spento
}

// L'interfaccia PowerSwitch definisce un metodo per accendere o spegnere il dispositivo.
interface PowerSwitch {
    togglePower(): void; // Metodo per accendere o spegnere il dispositivo
}

// L'interfaccia PowerControl estende le interfacce PowerState e PowerSwitch,  
// e definisce i metodi per accendere e spegnere il dispositivo.
interface PowerControl extends PowerState, PowerSwitch {
    turnOn(deviceType: string): void; // Metodo per accendere il dispositivo
    turnOff(deviceType: string): void; // Metodo per spegnere il dispositivo
}

// Definiamo un'enumerazione PowerStatus per rappresentare lo stato di accensione/spegnimento del dispositivo
enum PowerStatus {
    ON,
    OFF
}

// Implementiamo le due interfacce in una classe astratta che definisce un dispositivo con funzionalità di connessione a internet.
abstract class Device implements InternetConnection, PowerControl {

    // La proprietà privata _isConnected viene utilizzata per tenere traccia dello stato di connessione del dispositivo.
    private _isConnected: boolean = false;

    // La proprietà protetta powerStatus viene utilizzata per tenere traccia dello stato di alimentazione del dispositivo.
    protected powerStatus: PowerStatus = PowerStatus.OFF;

    // La proprietà astratta deviceType rappresenta il tipo di dispositivo e deve essere implementata in ogni classe derivata di Device.
    abstract deviceType: string;

    // Definiamo il costruttore della classe con due parametri: "model" e "year".
    constructor (public model: string, public year: number) {}

    /*
        Implementazione delle proprietà e i metodi definiti nell'interfaccia InternetConnection:
        - isConnected: boolean 
        - connect(): void 
        - disconnect(): void  
    */

    // public isConnected: boolean = false;

    /*  
        Dal momento che i membri di un'interfaccia sono sempre pubblici poiché devono essere accessibili dalle classi 
        che implementano l'interfaccia, la proprietà isConnected dell'interfaccia InternetConnection è pubblica e non 
        può avere un diverso livello di accesso. 
        Per impedire che la proprietà isConnected venga modificata direttamente dall'esterno, 
        si utilizzano i metodi getter e setter:
        - la funzione get viene eseguita quando si accede alla proprietà; 
        - la funzione set viene eseguita quando si cerca di modificare la proprietà. 
    */

    // Metodo pubblico per leggere la proprietà privata _isConnected
    public get isConnected(): boolean {
        return this._isConnected;
    }

    // Metodo privato per impostare la proprietà privata _isConnected
    private set isConnected(value: boolean) {
        this._isConnected = value;
    }

    // Metodo pubblico per connettere il dispositivo ad internet
    public connect(): void {
        console.log("Connecting to the internet...");
        this.isConnected = true; // Imposta la proprietà privata _isConnected a true, usando il metodo set
        console.log("Connected to the internet");
    }

    // Metodo pubblico per disconnettere il dispositivo da internet
    public disconnect(): void {
        console.log("Disconnecting from the internet...");
        this.isConnected = false; // / Imposta la proprietà privata _isConnected a false, usando il metodo set
        console.log("Disconnected from the internet");
    }
     
    /*  
        Implementazione delle proprietà e dei metodi definiti nell'interfaccia PowerControl:
        - togglePower(): void 
        - isPoweredOn: () => boolean 
        - turnOn(): void 
        - turnOff(): void
    */

    // Il metodo togglePower si occupa di cambiare lo stato di accensione/spengimento del dispositivo
    // a seconda dello stato attuale memorizzato nella proprietà protetta powerStatus.
    togglePower(): void {
        this.powerStatus = this.powerStatus === PowerStatus.ON ? PowerStatus.OFF : PowerStatus.ON;
    }

    // Il metodo isPoweredOn restituisce un valore booleano che indica se il dispositivo è attualmente acceso o spento.
    isPoweredOn(): boolean {
        return this.powerStatus === PowerStatus.ON;
    }

    /*
        I metodi turnOn() e turnOff() rappresentano il comportamento di accensione e spegnimento del dispositivo, 
        che è specifico per ogni implementazione di Device. 
        L'argomento deviceType viene utilizzato per garantire che ogni classe derivata di Device fornisca un'implementazione specifica dei metodi, 
        in linea con le specifiche del dispositivo, per garantire un comportamento coerente di accensione e spegnimento.
    */

    // Implementa il metodo turnOn definito nell'interfaccia PowerControl
    turnOn(deviceType: string) {
        if (!this.isPoweredOn()) {
            this.togglePower();
        }    
    }

    // Implementa il metodo turnOff definito nell'interfaccia PowerControl
    turnOff(deviceType: string) {
        if (this.isPoweredOn()) {
            this.togglePower();
        }        
    }
}

// Classe per uno smartphone, estende la classe Device
class Smartphone extends Device {

    deviceType: string = 'smartphone'

    // Sovrascrive il metodo turnOn implementato nella classe Device
    turnOn() {
        if (!this.isPoweredOn()) {
            console.log(`Accensione del ${this.deviceType}...`); // Modifica: aggiunge un messaggio di log per indicare l'accensione dello smartphone
            this.togglePower();
        }    
    }

    // Sovrascrive il metodo turnOff implementato nella classe Device
    turnOff() {
        if (this.isPoweredOn()) {
            console.log(`Spegnimento del ${this.deviceType}...`); // Modifica: aggiunge un messaggio di log per indicare lo spegnimento dello smartphone
            this.togglePower();
        }        
    }
}

// Classe per un computer, estende la classe Device
class Computer extends Device {
    deviceType: string = 'computer'

    // Sovrascrive il metodo turnOn implementato nella classe Device
    turnOn() {
        if (!this.isPoweredOn()) {
            console.log(`Accensione del ${this.deviceType}...`); // Modifica: aggiunge un messaggio di log per indicare l'accensione del computer
            this.togglePower();
        }    
    }

    // Sovrascrive il metodo turnOff implementato nella classe Device
    turnOff() {
        if (this.isPoweredOn()) {
            console.log(`Spegnimento del ${this.deviceType}...`); // Modifica: aggiunge un messaggio di log per indicare lo spegnimento del computer
            this.togglePower();
        }        
    }
}
  
const mySmartphone = new Smartphone('iPhone 13', 2021); // Crea un'istanza della classe Smartphone
mySmartphone.turnOn(); // Accende lo smartphone
mySmartphone.connect(); // Si connette a Internet
console.log(mySmartphone.isConnected); // Stampa lo stato della connessione
mySmartphone.disconnect(); // Si disconnette da Internet
mySmartphone.turnOff(); // Spegne lo smartphone

const myComputer = new Computer('MacBook Pro', 2022); // Crea un'istanza della classe Computer
myComputer.turnOn(); // Accende il computer
myComputer.connect(); // Si connette a Internet
console.log(myComputer.isConnected); // Stampa lo stato della connessione
myComputer.disconnect(); // Si disconnette da Internet
myComputer.turnOff(); // Spegne il computer
  

/**
 * GENERICS
 * 
 * Cosa sono le Generics ? 
 * Generics built-in
 * Esempio di utilizzo di Generics
 * Generic Constraint Extends 
 * Generic class 
*/

/*
    Cosa sono le Generics ? 

    Le Generics sono una tecnica di programmazione che permette di scrivere codice generico e flessibile, 
    indipendentemente dal tipo di dato con cui si sta lavorando.

    In TypeScript, le Generics vengono definite utilizzando il carattere "<" e ">" e sono applicabili su vari elementi, 
    come ad esempio funzioni, classi e interfacce. Il vantaggio di utilizzare le Generics sta nel fatto che il tipo di 
    dato su cui si lavora viene definito in modo dinamico al momento dell'utilizzo, rendendo così il codice più generico 
    e flessibile.
*/

/* Generics built-in */

// Definizione di un array di stringhe tipizzato
const stringsArr: string[] = ['q', 'w', 'e', 'r', 't', 'y'];

// Definizione di un array di numeri tipizzato utilizzando la sintassi delle Generics (built-in in TypeScript)
const numbersArr: Array<number> = [1, 2, 3, 4];

/* Esempio di utilizzo di Generics */

// Funzione che prende un array di elementi generici e ne restituisce una copia
function generateArr(items: any[]): any[] {
    return new Array().concat(items);
}

// Esempio di utilizzo della funzione con gli array tipizzati sopra
const arr1 = generateArr(numbersArr);
const arr2 = generateArr(stringsArr);

// Problema: si può aggiungere un elemento di qualsiasi tipo all'array
arr1.push('qwerty');

// Soluzione: utilizzo di generics per definire il tipo degli elementi dell'array
function _generateArr<T>(items: T[]): T[] {
    return new Array().concat(items);
}

// Esempio di utilizzo della nuova funzione
const _arr1 = _generateArr(numbersArr); // il tipo T viene inferito automaticamente
const _arr2 = _generateArr<string>(stringsArr); // il tipo T viene espresso esplicitamente come string

// Funzione che converte un elemento di tipo T in un nuovo elemento di tipo U
function mapItem<T, U>(item: T): U {
    if (typeof item === "number") {
        // Se l'elemento è di tipo numerico, lo converte in stringa
        return item.toString() as unknown as U; // il casting a unknown è necessario per evitare un errore di compilazione
    } else if (typeof item === "string") {
        // Se l'elemento è di tipo stringa, lo converte in maiuscolo
        return item.toUpperCase() as unknown as U; // il casting a unknown è necessario per evitare un errore di compilazione
    } else {
        // In caso contrario, restituisce l'elemento originale di tipo U
        return item as unknown as U; // il casting a unknown è necessario per evitare un errore di compilazione
    }
}

// Esempio di invocazione di mapItem():
const numberValue: number = 5;
const stringValue: string = 'hello';

const mappedNumberValue: string = mapItem<number, string>(numberValue); // mappedNumberValue avrà il valore '5' di tipo stringa
const mappedStringValue: string = mapItem<string, string>(stringValue); // mappedStringValue avrà il valore 'HELLO' in maiuscolo
  
// Funzione che mappa ogni elemento di un array in un nuovo array di tipo U
function mapArray<T, U>(items: T[]): U[] {
    
    const result: U[] = [];

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const mappedItem = mapItem<T, U>(item); // la funzione mapItem converte ogni elemento nell'array nel tipo U
        result.push(mappedItem);
    }

    return result;
}

// Esempio di invocazione di mapArray():
const _numbersArr: number[] = [1, 2, 3, 4];
const _stringsArr: string[] = ['hello', 'world'];

const mappedNumbersArr: string[] = mapArray<number, string>(numbersArr); // mappedNumbersArr avrà i valori '1', '2', '3', '4' di tipo stringa
const mappedStringsArr: string[] = mapArray<string, string>(stringsArr); // mappedStringsArr avrà i valori 'HELLO', 'WORLD' in maiuscolo

/* Generic Constraint Extends */

// La sintassi <T extends _Person> specifica che il tipo generico T deve estendere _Person, 
// il che significa che T può essere sostituito solo con un tipo che sia o estenda _Person.
function filterYoungerThan<T extends _Person>(people: T[], age: number): T[] {
    return people.filter(person => person.age < age);
}

// Esempio di utilizzo della funzione filterYoungerThan()
interface _Person {
    name: string;
    age: number;
}
 
const people: _Person[] = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
];

const youngPeople = filterYoungerThan(people, 30); // restituirà solo Alice e Charlie

console.log(youngPeople);
// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 20 }]

/*
    Definiamo una funzione che accetta un array di elementi di tipo number o boolean e restituisce una 
    funzione che accetta un valore di tipo T (ovvero number o boolean) e restituisce un nuovo array 
    contenente tutti gli elementi di items che sono uguali al valore passato come parametro.
*/
function filterValues<T extends number | boolean>(items: T[]): (value: T) => T[] {
    return (value: T) => items.filter((item) => item === value);
}

// Esempio di utilizzo delal funzione
const myArray = [1, 2, true, false, 3, true];
const filterForTrue = filterValues(myArray);
const trueValues = filterForTrue(true);
console.log(trueValues); // Output: [true, true]

/* 
    Nota

    In TypeScript, il tipo {} rappresenta un oggetto vuoto senza alcuna proprietà specificata.

    Tuttavia, è stata scelta una convenzione di utilizzo diversa per questo tipo nel contesto delle Generics.

    Nel contesto delle Generics, il tipo {} può essere utilizzato come un tipo "object" generico, 
    il che significa che può rappresentare qualsiasi tipo di oggetto, con qualsiasi tipo di proprietà, 
    inclusi gli oggetti che implementano interfacce.
*/

/**
 * Cerca e restituisce il primo elemento di tipo T che ha il valore della proprietà specificata uguale a quello dato.
 * @param items L'array di oggetti di tipo T da cercare.
 * @param propValue Il valore della proprietà da cercare.
 * @param propName Il nome della proprietà da cercare.
 * @returns L'oggetto di tipo T trovato o undefined se non trovato.
*/
// function findItemByProp<T extends {}, U>(items: T[], propValue: U, propName: keyof T): T | undefined {
//     return items.find((item) => item[propName] === propValue);
// }

// Esempio di utilizzo della funzione findItemByProp()
interface User {
    id: number;
    name: string;
    age: number;
}
  
const users: User[] = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 40 },
];
  
// const userById = findItemByProp(users, 2, 'id');
// const userByName = findItemByProp(users, 'Bob', 'name');
  

/* Generic class */



// Definizione di una classe generica che accetta solo elementi numerici
class NumericArray<T extends number> {
    private items: T[];

    constructor(items: T[]) {
        this.items = items;
    }

    // Metodo che somma tutti gli elementi dell'array e restituisce il risultato
    public sum(): number {
    let total = 0;
    for (const item of this.items) {
        total += item;
    }
        return total;
    }
}

  
// Utilizzo della classe NumericArray con elementi numerici
const numericArray = new NumericArray([1, 2, 3, 4, 5]);
console.log(numericArray.sum()); // Output: 15

// Utilizzo della classe NumericArray con elementi decimali 
const decimalArray = new NumericArray([1, 2, 3.14, 4, 5]);

// Utilizzo della classe NumericArray con elementi non numerici 
// const nonNumericArray = new NumericArray([1, 2, 'three', 4, 5]); // Genera un errore di compilazione


// T extends U ? X : Y

/**
 * DECORATORS
 * 
 * - Cosa sono i Decorators
 * - Class Decorator
 * - Decorator Factory 
 * - Method Decorator
 * - Property Decorator
 * - Esempio di utilizzo di Decorators con template
*/

/**
 * I Decorator sono funzioni speciali che "decorano" un elemento del linguaggio, annotandolo con informazioni extra.
 * 
 * In TypeScript, un decoratore è una sorta di dichiarazione che può essere allegata a dichiarazioni di classe, 
 * metodi, accessor (getter e setter), proprietà o parametri di metodo. Un decoratore usa la forma @expression, 
 * dove expression deve essere una funzione che verrà chiamata a runtime con informazioni sulla dichiarazione decorata.
 * 
 * Un Decorator può, ad esempio, aggiungere una proprietà a una classe, modificare il comportamento di un metodo, 
 * o aggiungere un'etichetta a un parametro. 
 * 
 * Per i decoratori di classe, il target del decoratore è il costruttore della classe. 
 * Per i decoratori di metodo o accessor, i target sono il prototipo della classe, il nome del membro e il descrittore di proprietà. 
 * Per i decoratori di proprietà, i target sono il prototipo della classe e il nome del membro. 
 * Infine, per i decoratori di parametri, i target sono il prototipo della classe, il nome del membro e l'indice del parametro.
 * 
 * Un Decorator in TypeScript è quindi una funzione speciale che può essere allegata a certi tipi di dichiarazioni e che può 
 * modificare il comportamento o le proprietà di tali dichiarazioni. 
 * 
 * Nota: Un decoratore è destinato a estendere o modificare il comportamento di un'entità, come una classe, 
 * un metodo, una proprietà o un parametro, senza alterarne la struttura fondamentale o la firma originale. 
 * Se un decoratore altera radicalmente l'entità che sta decorando (ad esempio, cambiando il tipo di ritorno di un metodo, 
 * i suoi parametri, ecc.), il codice che si basa su quella struttura originale potrebbe smettere di funzionare correttamente.
*/

/**
 * Class Decorator
 *
 * Questo è un esempio di decoratore di classe.
 * Il parametro `target` è un riferimento al costruttore della classe su cui il decoratore è applicato.
 * In altre parole, `target` rappresenta direttamente la classe che viene decorata.
 * 
 * Nota: In JavaScript, una classe è essenzialmente una funzione speciale. 
 * Quando definiamo 'class MyClass {}', in realtà stiamo creando una funzione costruttrice 'MyClass'. 
 * Quando applichiamo un decoratore a una classe, il costruttore della classe viene passato come argomento alla funzione del decoratore. 
 * In altre parole, la classe stessa funge da funzione costruttrice.
*/
function MyDecorator(target: any) { 

    // Stampa un messaggio di log per confermare l'applicazione del decoratore alla classe
    console.log(`Decoratore applicato alla classe ${target.name}`);
    
    // Visualizza l'oggetto target (la classe) nel console log
    console.log(target);

    // Assegnando una proprietà direttamente su `target`, si crea una proprietà statica sulla classe stessa, non sull'istanza della classe.
    // Attenzione: questa pratica non è consigliata poiché la proprietà verrebbe condivisa da tutte le istanze della classe.
    target.isStatic = true;

    // Consigliato: utilizzare `target.prototype` per definire proprietà di istanza nel decoratore.
    // `target.prototype` rappresenta l'oggetto prototipo utilizzato per creare tutte le istanze della classe.
    // Definendo una proprietà su `target.prototype`, si definisce una proprietà di istanza.
    target.prototype.property1 = 'new value';
    target.prototype.property2 =  100;
    target.prototype.property3 =  false;
    target.prototype.property4 =  [1, '2', 3];
    
    // Definizione di un metodo attraverso il decoratore
    target.prototype.getDescription = function() {
        return `Questo è un oggetto di tipo ${target.name}`;
    };
}

// Applichiamo il decoratore MyDecorator alla classe MyClass
@MyDecorator
class MyClass {

    /*
        Quando si utilizzano i decoratori, TypeScript non può inferire automaticamente l'aggiunta di nuove proprietà dal decoratore. 
        Per garantire la tipizzazione corretta e prevenire errori, è necessario indicare al compilatore l'esistenza di queste nuove proprietà.
    */

    // Qui ci sono vari modi per definire queste proprietà:

    [x: string]: any; // Aggiungere una firma dell'indice per permettere proprietà con nomi di stringa 
    property1?: string;  // Il punto di domanda indica che la proprietà è opzionale.
    property2!: number;  // Il punto esclamativo indica che la proprietà verrà definitivamente inizializzata in futuro.
    property3: boolean | undefined;  // L'aggiunta di `undefined` indica che la proprietà potrebbe non essere inizializzata.
    property4: any;  // Con `any`, il compilatore non esegue il controllo del tipo e permette qualsiasi valore.
    getDescription(): any { // Implementare un metodo vuoto che verrà sovrascritto dal decoratore.
        throw new Error("Method not implemented.");
    }
}

// Creiamo un'istanza della classe MyClass
const myTestInstance = new MyClass();

// Stampiamo i valori delle proprietà e dei metodi aggiunti dal decoratore
console.log(myTestInstance.property1); // Output: 'new value'
console.log(myTestInstance.property2); // Output: 100
console.log(myTestInstance.property3); // Output: false
console.log(myTestInstance.property4); // Output: [1, '2', 3]
console.log(myTestInstance.getDescription()); // Output: 'Questo è un oggetto di tipo MyClass'

/* Decorator Factory */

// Una "Decorator Factory" è una funzione che ritorna un decoratore.
// In questo esempio, la factory accetta un parametro 'message' e ritorna un decoratore di classe.
function createMyDecorator(message: string) {
    // Il decoratore restituito dalla factory prende come parametro il target, che è la classe su cui viene applicato.
    return function myDecorator(target: any) {
        // Quando il decoratore viene applicato, stampa il messaggio fornito e il costruttore della classe target.
        console.log(message);
        console.log(target); 
    };
}
  
// Applichiamo i decoratori creati dalla factory function alle classi MyTestClass e MyOtherTestClass.
@createMyDecorator('Applicazione di un decoratore personalizzato a MyTestClass')
class MyTestClass {}

@createMyDecorator('Applicazione di un decoratore personalizzato a MyOtherTestClass')
class MyOtherTestClass {}

// La funzione 'Component' è un'altra "Decorator Factory". Accetta come argomento un oggetto con una proprietà 'staticProperty' di tipo stringa.
function Component(options: {staticProperty: string}) {
    // La factory restituisce un decoratore di classe che assegna la proprietà statica 'staticProperty' della classe target al valore specificato.
    // Il tipo di target è un'intersezione tra Function e typeof ExampleClass, 
    // il che significa che target deve essere una funzione e avere le stesse proprietà statiche della classe ExampleClass 
    return function (target: Function & typeof ExampleClass) {
        target.staticProperty = options.staticProperty
    }
}

// Applichiamo il decoratore 'Component' alla classe 'ExampleClass', specificando il valore della proprietà statica 'staticProperty'.
@Component({
    staticProperty: 'New Value'
})
class ExampleClass {
    static staticProperty: string;
}

console.log(ExampleClass.staticProperty) // Output: 'New Value'


/* Method Decorator */

// Definiamo un decoratore di metodi chiamato 'MethodTest'. 
// Un decoratore di metodi viene chiamato con tre argomenti: 
// 1. Il prototype dell'oggetto istanza.
// 2. Il nome della proprietà del metodo.
// 3. Un oggetto 'PropertyDescriptor' per la proprietà del metodo.
function MethodTest(
    target: Object,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor
) {
    // All'interno del decoratore, stampiamo il prototype dell'oggetto e il nome della proprietà del metodo.
    console.log(target);
    console.log(propertyKey);

    // Poi, sovrascriviamo il valore della proprietà del metodo con una nuova funzione.
    // Questa funzione prende un numero arbitrario di argomenti e restituisce una stringa.
    propertyDescriptor.value = function (...args: any[]) {
        return `Kon'nichiwa ${args}`;
    }
}

// Definiamo una classe semplice chiamata 'SimpleClass'.
class SimpleClass {

    orginalPrint(text: string='Tsumugi'): string {
        return text;
    }

    // Applichiamo il decoratore 'MethodTest' al metodo 'print' della classe.
    @MethodTest
    decoratedPrint(text: string='Kokorozakura'): string {
        return text;
    }
}

// Creiamo una nuova istanza di 'SimpleClass' 
const simpleClassInstance = new SimpleClass();

// Il decoratore non ha modificato il comportamento del metodo.
console.log(simpleClassInstance.orginalPrint()); // Output: 'Tsumugi'

// Il decoratore ha modificato il comportamento del metodo.
console.log(new SimpleClass().decoratedPrint()); // Output: 'Kon'nichiwa Kokorozakura'

/* Property Decorator */

/*
    Questa è la definizione di un decoratore di proprietà. 
    L'uso di un decoratore di proprietà permette di intercettare e personalizzare le operazioni di lettura e scrittura di una proprietà.
    
    Il decoratore utilizza dei tipi generici per definire i tipi di input. 
    Il parametro target è un oggetto di qualsiasi tipo, 
    in cui le chiavi sono un sottoinsieme di keyof T (ovvero una o più chiavi qualsiasi nell'oggetto T), 
    e i valori possono essere di qualsiasi tipo (any).
*/
function logProperty<T extends { [K in keyof T]: any }>(target: T, key: keyof T) {

    // Salviamo il valore originale della proprietà.
    let value = target[key];

    // Definiamo una funzione getter personalizzata.
    // Questa funzione viene chiamata ogni volta che si accede alla proprietà.
    const getter = () => {
        console.log(`Getting ${String(key)} value: ${value}`); /* 
            In JavaScript, le proprietà di un oggetto possono essere rappresentate come stringhe o simboli (Symbol), 
            dove i simboli sono valori unici e immutabili utilizzati come identificatori di proprietà. 
            La sintassi String(key) serve per evitare che venga emesso errore dal compilatore TypeScript quando si tenta 
            di concatenare un simbolo con una stringa senza prima convertire esplicitamente il simbolo in una stringa. 
        */
        return value;
    };

    // Definiamo una funzione setter personalizzata.
    // Questa funzione viene chiamata ogni volta che si assegna un valore alla proprietà.
    const setter = (newValue: any) => {
        console.log(`Setting ${String(key)} value: ${newValue}`);
        value = newValue;
    };

    // Usiamo `Object.defineProperty` per sostituire la proprietà originale con la nostra proprietà personalizzata.
    // Le proprietà getter e setter vengono definite qui.
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        // enumerable: true,
        // configurable: true,
    });

}

// Questa è la definizione di una classe che utilizza il nostro decoratore di proprietà.
class MyNewClass {
    // Il decoratore @logProperty è applicato alla proprietà myProperty.
    @logProperty
    public myProperty: string = "initialValue";

}
    
// Creiamo un'istanza della nostra classe e accediamo alla proprietà decorata.
let myNewInstance = new MyNewClass();
console.log(myNewInstance.myProperty); // Output: Getting myProperty value: "initialValue"
myNewInstance.myProperty = "new value"; // Output: Setting myProperty value: "new value"
console.log(myNewInstance.myProperty); // Output: Getting myProperty value: "new value"


// Funzione decoratore che estende la classe originale con ulteriori funzionalità di logging.
function addLogging(target: AwesomeConstructor): AwesomeConstructor {
    // Ritorna una nuova classe che estende la classe originale.
    return class extends target {
        // Sovrascrive il costruttore della classe originale.
        constructor(...args: any[]) {
            // Stampa un messaggio di logging prima della creazione dell'istanza.
            console.log(`Creating instance of ${target.name}`);
            // Chiama il costruttore della classe originale.
            super(...args);
            // Stampa un messaggio di logging dopo la creazione dell'istanza.
            console.log(`Instance has been successfully created with x = ${this['x']} and y = ${this['y']}`);
        } 
    };
}

// Questo tipo rappresenta il costruttore di una classe AwesomeClass.
type AwesomeConstructor = new (...args: any[]) => AwesomeClass;
  
// Applica il decoratore addLogging alla classe AwesomeClass.
@addLogging
class AwesomeClass {
    // Costruttore della classe AwesomeClass.
    constructor(public x: number, public y: number) {}
}
  
// Crea una nuova istanza della classe AwesomeClass, con logging aggiunto grazie al decoratore.
const myInstance = new AwesomeClass(10, 20);


/* 
    Definizione di una funzione che accetta un parametro target di un tipo generico T. 
    Il vincolo "T extends Constructor<BasicClass>" si può interpretare in questo modo:
    Constructor<BasicClass> è un tipo specifico che rappresenta una funzione costruttore per una classe di tipo BasicClass o una sua sottoclasse. 
    Il costruttore accetta un numero arbitrario di argomenti e restituisce un'istanza di BasicClass (o una sua sottoclasse).
    Quindi, quando diciamo T extends Constructor<BasicClass>, stiamo dicendo che T può essere qualsiasi tipo che soddisfi il contratto di Constructor<BasicClass>. 
    In altre parole, T deve essere una funzione costruttore che, quando chiamata con new, restituisce un'istanza di BasicClass o di una classe che estende BasicClass. 
*/
function ExtendClass<T extends Constructor<BasicClass>>(target: T): T & Constructor<ComplexClass> {

    /*
        Qui, l'uso di "implements ComplexClass" nella definizione della classe interna è tecnicamente non necessario.
        Questo perché il tipo della classe restituita è determinato dal tipo assegnato alla funzione (T & Constructor<ComplexClass>),
        piuttosto che da ciò che la classe stessa implementa. 

        Di conseguenza, anche se non utilizzassimo "implements", TypeScript tratterebbe ancora la classe restituita 
        come se implementasse l'interfaccia ComplexClass, poiché questo è specificato nel tipo di ritorno della funzione.

        In questo contesto, l'utilizzo di "implements" puo tuttavia servire a scopo didattico per evidenziare che 
        la classe estende effettivamente tutti i membri dell'interfaccia ComplexClass e aderisce alla sua struttura.
    */
    return class ExtendedClass extends target implements ComplexClass {
        myNewProperty: string = "This is a new property";
        myNewMethod() {
            console.log("This is a new method");
        }
        printOriginalProperty() {
            // Accede alla proprietà myProperty dell'istanza (this), non della classe
            console.log(this.myProperty);
        } 
        getOriginalMethod() {
            return this.myMethod
        }
    }  
}

// Questa interfaccia descrive una funzione costruttore generica per una classe.
// In altre parole, è un tipo che può essere utilizzato per descrivere una funzione che può essere utilizzata per creare nuove istanze di una classe.
// La funzione costruttore accetta qualsiasi numero di argomenti (...args: any[]) e restituisce un'istanza di un certo tipo T.
interface Constructor<T> {
    new (...args: any[]): T;
}

// Questa interfaccia definisce la struttura di una classe più complessa.
// La classe, in conformità con questa interfaccia, dovrebbe avere i seguenti membri:
// 1. 'myNewProperty': una proprietà di tipo stringa.
// 2. 'myNewMethod()': un metodo senza argomenti che non restituisce alcun valore (void).
// 3. 'printOriginalProperty()': un altro metodo senza argomenti che non restituisce alcun valore. 
// 4. 'getOriginalMethod()': un metodo che restituisce un'altra funzione. 
interface ComplexClass {
    myNewProperty: string;
    myNewMethod(): void;
    printOriginalProperty(): void;
    getOriginalMethod(): () => void;
}

// @ExtendClass è un decoratore che estende la classe BasicClass
@ExtendClass
class BasicClass {
    // Definisce proprietà e metodi originali per la classe
    myProperty: string = "This is the original property";
    myMethod() {
        console.log("This is the original method");
    }
}

let _basicInstance = new BasicClass(); /* 
// _basicInstance.myNewProperty // Errore: Property 'myNewProperty' does not exist on type 'BasicClass'.
// _basicInstance.myNewMethod() // Errore: Property 'myNewMethod' does not exist on type 'BasicClass'. 
// _basicInstance.printOriginalProperty(); // Errore: Property 'printOriginalProperty' does not exist on type 'BasicClass'. 
 
    Il problema qui è dovuto al fatto che, come al solito, TypeScript non sa che il decoratore @ExtendClass sta effettivamente 
    aggiungendo delle proprietà e dei metodi aggiuntivi. Questo è un limite dell'attuale sistema di tipi di TypeScript: 
    i decoratori non possono alterare i tipi delle classi che decorano in modo che TypeScript lo riconosca. 

    Di fronte alla sfida della gestione della tipizzazione in contesti di decoratori, oltre alle tecniche già viste in precedenza 
    (come l'utilizzo di notazioni con il punto esclamativo, il punto di domanda, l'aggiunta di 'undefined' o di una firma dell'indice),
    un altro approccio efficace è l'impiego di un'asserzione di tipo. 
    Questa strategia ci permette di affermare esplicitamente a TypeScript che 'basicInstance' è effettivamente un'istanza della classe estesa. 
    È un modo per convincere TypeScript che il tipo di ritorno è quello specificato, nonostante il compilatore possa non essere in grado di verificarlo autonomamente.
*/
let basicInstance = new BasicClass() as BasicClass & ComplexClass;
basicInstance.printOriginalProperty(); // Output: "This is the original property"
basicInstance.getOriginalMethod(); // Output: "This is the original method"
basicInstance.myNewProperty; // Output: "This is a new property"
basicInstance.myNewMethod(); // Output: "This is a new method"


// Questa è una funzione di factory che restituisce un decoratore. Prende due argomenti: il nome della proprietà da aggiungere e il suo valore.
function addNewProp(propertyName: string, value: string) {
    // Questa è la funzione del decoratore. Prende come argomento la classe originale da decorare.
    return function <T extends { new (...args: any[]): MyClassWithConstructor }>(OriginalClass: T) {
        // Questa è la classe decorata che viene restituita. Estende la classe originale.
        return class extends OriginalClass {
            constructor(...args: any[]) {
                // Chiama il costruttore della classe originale.
                super(...args);
                // Utilizza Object.defineProperty per aggiungere la nuova proprietà all'istanza della classe.
                Object.defineProperty(this, propertyName, {
                    value: value,
                    writable: true,  // Questo permette alla proprietà di essere sovrascritta
                    configurable: true  // Questo permette alla proprietà di essere cancellata o cambiata
                });
                // Aggiunge un '!' alla fine del valore utilizzando l'assegnazione diretta.
                this[propertyName] = value + '!';
            }
        };
    };
}

// Queste sono le variabili che vengono passate al decoratore.
let propertyName = 'message'
let propertyValue = "Hello World"

// Applica il decoratore addNewProp alla classe MyClassWithConstructor.
@addNewProp(propertyName, propertyValue)
class MyClassWithConstructor {
    /*
        In TypeScript, le proprietà calcolate in una dichiarazione di classe devono avere un tipo letterale semplice o un tipo 'unique symbol'.
        Un tipo letterale rappresenta valori esatti. Ad esempio, il tipo 'message' è un tipo letterale che rappresenta esclusivamente la stringa 'message'.
        Un 'unique symbol' è un tipo speciale di simbolo che è unico e non può essere assegnato ad un altro simbolo.
        Questo significa che il nome della proprietà deve essere conosciuto al momento della compilazione.
        Poiché propertyName è una variabile, il suo valore non è noto fino al momento dell'esecuzione (runtime), 
        quindi non può essere utilizzato come un nome di proprietà calcolato in una dichiarazione di classe.
    */
    // [propertyName]: string // Questo causerà un errore perché propertyName non è un tipo letterale o 'unique symbol'.

    // Questa è una firma dell'indice che indica che questa classe può avere un numero qualsiasi di proprietà con chiavi basate su stringhe e valori di tipo stringa.
    [key: string]: string; 

    constructor() {}
}

// Questo crea una nuova istanza della classe decorata e stampa il valore della nuova proprietà.
const newInstancae = new MyClassWithConstructor();
console.log(newInstancae['message']); // Output: "Hello, world!"


/**
 * Questa funzione restituisce una funzione che aggiunge a un contenitore HTML specificato 
 * un elemento creato da un costruttore specificato (ad esempio, un oggetto creato da una classe).
 * @param htmlElemTag - La stringa che rappresenta il tag dell'elemento HTML che contiene il nuovo elemento creato.
 * @param containerId - L'ID dell'elemento HTML che rappresenta il contenitore in cui verrà aggiunto il nuovo elemento creato.
 * @param textContent - La stringa di testo che verrà utilizzata come valore per la proprietà textContent del nuovo elemento creato. 
 * @returns Una funzione che prende come parametro il costruttore del nuovo elemento da creare e aggiungerà l'elemento al contenitore HTML.
*/
function createAddElementToContainerFunction(htmlElemTag: string, containerId: string, textContent: string) {

    // La factory restituisce una nuova funzione che accetta il costruttore del nuovo elemento
    return function addElementToContainer(constructor: ElementConstructor) {
        // Recupera il contenitore HTML dal suo ID
        const container = document.getElementById(containerId);
        if (!container) {
        // Se il contenitore non viene trovato, lancia un'eccezione
            throw new Error(`Container element with id '${containerId}' not found.`);
        }
        // Crea un nuovo elemento usando il costruttore passato come parametro
        const element = new constructor(textContent);
        // Aggiungi l'elemento creato al contenitore HTML
        container.innerHTML = `<${htmlElemTag}></${htmlElemTag}>`;
        // Seleziona l'elemento creato all'interno del contenitore HTML e imposta il suo contenuto testuale
        container.querySelector(`${htmlElemTag}`)!.textContent = element.textContent;
    }
}

// Questo tipo rappresenta il costruttore di un elemento che ha una proprietà textContent.
type ElementConstructor = new (textContent: string) => { textContent: string };
  
// Definisci i parametri per la factory
const htmlElement = 'h1';
const containerId = 'container';
const textContent = 'This is a sample element class...';

// Crea un nuovo elemento utilizzando la factory e il decoratore
@createAddElementToContainerFunction(htmlElement , containerId, textContent)
class SampleElement {

    constructor(public textContent: string) {}
}


/* Import file */
 
/*
    Questo è il file principale della nostra applicazione.
    Qui, importiamo e utilizziamo le funzioni definite in altri file, come functions.ts.
*/

import { multiplication, division } from './functions.js';

// Utilizzo delle funzioni importate
let resultMul = multiplication(5, 3);
let resultDiv = division(10, 7);

console.log(`Result of multiplication: ${resultMul}`);
console.log(`Result of division: ${resultDiv}`); 