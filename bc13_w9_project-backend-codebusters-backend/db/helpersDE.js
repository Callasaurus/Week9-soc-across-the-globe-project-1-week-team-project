import { pool } from "./index.js"

export async function createObjectTableDE() {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS germanDefinitions (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, englishtitle TEXT, title TEXT, definition TEXT, example TEXT, links TEXT, week INT);"
  );
}

export async function dropObjectTableDE() {
  return await pool.query("DROP TABLE IF EXISTS germanDefinitions;");
}

export async function populateObjectTableDE() {
  const objects =  [
    {
        "englishtitle": "API",
        "title": "API",
        "definition": " Eine Anwendungsprogrammierschnittstelle ist eine Möglichkeit, über die zwei oder mehr Computerprogramme miteinander kommunizieren. Es ist eine Art Softwareschnittstelle, die anderen Softwarekomponenten einen Dienst anbietet. Ein Dokument oder Standard, das beschreibt, wie eine solche Verbindung oder Schnittstelle erstellt oder verwendet wird, wird als API-Spezifikation bezeichnet.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2lGIkpT4QVUSA9ilkZuYVVi_5FcVHX6vWA&usqp=CAU",
        "links": "https://www.mulesoft.com/resources/api/what-is-an-api",
        "week": 4
    },
    {
        "englishtitle": "Array",
        "title": "Array",
        "definition": "Ein Array kann viele Werte unter einem einzigen Namen enthalten, und Sie können auf die Werte zugreifen, indem Sie auf eine Indexnummer verweisen.",
        "example": "https://appdividend.com/wp-content/uploads/2019/06/Javascript-Array-Tutorial-With-Example-Arrays-in-Javascript.png",
        "links": "https://www.w3schools.com/js/js_arrays.asp",
        "week": 1
    },
    {
        "englishtitle": "Async function",
        "title": "Async-Funktion",
        "definition": "Die asynchrone Funktionsdeklaration deklariert eine asynchrone Funktion, in der das Schlüsselwort await im Hauptteil der Funktion zulässig ist. Die Schlüsselwörter async und await ermöglichen es, Promise-basiertes asynchrones Verhalten in einem klareren Stil zu schreiben, wodurch die Notwendigkeit vermieden wird, Promise-Ketten explizit zu konfigurieren.",
        "example": "https://cdn.programiz.com/sites/tutorial2program/files/async-await-function.png ",
        "links": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
        "week": 2
    },
    {
        "englishtitle": "User Experience",
        "title": "Benutzererfahrung",
        "definition": "Die Benutzererfahrung bezieht sich auf das Gefühl, das Benutzer bei der Verwendung eines Produkts, einer Anwendung, eines Systems oder einer Dienstleistung empfinden. Es ist ein weit gefasster Begriff, der alles abdecken kann, wie gut der Benutzer durch das Produkt navigieren kann, wie einfach es zu verwenden ist, wie relevant der angezeigte Inhalt ist usw.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESTBO3fUDgA38gO51TX4Gdj4cNNdrXHgiDA&usqp=CAU",
        "links": "https://www.interaction-design.org/literature/topics/ux-design",
        "week": 3
    },
    {
        "englishtitle": "User Interface",
        "title": "Benutzeroberfläche",
        "definition": "Die Benutzeroberfläche (UI) ist der Punkt der Mensch-Computer-Interaktion und -Kommunikation auf einem Gerät. Dies kann Bildschirme, Tastaturen, eine Maus und das Erscheinungsbild eines Desktops umfassen. Es ist auch die Art und Weise, wie ein Benutzer mit einer Anwendung oder Website interagiert.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgo9YuXuJtZPi1SCj53XN0BDlDNEqwf-vow&usqp=CAU",
        "links": "https://www.techtarget.com/searchapparchitecture/definition/user-interface-UI",
        "week": 3
    },
    {
        "englishtitle": "Database",
        "title": "Datenbank",
        "definition": "In der Informatik ist eine Datenbank eine organisierte Sammlung von Daten, die elektronisch gespeichert und abgerufen werden. Kleine Datenbanken können auf einem Dateisystem gespeichert werden, während große Datenbanken auf Computerclustern oder Cloud-Speichern gehostet werden.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hH9pzWkAcEuhtzgBUBkURpCPiioiqAl0jw&usqp=CAU",
        "links": "https://www.techtarget.com/searchdatamanagement/definition/database",
        "week": 5
    },
    {
        "englishtitle": "Document Object Model (DOM)",
        "title": "Dokumentobjektmodell (DOM)",
        "definition": "Das Dokumentobjektmodell ist eine plattformübergreifende, sprachunabhängige Schnittstelle, die ein XML- oder HTML-Dokument als Baumstruktur behandelt, in der jeder Knoten ein Objekt ist, das einen Teil des Dokuments darstellt. Das DOM repräsentiert ein Dokument mit einem logischen Baum.",
        "example": "https://www.w3schools.com/js/pic_htmltree.gif",
        "links": " https://www.w3schools.com/js/js_htmldom.asp",
        "week": 2
    },
    {
        "englishtitle": "End to end testing",
        "title": "End-to-End-Tests",
        "definition": "End-to-End-Testing (E2E-Testing) ist eine Software-Testmethode, bei der der Workflow einer Anwendung von Anfang bis Ende getestet wird. Diese Methode soll reale Benutzerszenarien replizieren, um das System auf Integration und Datenintegrität zu validieren.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhjXHhNUo_8tbD3tafLxTe2Gxln5xS-Y8vA&usqp=CAU",
        "links": "https://circleci.com/blog/what-is-end-to-end-testing/",
        "week": 6
    },
    {
        "englishtitle": "Event Listener",
        "title": "Ereignis-Listener",
        "definition": "Ein Ereignis-Listener ist eine JavaScript-Prozedur, die auf das Eintreten eines Ereignisses wartet. Das einfache Beispiel für ein Ereignis ist ein Benutzer, der mit der Maus klickt oder eine Taste auf der Tastatur drückt.",
        "example": "https://bootcamp.burlingtoncodeacademy.com/images/event-listener.png",
        "links": "https://www.w3schools.com/js/js_htmldom_eventlistener.asp",
        "week": 2
    },
    {
        "englishtitle": "For loops",
        "title": "For-Schleifen",
        "definition": "Schleifen können einen Codeblock mehrmals ausführen.",
        "example": "https://cdn.programiz.com/sites/tutorial2program/files/working-javascript-continue-statement.pnG",
        "links": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for",
        "week": 1
    },
    {
        "englishtitle": "Function",
        "title": "Funktion",
        "definition": "Eine Funktion in JavaScript ähnelt einer Prozedur – eine Reihe von Anweisungen, die eine Aufgabe ausführen oder einen Wert berechnen, aber damit eine Prozedur als Funktion qualifiziert werden kann, sollte sie einige Eingaben annehmen und eine Ausgabe zurückgeben, zwischen denen eine offensichtliche Beziehung besteht die Eingabe und die Ausgabe. Eine JavaScript-Funktion wird ausgeführt, wenn \"etwas\" sie aufruft (aufruft)",
        "example": "https://www.programiz.com/sites/tutorial2program/files/javascript-function-with-parameter.png",
        "links": "https://www.w3schools.com/js/js_functions.asp",
        "week": 1
    },
    {
        "englishtitle": "If statements",
        "title": "If-Anweisungen",
        "definition": "Verwenden Sie if, um einen Codeblock anzugeben, der ausgeführt werden soll, wenn eine bestimmte Bedingung wahr ist. Verwenden Sie else, um einen Codeblock anzugeben, der ausgeführt werden soll, wenn dieselbe Bedingung falsch ist",
        "example": "https://cdn.programiz.com/sites/tutorial2program/files/js-if-else-if-statement_0.png",
        "links": "https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/if...else",
        "week": 1
    },
    {
        "englishtitle": "Object",
        "title": "Objekt",
        "definition": "Ein JavaScript-Objekt ist eine Sammlung von benannten Werten. Es ist üblich, Objekte mit dem Schlüsselwort const zu deklarieren",
        "example": "https://www.tutorialstonight.com/assets/js/javascript-object.webp",
        "links": "https://www.w3schools.com/js/js_object_definition.asp",
        "week": 1
    },
    {
        "englishtitle": "Arrow function",
        "title": "Pfeilfunktion",
        "definition": "Pfeilfunktionen wurden in ES6 eingeführt. Pfeilfunktionen ermöglichen es uns, eine kürzere Funktionssyntax zu schreiben",
        "example": "https://miro.medium.com/max/1400/1*_IejCVtnJg24RDNQC9xftg.png",
        "links": "https://www.w3schools.com/js/js_arrow_function.asp",
        "week": 1
    },
    {
        "englishtitle": "React props",
        "title": "React props",
        "definition": "Props sind Argumente, die an React-Komponenten übergeben werden. Props werden über HTML-Attribute an Komponenten übergeben. Requisiten bedeutet Eigenschaften",
        "example": "https://dmitripavlutin.com/react-props/cover.png",
        "links": "https://reactjs.org/docs/components-and-props.html",
        "week": 7
    },
    {
        "englishtitle": "React useEffect",
        "title": "React useEffect",
        "definition": "Mit UseEffect Hook können Sie Nebeneffekte an Ihren Komponenten ausführen. Einige Beispiele für Nebenwirkungen sind: Abrufen von Daten, direkte DOM-Aktualisierung und Timer. useEffect akzeptiert zwei Argumente. Das zweite Argument ist optional.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDv-xlfL62Kg-ChVPiJbd2KMPB235gF40DEg&usqp=CAU",
        "links": "https://reactjs.org/docs/hooks-effect.html",
        "week": 8
    },
    {
        "englishtitle": "React useReducer",
        "title": "React useReducer",
        "definition": "useReducer gibt ein Array zurück, das den aktuellen Statuswert und eine Dispatch-Funktion enthält, an die Sie eine Aktion übergeben und dann aufrufen können. Obwohl dies dem von Redux verwendeten Muster ähnlich ist, gibt es einige Unterschiede. Beispielsweise ist die useReducer-Funktion eng mit einem bestimmten Reducer verbunden.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmANtyYZd1vAjtq-xz0EMV1SncmBUe3nTag&usqp=CAU",
        "links": "https://reactjs.org/docs/hooks-reference.html",
        "week": 8
    },
    {
        "englishtitle": "React useState",
        "title": "React useState",
        "definition": "Der React useState Hook ermöglicht es uns, den Zustand in einer Funktionskomponente zu verfolgen. Status bezieht sich im Allgemeinen auf Daten oder Eigenschaften, die in einer Anwendung nachverfolgt werden müssen.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzRRzwC_9_5jM3vJ43LZC6w_-_KkGckPSC_Q&usqp=CAU",
        "links": "https://reactjs.org/docs/hooks-state.html",
        "week": 7
    },
    {
        "englishtitle": "Unit testing",
        "title": "Unit-Tests",
        "definition": "In der Computerprogrammierung ist das Testen von Einheiten eine Softwaretestmethode, bei der einzelne Einheiten des Quellcodes (Sätze von einem oder mehreren Computerprogrammmodulen zusammen mit zugehörigen Steuerdaten, Verwendungs- und Betriebsverfahren) getestet werden, um festzustellen, ob sie geeignet sind für den Einsatz.",
        "example": "https://miro.medium.com/max/1138/1*ohoa7R6eyI-r9HKSeLmb7w.png",
        "links": "https://en.wikipedia.org/wiki/Unit_testing",
        "week": 6
    },
    {
        "englishtitle": "While loops",
        "title": "Während Schleifen",
        "definition": "Die While-Schleife durchläuft einen Codeblock, solange eine angegebene Bedingung wahr ist.",
        "example": "https://www.tutorialspoint.com/javascript/images/while_loop.jpg",
        "links": "https://www.w3schools.com/js/js_loop_while.asp",
        "week": 1
    }
];


  return await pool.query(
    "INSERT INTO germanDefinitions (englishtitle, title, definition, example, links, week) (SELECT englishtitle, title, definition, example, links, week FROM json_populate_recordset(NULL::germanDefinitions, $1::JSON));",
    [JSON.stringify(objects)]
  );
}

export async function resetObjectTableDE() {
  return [
    await dropObjectTableDE(),
    await createObjectTableDE(),
    await populateObjectTableDE(),
  ];
}