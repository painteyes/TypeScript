/*
    Differenza tra tipi di dato dinamici e statici
    
    In TypeScript il tipo delle variabili è statico, a differenza di JavaScript in cui il tipo di dato è dinamico.
    Questo significa che in TypeScript il tipo di una variabile viene definito in fase di dichiarazione e
    non può essere cambiato successivamente.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
/*
    Dichiarazione di un oggetto "person2" di tipo generico "object",
    il che significa che può contenere qualsiasi tipo di oggetto non primitivo,
    inclusi gli array, gli oggetti letterali e gli oggetti istanziati dalle classi.
    Tuttavia, in questo caso, non è specificato il tipo di proprietà che l'oggetto dovrebbe avere,
    quindi non è possibile accedere alle proprietà dell'oggetto senza specificare il tipo corretto delle proprietà.
*/
let person2 = {
    name: "Luca",
    surname: "Rossi"
};
/*
    Dichiarazione di un oggetto "person3" di tipo "{}", che in TypeScript rappresenta l'oggetto vuoto.
    Questo significa che l'oggetto può contenere qualsiasi tipo di proprietà,
    ma non è specificato il tipo di alcuna proprietà dell'oggetto.
    Pertanto, non è possibile accedere alle proprietà dell'oggetto senza specificare il tipo corretto delle proprietà.
    In pratica, person3 non è molto utile perché non specifica il tipo delle proprietà dell'oggetto.
*/
let person3 = {
    name: "Giovanni",
    surname: "Rossi"
};
/*
    Il tipo di oggetto vuoto "object" o "{}" indica un oggetto senza proprietà definite.
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
/*
    Dichiara una variabile _person di tipo oggetto con due proprietà: name e surname, entrambe di tipo stringa.
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
/*
    Questo darebbe errore perché i valori di day e weekDays.Saturday/Sunday appartengono a tipi differenti:
    day è un valore di tipo weekDays mentre weekDays.Saturday/Sunday sono stringhe.

if (day === weekDays.Saturday || day === weekDays.Sunday ) { */
if (day === weekDays.Saturday || day === weekDays.Sunday) { /* Per risolvere il problema,
possiamo specificare il tipo di enumerazione in entrambi i confronti. Possiamo fare ciò usando l'operatore "as"
per forzare TypeScript a considerare day e weekDays.Saturday/Sunday come valori di tipo weekDays */
    console.log("È il weekend! Mangiamo la pizza con " + PizzaToppings.Pepperoni + " e " + PizzaToppings.Pineapple);
}
else {
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
/*
    Definizione di una funzione che prende due numeri come argomenti e restituisce la loro somma
    Nel caso in cui il secondo argomento non sia passato, la funzione assegna di default il valore 0 al parametro "num2".
    Grazie all'inference di TypeScript, il tipo dell'argomento "num2" viene dedotto automaticamente come number.
    Il tipo di ritorno della funzione è anch'esso number e viene dedotto dall'inference in base all'operazione di somma effettuata.
*/
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
/*
    In questo esempio si assegna una funzione con tipo generico "Function" ad una variabile "addNumbersFunc"
    Questo può causare problemi in quanto si potrebbe ri-assegnare "addNumbersFunc" ad una funzione che accetta argomenti di tipi diversi o restituisce tipi diversi
    In questo caso si assegna la funzione "print" a "addNumbersFunc", ma questa funzione accetta una stringa come argomento, e quindi non è compatibile con "addNumbers"
*/
let _addNumbersFunc = _addNumbers;
function _print(string) { console.log(string); }
_addNumbersFunc = _print;
// Per risolvere il problema del tipo generico "Function", si può specificare il tipo della funzione "addNumbersFunc"
let addNumbersFunc = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbersFunc(2, 3)); // Output: 5
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
    constructor() {
        this.name = 'Gigi';
        this.surname = '';
    }
}
// Definizione della classe PersonClass con costruttore per inizializzare le proprietà "name" e "surname"
class PersonClass {
    // Costruttore standard
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    // Metodo che stampa una presentazione della persona corrente
    introduce() {
        console.log(`My name's ${this.name}`);
    }
    // Metodo greet che saluta una persona specifica
    greet(person) {
        console.log(`Hello ${person.name}, nice to meet you`);
    }
}
// Creazione di un'istanza di PersonClass e inizializzazione delle proprietà name e surname
const personOne = new PersonClass("Mario", "Rossi", 43);
const personTwo = new PersonClass("Lucia", "Verdi", 29);
// console.log(personOne.name); // Errore: la proprietà name è privata e non può essere accessibile da fuori la classe
console.log(personOne.surname); // Output: "Rossi"
personOne.introduce(); // Output: "My name's Mario"
personTwo.greet(personOne); // Output: "Hello Mario, nice to meet you"
// La proprietà "name" è privata (private) e pertanto non può essere modificata direttamente dall'esterno della classe PersonClass.
// personOne.name = 'Richard'; // Errore: l'accesso alla proprietà name non è consentito al di fuori della classe PersonClass.
// La proprietà "surname" è pubblica (public) e pertanto può essere modificata direttamente dall'esterno della classe PersonClass.
personOne.surname = 'Benson'; // L'accesso alla proprietà surname è consentito al di fuori della classe PersonClass.
/* Shortend constructor */
// Definizione della classe GameClass
class GameClass {
    // Costruttore abbreviato che inizializza automaticamente le proprietà private id, usernameOne e usernameTwo.
    // Il modificatore di accesso "private readonly" definisce le proprietà come di sola lettura, non modificabili dopo la creazione.
    constructor(id, userOne, userTwo) {
        this.id = id;
        this.userOne = userOne;
        this.userTwo = userTwo;
    }
}
// Istanziazione della classe GameClass con i due oggetti PersonClass creati
const _game = new GameClass(100, personOne, personTwo);
/* Inheritance (ereditarietà) */
// Definizione della classe base `_PersonClass` che rappresenta una persona generica
class _PersonClass {
    // Il costruttore accetta il nome e il cognome della persona come argomenti
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
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
    constructor(name, surname, favoriteSubject, votes) {
        super(name, surname); // Chiama il costruttore della classe genitore per inizializzare il nome e il cognome.
        this.favoriteSubject = favoriteSubject;
        this.votes = votes;
    }
    // Metodo per cambiare il nome dello studente.
    changeName(name) {
        // La proprietà `name` è privata (private) e quindi modificabile solo all'interno della classe `_PersonClass`. 
        // this.name = 'Giacomo'; // Errore: non è possibile modificare la proprietà `name`. 
    }
    // Metodo per cambiare il cognome dello studente.
    changeSurname(surname) {
        // La proprietà `surname` è protetta (protected) e quindi modificabile sia all'interno della classe `_PersonClass` che nelle sue sottoclassi.
        this.surname = 'Poretti';
    }
}
// Creazione di un'istanza della classe `Student` con il nome "Aldo", il cognome "Baglio" e la materia preferita "Storia"
const _student = new Student('Aldo', 'Baglio', 'Storia');
// La proprietà "surname" è protetta (protected) e pertanto non può essere modificata direttamente al di fuori della sua classe o delle sue sottoclassi.
// _student.surname = 'Poretti'; // Errore: l'accesso alla proprietà surname è consentito solo all'interno della classe Student e delle sue sottoclassi.
/* Static */
// La classe Employee estende la classe Person e aggiunge una proprietà statica "company" e un metodo statico "createEmployee".
class Employee extends _PersonClass {
    static createEmployee(name, surname) {
        // Il metodo "createEmployee" restituisce una nuova istanza della classe Employee.
        return new Employee(name, surname);
    }
}
// La proprietà "company" è statica e contiene il nome dell'azienda.
Employee.company = "OpenAI";
Employee.createEmployee('Giovanni', 'Storti'); // Restituisce una nuova istanza della classe Employee.
Employee.company; // Output: "OpenAi"
/* Abstract */
/*
    Definiamo una classe astratta chiamata "Animal"che rappresenta un animale generico.
    Poiché "Animal" è una classe astratta, essa non può essere istanziata direttamente.
    È stata pensata, invece, per essere estesa da altre classi che ereditano le proprietà
    e i metodi di "Animal" e possono definire le proprie proprietà e metodi.
*/
class Animal {
    // Definiamo un costruttore che accetta un nome per l'animale
    constructor(name) {
        this.name = name;
    }
    // Definiamo un metodo che stampa il nome dell'animale seguito dal suo suono
    makeSound() {
        console.log(`${this.name} fa ${this.sound()}`);
    }
}
// Definiamo una classe che estende la classe astratta "Animal"
class Cane extends Animal {
    // Implementiamo il metodo astratto "sound" specifico per i cani
    sound() {
        return "Bau";
    }
}
// Creiamo una nuova istanza della classe "Cane" e chiamiamo il metodo "makeSound"
const fido = new Cane("Fido");
fido.makeSound(); // Output: "Fido fa Bau"
/* Singleton */
// Definiamo una classe singleton per gestire la connessione al database
class DatabaseConnection {
    // Il costruttore è privato, quindi la classe può essere istanziata solo internamente.
    constructor() {
        this.connected = false;
    }
    // Questo metodo statico restituisce l'unica istanza della classe DatabaseConnection.
    static getInstance() {
        // Se non esiste ancora un'istanza, viene creata.
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        // Viene restituita l'istanza esistente.
        return DatabaseConnection.instance;
    }
    connect() {
        // Effettua la connessione al database, se non già connesso
        if (!this.connected) {
            console.log("Connessione al database effettuata");
            this.connected = true;
        }
        else {
            console.log("Connessione già attiva");
        }
    }
    disconnect() {
        // Effettua la disconnessione dal database, se connesso
        if (this.connected) {
            console.log("Disconnessione dal database effettuata");
            this.connected = false;
        }
        else {
            console.log("Nessuna connessione attiva");
        }
    }
}
// Richiama il metodo statico getInstance() della classe DatabaseConnection per ottenere l'unica istanza della classe e connetterci al database
DatabaseConnection.getInstance().connect();
// Definiamo un'enumerazione PowerStatus per rappresentare lo stato di accensione/spegnimento del dispositivo
var PowerStatus;
(function (PowerStatus) {
    PowerStatus[PowerStatus["ON"] = 0] = "ON";
    PowerStatus[PowerStatus["OFF"] = 1] = "OFF";
})(PowerStatus || (PowerStatus = {}));
// Implementiamo le due interfacce in una classe astratta che definisce un dispositivo con funzionalità di connessione a internet.
class Device {
    // Definiamo il costruttore della classe con due parametri: "model" e "year".
    constructor(model, year) {
        this.model = model;
        this.year = year;
        // La proprietà privata _isConnected viene utilizzata per tenere traccia dello stato di connessione del dispositivo.
        this._isConnected = false;
        // La proprietà protetta powerStatus viene utilizzata per tenere traccia dello stato di alimentazione del dispositivo.
        this.powerStatus = PowerStatus.OFF;
    }
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
    get isConnected() {
        return this._isConnected;
    }
    // Metodo privato per impostare la proprietà privata _isConnected
    set isConnected(value) {
        this._isConnected = value;
    }
    // Metodo pubblico per connettere il dispositivo ad internet
    connect() {
        console.log("Connecting to the internet...");
        this.isConnected = true; // Imposta la proprietà privata _isConnected a true, usando il metodo set
        console.log("Connected to the internet");
    }
    // Metodo pubblico per disconnettere il dispositivo da internet
    disconnect() {
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
    togglePower() {
        this.powerStatus = this.powerStatus === PowerStatus.ON ? PowerStatus.OFF : PowerStatus.ON;
    }
    // Il metodo isPoweredOn restituisce un valore booleano che indica se il dispositivo è attualmente acceso o spento.
    isPoweredOn() {
        return this.powerStatus === PowerStatus.ON;
    }
    /*
        I metodi turnOn() e turnOff() rappresentano il comportamento di accensione e spegnimento del dispositivo,
        che è specifico per ogni implementazione di Device.
        L'argomento deviceType viene utilizzato per garantire che ogni classe derivata di Device fornisca un'implementazione specifica dei metodi,
        in linea con le specifiche del dispositivo, per garantire un comportamento coerente di accensione e spegnimento.
    */
    // Implementa il metodo turnOn definito nell'interfaccia PowerControl
    turnOn(deviceType) {
        if (!this.isPoweredOn()) {
            this.togglePower();
        }
    }
    // Implementa il metodo turnOff definito nell'interfaccia PowerControl
    turnOff(deviceType) {
        if (this.isPoweredOn()) {
            this.togglePower();
        }
    }
}
// Classe per uno smartphone, estende la classe Device
class Smartphone extends Device {
    constructor() {
        super(...arguments);
        this.deviceType = 'smartphone';
    }
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
    constructor() {
        super(...arguments);
        this.deviceType = 'computer';
    }
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
const stringsArr = ['q', 'w', 'e', 'r', 't', 'y'];
// Definizione di un array di numeri tipizzato utilizzando la sintassi delle Generics (built-in in TypeScript)
const numbersArr = [1, 2, 3, 4];
/* Esempio di utilizzo di Generics */
// Funzione che prende un array di elementi generici e ne restituisce una copia
function generateArr(items) {
    return new Array().concat(items);
}
// Esempio di utilizzo della funzione con gli array tipizzati sopra
const arr1 = generateArr(numbersArr);
const arr2 = generateArr(stringsArr);
// Problema: si può aggiungere un elemento di qualsiasi tipo all'array
arr1.push('qwerty');
// Soluzione: utilizzo di generics per definire il tipo degli elementi dell'array
function _generateArr(items) {
    return new Array().concat(items);
}
// Esempio di utilizzo della nuova funzione
const _arr1 = _generateArr(numbersArr); // il tipo T viene inferito automaticamente
const _arr2 = _generateArr(stringsArr); // il tipo T viene espresso esplicitamente come string
// Funzione che converte un elemento di tipo T in un nuovo elemento di tipo U
function mapItem(item) {
    if (typeof item === "number") {
        // Se l'elemento è di tipo numerico, lo converte in stringa
        return item.toString(); // il casting a unknown è necessario per evitare un errore di compilazione
    }
    else if (typeof item === "string") {
        // Se l'elemento è di tipo stringa, lo converte in maiuscolo
        return item.toUpperCase(); // il casting a unknown è necessario per evitare un errore di compilazione
    }
    else {
        // In caso contrario, restituisce l'elemento originale di tipo U
        return item; // il casting a unknown è necessario per evitare un errore di compilazione
    }
}
// Esempio di invocazione di mapItem():
const numberValue = 5;
const stringValue = 'hello';
const mappedNumberValue = mapItem(numberValue); // mappedNumberValue avrà il valore '5' di tipo stringa
const mappedStringValue = mapItem(stringValue); // mappedStringValue avrà il valore 'HELLO' in maiuscolo
// Funzione che mappa ogni elemento di un array in un nuovo array di tipo U
function mapArray(items) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const mappedItem = mapItem(item); // la funzione mapItem converte ogni elemento nell'array nel tipo U
        result.push(mappedItem);
    }
    return result;
}
// Esempio di invocazione di mapArray():
const _numbersArr = [1, 2, 3, 4];
const _stringsArr = ['hello', 'world'];
const mappedNumbersArr = mapArray(numbersArr); // mappedNumbersArr avrà i valori '1', '2', '3', '4' di tipo stringa
const mappedStringsArr = mapArray(stringsArr); // mappedStringsArr avrà i valori 'HELLO', 'WORLD' in maiuscolo
/* Generic Constraint Extends */
// La sintassi <T extends _Person> specifica che il tipo generico T deve estendere _Person, 
// il che significa che T può essere sostituito solo con un tipo che sia o estenda _Person.
function filterYoungerThan(people, age) {
    return people.filter(person => person.age < age);
}
const people = [
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
function filterValues(items) {
    return (value) => items.filter((item) => item === value);
}
// Esempio di utilizzo delal funzione
const myArray = [1, 2, true, false, 3, true];
const filterForTrue = filterValues(myArray);
const trueValues = filterForTrue(true);
console.log(trueValues); // Output: [true, true]
const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 40 },
];
// const userById = findItemByProp(users, 2, 'id');
// const userByName = findItemByProp(users, 'Bob', 'name');
/* Generic class */
// Definizione di una classe generica che accetta solo elementi numerici
class NumericArray {
    constructor(items) {
        this.items = items;
    }
    // Metodo che somma tutti gli elementi dell'array e restituisce il risultato
    sum() {
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
function MyDecorator(target) {
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
    target.prototype.property2 = 100;
    target.prototype.property3 = false;
    target.prototype.property4 = [1, '2', 3];
    // Definizione di un metodo attraverso il decoratore
    target.prototype.getDescription = function () {
        return `Questo è un oggetto di tipo ${target.name}`;
    };
}
// Applichiamo il decoratore MyDecorator alla classe MyClass
let MyClass = class MyClass {
    getDescription() {
        throw new Error("Method not implemented.");
    }
};
MyClass = __decorate([
    MyDecorator
], MyClass);
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
function createMyDecorator(message) {
    // Il decoratore restituito dalla factory prende come parametro il target, che è la classe su cui viene applicato.
    return function myDecorator(target) {
        // Quando il decoratore viene applicato, stampa il messaggio fornito e il costruttore della classe target.
        console.log(message);
        console.log(target);
    };
}
// Applichiamo i decoratori creati dalla factory function alle classi MyTestClass e MyOtherTestClass.
let MyTestClass = class MyTestClass {
};
MyTestClass = __decorate([
    createMyDecorator('Applicazione di un decoratore personalizzato a MyTestClass')
], MyTestClass);
let MyOtherTestClass = class MyOtherTestClass {
};
MyOtherTestClass = __decorate([
    createMyDecorator('Applicazione di un decoratore personalizzato a MyOtherTestClass')
], MyOtherTestClass);
// La funzione 'Component' è un'altra "Decorator Factory". Accetta come argomento un oggetto con una proprietà 'staticProperty' di tipo stringa.
function Component(options) {
    // La factory restituisce un decoratore di classe che assegna la proprietà statica 'staticProperty' della classe target al valore specificato.
    // Il tipo di target è un'intersezione tra Function e typeof ExampleClass, 
    // il che significa che target deve essere una funzione e avere le stesse proprietà statiche della classe ExampleClass 
    return function (target) {
        target.staticProperty = options.staticProperty;
    };
}
// Applichiamo il decoratore 'Component' alla classe 'ExampleClass', specificando il valore della proprietà statica 'staticProperty'.
let ExampleClass = class ExampleClass {
};
ExampleClass = __decorate([
    Component({
        staticProperty: 'New Value'
    })
], ExampleClass);
console.log(ExampleClass.staticProperty); // Output: 'New Value'
/* Method Decorator */
// Definiamo un decoratore di metodi chiamato 'MethodTest'. 
// Un decoratore di metodi viene chiamato con tre argomenti: 
// 1. Il prototype dell'oggetto istanza.
// 2. Il nome della proprietà del metodo.
// 3. Un oggetto 'PropertyDescriptor' per la proprietà del metodo.
function MethodTest(target, propertyKey, propertyDescriptor) {
    // All'interno del decoratore, stampiamo il prototype dell'oggetto e il nome della proprietà del metodo.
    console.log(target);
    console.log(propertyKey);
    // Poi, sovrascriviamo il valore della proprietà del metodo con una nuova funzione.
    // Questa funzione prende un numero arbitrario di argomenti e restituisce una stringa.
    propertyDescriptor.value = function (...args) {
        return `Kon'nichiwa ${args}`;
    };
}
// Definiamo una classe semplice chiamata 'SimpleClass'.
class SimpleClass {
    orginalPrint(text = 'Tsumugi') {
        return text;
    }
    // Applichiamo il decoratore 'MethodTest' al metodo 'print' della classe.
    decoratedPrint(text = 'Kokorozakura') {
        return text;
    }
}
__decorate([
    MethodTest
], SimpleClass.prototype, "decoratedPrint", null);
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
function logProperty(target, key) {
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
    const setter = (newValue) => {
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
    constructor() {
        // Il decoratore @logProperty è applicato alla proprietà myProperty.
        this.myProperty = "initialValue";
    }
}
__decorate([
    logProperty
], MyNewClass.prototype, "myProperty", void 0);
// Creiamo un'istanza della nostra classe e accediamo alla proprietà decorata.
let myNewInstance = new MyNewClass();
console.log(myNewInstance.myProperty); // Output: Getting myProperty value: "initialValue"
myNewInstance.myProperty = "new value"; // Output: Setting myProperty value: "new value"
console.log(myNewInstance.myProperty); // Output: Getting myProperty value: "new value"
// Funzione decoratore che estende la classe originale con ulteriori funzionalità di logging.
function addLogging(target) {
    // Ritorna una nuova classe che estende la classe originale.
    return class extends target {
        // Sovrascrive il costruttore della classe originale.
        constructor(...args) {
            // Stampa un messaggio di logging prima della creazione dell'istanza.
            console.log(`Creating instance of ${target.name}`);
            // Chiama il costruttore della classe originale.
            super(...args);
            // Stampa un messaggio di logging dopo la creazione dell'istanza.
            console.log(`Instance has been successfully created with x = ${this['x']} and y = ${this['y']}`);
        }
    };
}
// Applica il decoratore addLogging alla classe AwesomeClass.
let AwesomeClass = class AwesomeClass {
    // Costruttore della classe AwesomeClass.
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};
AwesomeClass = __decorate([
    addLogging
], AwesomeClass);
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
function ExtendClass(target) {
    /*
        Qui, l'uso di "implements ComplexClass" nella definizione della classe interna è tecnicamente non necessario.
        Questo perché il tipo della classe restituita è determinato dal tipo assegnato alla funzione (T & Constructor<ComplexClass>),
        piuttosto che da ciò che la classe stessa implementa.

        Di conseguenza, anche se non utilizzassimo "implements", TypeScript tratterebbe ancora la classe restituita
        come se implementasse l'interfaccia ComplexClass, poiché questo è specificato nel tipo di ritorno della funzione.

        In questo contesto, l'utilizzo di "implements" puo tuttavia servire a scopo didattico per evidenziare che
        la classe estende effettivamente tutti i membri dell'interfaccia ComplexClass e aderisce alla sua struttura.
    */
    return class ExtendedClass extends target {
        constructor() {
            super(...arguments);
            this.myNewProperty = "This is a new property";
        }
        myNewMethod() {
            console.log("This is a new method");
        }
        printOriginalProperty() {
            // Accede alla proprietà myProperty dell'istanza (this), non della classe
            console.log(this.myProperty);
        }
        getOriginalMethod() {
            return this.myMethod;
        }
    };
}
// @ExtendClass è un decoratore che estende la classe BasicClass
let BasicClass = class BasicClass {
    constructor() {
        // Definisce proprietà e metodi originali per la classe
        this.myProperty = "This is the original property";
    }
    myMethod() {
        console.log("This is the original method");
    }
};
BasicClass = __decorate([
    ExtendClass
], BasicClass);
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
let basicInstance = new BasicClass();
basicInstance.printOriginalProperty(); // Output: "This is the original property"
basicInstance.getOriginalMethod(); // Output: "This is the original method"
basicInstance.myNewProperty; // Output: "This is a new property"
basicInstance.myNewMethod(); // Output: "This is a new method"
// Questa è una funzione di factory che restituisce un decoratore. Prende due argomenti: il nome della proprietà da aggiungere e il suo valore.
function addNewProp(propertyName, value) {
    // Questa è la funzione del decoratore. Prende come argomento la classe originale da decorare.
    return function (OriginalClass) {
        // Questa è la classe decorata che viene restituita. Estende la classe originale.
        return class extends OriginalClass {
            constructor(...args) {
                // Chiama il costruttore della classe originale.
                super(...args);
                // Utilizza Object.defineProperty per aggiungere la nuova proprietà all'istanza della classe.
                Object.defineProperty(this, propertyName, {
                    value: value,
                    writable: true,
                    configurable: true // Questo permette alla proprietà di essere cancellata o cambiata
                });
                // Aggiunge un '!' alla fine del valore utilizzando l'assegnazione diretta.
                this[propertyName] = value + '!';
            }
        };
    };
}
// Queste sono le variabili che vengono passate al decoratore.
let propertyName = 'message';
let propertyValue = "Hello World";
// Applica il decoratore addNewProp alla classe MyClassWithConstructor.
let MyClassWithConstructor = class MyClassWithConstructor {
    constructor() { }
};
MyClassWithConstructor = __decorate([
    addNewProp(propertyName, propertyValue)
], MyClassWithConstructor);
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
function createAddElementToContainerFunction(htmlElemTag, containerId, textContent) {
    // La factory restituisce una nuova funzione che accetta il costruttore del nuovo elemento
    return function addElementToContainer(constructor) {
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
        container.querySelector(`${htmlElemTag}`).textContent = element.textContent;
    };
}
// Definisci i parametri per la factory
const htmlElement = 'h1';
const containerId = 'container';
const textContent = 'This is a sample element class...';
// Crea un nuovo elemento utilizzando la factory e il decoratore
let SampleElement = class SampleElement {
    constructor(textContent) {
        this.textContent = textContent;
    }
};
SampleElement = __decorate([
    createAddElementToContainerFunction(htmlElement, containerId, textContent)
], SampleElement);
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
