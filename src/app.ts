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

// Definizione di un oggetto "person1" con due proprietà
const person1 = {
    name: "Pietro",
    surname: "Rossi"
}

// Non da errore, perché person1 è un oggetto con proprietà "name" e "surname"
person1.name

/*  
    Dichiarazione di un oggetto "person2" di tipo generico "object", 
    il che significa che può contenere qualsiasi tipo di oggetto non primitivo, 
    inclusi gli array, gli oggetti letterali e gli oggetti istanziati dalle classi. 
    Tuttavia, in questo caso, non è specificato il tipo di proprietà che l'oggetto dovrebbe avere, 
    quindi non è possibile accedere alle proprietà dell'oggetto senza specificare il tipo corretto delle proprietà. 
*/
let person2: object = {
    name: "Luca",
    surname: "Rossi"
}

/*  
    Dichiarazione di un oggetto "person3" di tipo "{}", che in TypeScript rappresenta l'oggetto vuoto. 
    Questo significa che l'oggetto può contenere qualsiasi tipo di proprietà, 
    ma non è specificato il tipo di alcuna proprietà dell'oggetto. 
    Pertanto, non è possibile accedere alle proprietà dell'oggetto senza specificare il tipo corretto delle proprietà. 
    In pratica, person3 non è molto utile perché non specifica il tipo delle proprietà dell'oggetto.
*/
let person3: {} = {
    name: "Giovanni",
    surname: "Rossi"
}

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
let person: {name: string, surname: string} = {name: "Luca", surname: "Rossi"}

// Dichiarazione di un oggetto "person" con proprietà nidificate
let _person: {
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
}

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
class Employee extends _PersonClass {

    // La proprietà "company" è statica e contiene il nome dell'azienda.
    static company = "OpenAI";

    static createEmployee(name: string, surname: string): Employee {
        // Il metodo "createEmployee" restituisce una nuova istanza della classe Employee.
        return new Employee(name, surname);
    }
}

Employee.createEmployee('Giovanni', 'Storti'); // Restituisce una nuova istanza della classe Employee.
Employee.company // Output: "OpenAi"

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
function findItemByProp<T extends {}, U>(items: T[], propValue: U, propName: keyof T): T | undefined {
    return items.find((item) => item[propName] === propValue);
}

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
  
const userById = findItemByProp(users, 2, 'id');
const userByName = findItemByProp(users, 'Bob', 'name');
  

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

// Utilizzo della classe NumericArray con elementi non numerici (genera un errore di compilazione)
// const nonNumericArray = new NumericArray([1, 2, 'three', 4, 5]); // Genera un errore di compilazione

// Utilizzo della classe NumericArray con elementi decimali (genera un errore di compilazione)
// const decimalArray = new NumericArray([1, 2, 3.14, 4, 5]); // Genera un errore di compilazione
  