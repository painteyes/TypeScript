/*
    Differenza tra tipi di dato dinamici e statici
    
    In TypeScript il tipo delle variabili è statico, a differenza di JavaScript in cui il tipo di dato è dinamico.
    Questo significa che in TypeScript il tipo di una variabile viene definito in fase di dichiarazione e
    non può essere cambiato successivamente.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var string = "My full name is " + _name + " " + surname;
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
    Object
*/
// Definizione di un oggetto "person1" con due proprietà
var person1 = {
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
var person2 = {
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
var person3 = {
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
// Creiamo un oggetto di tipo Person con informazioni di esempio
var __person = {
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
var day = weekDays.Tuesday;
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
var _any = 5;
_any = "test"; // Possiamo assegnare un valore di tipo stringa alla variabile
// Creiamo un array di tipo any che può contenere qualsiasi tipo di valore
var _anyArr = ["", 3];
// Creiamo una tupla di tipo any che può contenere qualsiasi tipo di valore
var _tuple = [true, 4];
/*
    Union
*/
// Creiamo una variabile di tipo union che può contenere un valore di tipo number o stringa
var union = 5;
// Creiamo un array di tipo union che può contenere un array di tipo any o un array di tipo stringa
var _union = ['', ''];
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
var data = { id: 1, username: 'bonobo', password: '' };
// Chiamata alla funzione "getData" passando l'oggetto "data" come argomento
getData(data);
/*
    Definizione di una funzione che prende due numeri come argomenti e restituisce la loro somma
    Nel caso in cui il secondo argomento non sia passato, la funzione assegna di default il valore 0 al parametro "num2".
    Grazie all'inference di TypeScript, il tipo dell'argomento "num2" viene dedotto automaticamente come number.
    Il tipo di ritorno della funzione è anch'esso number e viene dedotto dall'inference in base all'operazione di somma effettuata.
*/
function addNumbers(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    var sum = num1 + num2;
    return sum;
}
// In questa funzione è possibile specificare un tipo di ritorno diverso dall'inference, in questo caso "string" o "void"
function _addNumbers(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    var sumString = (num1 + num2).toString();
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
var _addNumbersFunc = _addNumbers;
function _print(string) { console.log(string); }
_addNumbersFunc = _print;
// Per risolvere il problema del tipo generico "Function", si può specificare il tipo della funzione "addNumbersFunc"
var addNumbersFunc = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbersFunc(2, 3)); // Output: 5
// In questa funzione si esegue una operazione di incremento sul parametro "num", e poi si esegue la funzione di callback "cb()"
function incrementAndExecute(num, cb) {
    var incrementedNum = num + 1;
    console.log("Il numero incrementato \u00E8 " + incrementedNum);
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
var Gigi = /** @class */ (function () {
    function Gigi() {
        this.name = 'Gigi';
        this.surname = '';
    }
    return Gigi;
}());
// Definizione della classe PersonClass con costruttore per inizializzare le proprietà "name" e "surname"
var PersonClass = /** @class */ (function () {
    // Costruttore standard
    function PersonClass(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    // Metodo che stampa una presentazione della persona corrente
    PersonClass.prototype.introduce = function () {
        console.log("My name's " + this.name);
    };
    // Metodo greet che saluta una persona specifica
    PersonClass.prototype.greet = function (person) {
        console.log("Hello " + person.name + ", nice to meet you");
    };
    return PersonClass;
}());
// Creazione di un'istanza di PersonClass e inizializzazione delle proprietà name e surname
var personOne = new PersonClass("Mario", "Rossi", 43);
var personTwo = new PersonClass("Lucia", "Verdi", 29);
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
var GameClass = /** @class */ (function () {
    // Costruttore abbreviato che inizializza automaticamente le proprietà private id, usernameOne e usernameTwo.
    // Il modificatore di accesso "private readonly" definisce le proprietà come di sola lettura, non modificabili dopo la creazione.
    function GameClass(id, userOne, userTwo) {
        this.id = id;
        this.userOne = userOne;
        this.userTwo = userTwo;
    }
    return GameClass;
}());
// Istanziazione della classe GameClass con i due oggetti PersonClass creati
var _game = new GameClass(100, personOne, personTwo);
/* Inheritance (ereditarietà) */
// Definizione della classe base `_PersonClass` che rappresenta una persona generica
var _PersonClass = /** @class */ (function () {
    // Il costruttore accetta il nome e il cognome della persona come argomenti
    function _PersonClass(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    return _PersonClass;
}());
// Definizione della classe `Student` che eredita dalla classe `_PersonClass`.
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
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
    function Student(name, surname, favoriteSubject, votes) {
        var _this = _super.call(this, name, surname) || this;
        _this.favoriteSubject = favoriteSubject;
        _this.votes = votes;
        return _this;
    }
    // Metodo per cambiare il nome dello studente.
    Student.prototype.changeName = function (name) {
        // La proprietà `name` è privata (private) e quindi modificabile solo all'interno della classe `_PersonClass`. 
        // this.name = 'Giacomo'; // Errore: non è possibile modificare la proprietà `name`. 
    };
    // Metodo per cambiare il cognome dello studente.
    Student.prototype.changeSurname = function (surname) {
        // La proprietà `surname` è protetta (protected) e quindi modificabile sia all'interno della classe `_PersonClass` che nelle sue sottoclassi.
        this.surname = 'Poretti';
    };
    return Student;
}(_PersonClass));
// Creazione di un'istanza della classe `Student` con il nome "Aldo", il cognome "Baglio" e la materia preferita "Storia"
var _student = new Student('Aldo', 'Baglio', 'Storia');
// La proprietà "surname" è protetta (protected) e pertanto non può essere modificata direttamente al di fuori della sua classe o delle sue sottoclassi.
// _student.surname = 'Poretti'; // Errore: l'accesso alla proprietà surname è consentito solo all'interno della classe Student e delle sue sottoclassi.
/* Static */
// La classe Employee estende la classe Person e aggiunge una proprietà statica "company" e un metodo statico "createEmployee".
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.createEmployee = function (name, surname) {
        // Il metodo "createEmployee" restituisce una nuova istanza della classe Employee.
        return new Employee(name, surname);
    };
    // La proprietà "company" è statica e contiene il nome dell'azienda.
    Employee.company = "OpenAI";
    return Employee;
}(_PersonClass));
Employee.createEmployee('Giovanni', 'Storti'); // Restituisce una nuova istanza della classe Employee.
Employee.company; // Output: "OpenAi"
/* Abstract */
/*
    Definiamo una classe astratta chiamata "Animal"che rappresenta un animale generico.
    Poiché "Animal" è una classe astratta, essa non può essere istanziata direttamente.
    È stata pensata, invece, per essere estesa da altre classi che ereditano le proprietà
    e i metodi di "Animal" e possono definire le proprie proprietà e metodi.
*/
var Animal = /** @class */ (function () {
    // Definiamo un costruttore che accetta un nome per l'animale
    function Animal(name) {
        this.name = name;
    }
    // Definiamo un metodo che stampa il nome dell'animale seguito dal suo suono
    Animal.prototype.makeSound = function () {
        console.log(this.name + " fa " + this.sound());
    };
    return Animal;
}());
// Definiamo una classe che estende la classe astratta "Animal"
var Cane = /** @class */ (function (_super) {
    __extends(Cane, _super);
    function Cane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Implementiamo il metodo astratto "sound" specifico per i cani
    Cane.prototype.sound = function () {
        return "Bau";
    };
    return Cane;
}(Animal));
// Creiamo una nuova istanza della classe "Cane" e chiamiamo il metodo "makeSound"
var fido = new Cane("Fido");
fido.makeSound(); // Output: "Fido fa Bau"
/* Singleton */
// Definiamo una classe singleton per gestire la connessione al database
var DatabaseConnection = /** @class */ (function () {
    // Il costruttore è privato, quindi la classe può essere istanziata solo internamente.
    function DatabaseConnection() {
        this.connected = false;
    }
    // Questo metodo statico restituisce l'unica istanza della classe DatabaseConnection.
    DatabaseConnection.getInstance = function () {
        // Se non esiste ancora un'istanza, viene creata.
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        // Viene restituita l'istanza esistente.
        return DatabaseConnection.instance;
    };
    DatabaseConnection.prototype.connect = function () {
        // Effettua la connessione al database, se non già connesso
        if (!this.connected) {
            console.log("Connessione al database effettuata");
            this.connected = true;
        }
        else {
            console.log("Connessione già attiva");
        }
    };
    DatabaseConnection.prototype.disconnect = function () {
        // Effettua la disconnessione dal database, se connesso
        if (this.connected) {
            console.log("Disconnessione dal database effettuata");
            this.connected = false;
        }
        else {
            console.log("Nessuna connessione attiva");
        }
    };
    return DatabaseConnection;
}());
// Richiama il metodo statico getInstance() della classe DatabaseConnection per ottenere l'unica istanza della classe e connetterci al database
DatabaseConnection.getInstance().connect();
// Definiamo un'enumerazione PowerStatus per rappresentare lo stato di accensione/spegnimento del dispositivo
var PowerStatus;
(function (PowerStatus) {
    PowerStatus[PowerStatus["ON"] = 0] = "ON";
    PowerStatus[PowerStatus["OFF"] = 1] = "OFF";
})(PowerStatus || (PowerStatus = {}));
// Implementiamo le due interfacce in una classe astratta che definisce un dispositivo con funzionalità di connessione a internet.
var Device = /** @class */ (function () {
    // Definiamo il costruttore della classe con due parametri: "model" e "year".
    function Device(model, year) {
        this.model = model;
        this.year = year;
        // La proprietà privata _isConnected viene utilizzata per tenere traccia dello stato di connessione del dispositivo.
        this._isConnected = false;
        // La proprietà protetta powerStatus viene utilizzata per tenere traccia dello stato di alimentazione del dispositivo.
        this.powerStatus = PowerStatus.OFF;
    }
    Object.defineProperty(Device.prototype, "isConnected", {
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
        get: function () {
            return this._isConnected;
        },
        // Metodo privato per impostare la proprietà privata _isConnected
        set: function (value) {
            this._isConnected = value;
        },
        enumerable: false,
        configurable: true
    });
    // Metodo pubblico per connettere il dispositivo ad internet
    Device.prototype.connect = function () {
        console.log("Connecting to the internet...");
        this.isConnected = true; // Imposta la proprietà privata _isConnected a true, usando il metodo set
        console.log("Connected to the internet");
    };
    // Metodo pubblico per disconnettere il dispositivo da internet
    Device.prototype.disconnect = function () {
        console.log("Disconnecting from the internet...");
        this.isConnected = false; // / Imposta la proprietà privata _isConnected a false, usando il metodo set
        console.log("Disconnected from the internet");
    };
    /*
        Implementazione delle proprietà e dei metodi definiti nell'interfaccia PowerControl:
        - togglePower(): void
        - isPoweredOn: () => boolean
        - turnOn(): void
        - turnOff(): void
    */
    // Il metodo togglePower si occupa di cambiare lo stato di accensione/spengimento del dispositivo
    // a seconda dello stato attuale memorizzato nella proprietà protetta powerStatus.
    Device.prototype.togglePower = function () {
        this.powerStatus = this.powerStatus === PowerStatus.ON ? PowerStatus.OFF : PowerStatus.ON;
    };
    // Il metodo isPoweredOn restituisce un valore booleano che indica se il dispositivo è attualmente acceso o spento.
    Device.prototype.isPoweredOn = function () {
        return this.powerStatus === PowerStatus.ON;
    };
    /*
        I metodi turnOn() e turnOff() rappresentano il comportamento di accensione e spegnimento del dispositivo,
        che è specifico per ogni implementazione di Device.
        L'argomento deviceType viene utilizzato per garantire che ogni classe derivata di Device fornisca un'implementazione specifica dei metodi,
        in linea con le specifiche del dispositivo, per garantire un comportamento coerente di accensione e spegnimento.
    */
    // Implementa il metodo turnOn definito nell'interfaccia PowerControl
    Device.prototype.turnOn = function (deviceType) {
        if (!this.isPoweredOn()) {
            this.togglePower();
        }
    };
    // Implementa il metodo turnOff definito nell'interfaccia PowerControl
    Device.prototype.turnOff = function (deviceType) {
        if (this.isPoweredOn()) {
            this.togglePower();
        }
    };
    return Device;
}());
// Classe per uno smartphone, estende la classe Device
var Smartphone = /** @class */ (function (_super) {
    __extends(Smartphone, _super);
    function Smartphone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deviceType = 'smartphone';
        return _this;
    }
    // Sovrascrive il metodo turnOn implementato nella classe Device
    Smartphone.prototype.turnOn = function () {
        if (!this.isPoweredOn()) {
            console.log("Accensione del " + this.deviceType + "..."); // Modifica: aggiunge un messaggio di log per indicare l'accensione dello smartphone
            this.togglePower();
        }
    };
    // Sovrascrive il metodo turnOff implementato nella classe Device
    Smartphone.prototype.turnOff = function () {
        if (this.isPoweredOn()) {
            console.log("Spegnimento del " + this.deviceType + "..."); // Modifica: aggiunge un messaggio di log per indicare lo spegnimento dello smartphone
            this.togglePower();
        }
    };
    return Smartphone;
}(Device));
// Classe per un computer, estende la classe Device
var Computer = /** @class */ (function (_super) {
    __extends(Computer, _super);
    function Computer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deviceType = 'computer';
        return _this;
    }
    // Sovrascrive il metodo turnOn implementato nella classe Device
    Computer.prototype.turnOn = function () {
        if (!this.isPoweredOn()) {
            console.log("Accensione del " + this.deviceType + "..."); // Modifica: aggiunge un messaggio di log per indicare l'accensione del computer
            this.togglePower();
        }
    };
    // Sovrascrive il metodo turnOff implementato nella classe Device
    Computer.prototype.turnOff = function () {
        if (this.isPoweredOn()) {
            console.log("Spegnimento del " + this.deviceType + "..."); // Modifica: aggiunge un messaggio di log per indicare lo spegnimento del computer
            this.togglePower();
        }
    };
    return Computer;
}(Device));
var mySmartphone = new Smartphone('iPhone 13', 2021); // Crea un'istanza della classe Smartphone
mySmartphone.turnOn(); // Accende lo smartphone
mySmartphone.connect(); // Si connette a Internet
console.log(mySmartphone.isConnected); // Stampa lo stato della connessione
mySmartphone.disconnect(); // Si disconnette da Internet
mySmartphone.turnOff(); // Spegne lo smartphone
var myComputer = new Computer('MacBook Pro', 2022); // Crea un'istanza della classe Computer
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
var stringsArr = ['q', 'w', 'e', 'r', 't', 'y'];
// Definizione di un array di numeri tipizzato utilizzando la sintassi delle Generics (built-in in TypeScript)
var numbersArr = [1, 2, 3, 4];
/* Esempio di utilizzo di Generics */
// Funzione che prende un array di elementi generici e ne restituisce una copia
function generateArr(items) {
    return new Array().concat(items);
}
// Esempio di utilizzo della funzione con gli array tipizzati sopra
var arr1 = generateArr(numbersArr);
var arr2 = generateArr(stringsArr);
// Problema: si può aggiungere un elemento di qualsiasi tipo all'array
arr1.push('qwerty');
// Soluzione: utilizzo di generics per definire il tipo degli elementi dell'array
function _generateArr(items) {
    return new Array().concat(items);
}
// Esempio di utilizzo della nuova funzione
var _arr1 = _generateArr(numbersArr); // il tipo T viene inferito automaticamente
var _arr2 = _generateArr(stringsArr); // il tipo T viene espresso esplicitamente come string
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
var numberValue = 5;
var stringValue = 'hello';
var mappedNumberValue = mapItem(numberValue); // mappedNumberValue avrà il valore '5' di tipo stringa
var mappedStringValue = mapItem(stringValue); // mappedStringValue avrà il valore 'HELLO' in maiuscolo
// Funzione che mappa ogni elemento di un array in un nuovo array di tipo U
function mapArray(items) {
    var result = [];
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var mappedItem = mapItem(item); // la funzione mapItem converte ogni elemento nell'array nel tipo U
        result.push(mappedItem);
    }
    return result;
}
// Esempio di invocazione di mapArray():
var _numbersArr = [1, 2, 3, 4];
var _stringsArr = ['hello', 'world'];
var mappedNumbersArr = mapArray(numbersArr); // mappedNumbersArr avrà i valori '1', '2', '3', '4' di tipo stringa
var mappedStringsArr = mapArray(stringsArr); // mappedStringsArr avrà i valori 'HELLO', 'WORLD' in maiuscolo
/* Generic Constraint Extends */
// La sintassi <T extends _Person> specifica che il tipo generico T deve estendere _Person, 
// il che significa che T può essere sostituito solo con un tipo che sia o estenda _Person.
function filterYoungerThan(people, age) {
    return people.filter(function (person) { return person.age < age; });
}
var people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
];
var youngPeople = filterYoungerThan(people, 30); // restituirà solo Alice e Charlie
console.log(youngPeople);
// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 20 }]
/*
    Definiamo una funzione che accetta un array di elementi di tipo number o boolean e restituisce una
    funzione che accetta un valore di tipo T (ovvero number o boolean) e restituisce un nuovo array
    contenente tutti gli elementi di items che sono uguali al valore passato come parametro.
*/
function filterValues(items) {
    return function (value) { return items.filter(function (item) { return item === value; }); };
}
// Esempio di utilizzo delal funzione
var myArray = [1, 2, true, false, 3, true];
var filterForTrue = filterValues(myArray);
var trueValues = filterForTrue(true);
console.log(trueValues); // Output: [true, true]
var users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 40 },
];
// const userById = findItemByProp(users, 2, 'id');
// const userByName = findItemByProp(users, 'Bob', 'name');
/* Generic class */
// Definizione di una classe generica che accetta solo elementi numerici
var NumericArray = /** @class */ (function () {
    function NumericArray(items) {
        this.items = items;
    }
    // Metodo che somma tutti gli elementi dell'array e restituisce il risultato
    NumericArray.prototype.sum = function () {
        var total = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item;
        }
        return total;
    };
    return NumericArray;
}());
// Utilizzo della classe NumericArray con elementi numerici
var numericArray = new NumericArray([1, 2, 3, 4, 5]);
console.log(numericArray.sum()); // Output: 15
// Utilizzo della classe NumericArray con elementi decimali 
var decimalArray = new NumericArray([1, 2, 3.14, 4, 5]);
// Utilizzo della classe NumericArray con elementi non numerici 
// const nonNumericArray = new NumericArray([1, 2, 'three', 4, 5]); // Genera un errore di compilazione
// T extends U ? X : Y
/**
 * DECORATORS
 *
 * Cosa sono i Decorators ?
 * Crearne uno
 * Creare un Decorator Factory (passare parametri)
 * Esempio con template
 *
*/
/* Cosa sono i Decorators */
/*
    I Decoratos altro non sono che delle funzioni, dopodichè le applichiamo alle classi semplicemente con la @
*/
function Test(target) {
    console.log("sto creando un oggetto...");
}
var Prova = /** @class */ (function () {
    function Prova() {
        console.log("sto creando un oggetto...");
    }
    Prova = __decorate([
        Test
    ], Prova);
    return Prova;
}());
// Creiamo un'istanza della classe Prova per vedere come funziona il decorator
var provaInstance = new Prova();
