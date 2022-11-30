import { pool } from "./index.js"

export async function createObjectTable() {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS englishDefinitions (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title TEXT, definition TEXT, example TEXT, links TEXT, week INT);"
  );
}

export async function dropObjectTable() {
  return await pool.query("DROP TABLE IF EXISTS englishDefinitions;");
}

export async function populateObjectTable() {
  const objects =   [
    {
        "title": "Array",
        "definition": "An array can hold many values under a single name, and you can access the values by referring to an index number.",
        "example": "https://appdividend.com/wp-content/uploads/2019/06/Javascript-Array-Tutorial-With-Example-Arrays-in-Javascript.png",
        "links": "https://www.w3schools.com/js/js_arrays.asp",
        "week": 1
    },
    {
        "title": "Arrow function",
        "definition": "Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax",
        "example": "https://miro.medium.com/max/1400/1*_IejCVtnJg24RDNQC9xftg.png",
        "links": "https://www.w3schools.com/js/js_arrow_function.asp",
        "week": 1
    },
    {
        "title": "Async function",
        "definition": "The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.",
        "example": "https://cdn.programiz.com/sites/tutorial2program/files/async-await-function.png",
        "links": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
        "week": 4
    },
    {
        "title": "Async function",
        "definition": "The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.",
        "example": "https://cdn.programiz.com/sites/tutorial2program/files/async-await-function.png",
        "links": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
        "week": 2
    },
    {
        "title": "Database",
        "definition": "In computing, a database is an organized collection of data stored and accessed electronically. Small databases can be stored on a file system, while large databases are hosted on computer clusters or cloud storage.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hH9pzWkAcEuhtzgBUBkURpCPiioiqAl0jw&usqp=CAU",
        "links": "https://www.techtarget.com/searchdatamanagement/definition/database",
        "week": 5
    },
    {
        "title": "Document Object Model (DOM)",
        "definition": "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree.",
        "example": "https://www.w3schools.com/js/pic_htmltree.gif",
        "links": "https://www.w3schools.com/js/js_htmldom.asp",
        "week": 2
    },
    {
        "title": "End to end testing",
        "definition": "End to end testing (E2E testing) is a software testing method that involves testing an application's workflow from beginning to end. This method aims to replicate real user scenarios to validate the system for integration and data integrity.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhjXHhNUo_8tbD3tafLxTe2Gxln5xS-Y8vA&usqp=CAU",
        "links": "https://circleci.com/blog/what-is-end-to-end-testing/",
        "week": 6
    },
    {
        "title": "Event Listener",
        "definition": "An event listener is a procedure in JavaScript that waits for an event to occur. The simple example of an event is a user clicking the mouse or pressing a key on the keyboard.",
        "example": "https://bootcamp.burlingtoncodeacademy.com/images/event-listener.png",
        "links": "https://www.w3schools.com/js/js_htmldom_eventlistener.asp",
        "week": 2
    },
    {
        "title": "For loops",
        "definition": "Loops can execute a block of code a number of times.",
        "example": "https://miro.medium.com/max/1400/1*Wal8vgWVHiYnM0IrnK0p3w.jpeg",
        "links": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for",
        "week": 1
    },
    {
        "title": "Function",
        "definition": "A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. A JavaScript function is executed when \"something\" invokes it (calls it)",
        "example": "https://www.programiz.com/sites/tutorial2program/files/javascript-function-with-parameter.png",
        "links": "https://www.w3schools.com/js/js_functions.asp",
        "week": 1
    },
    {
        "title": "If statements",
        "definition": "Use if to specify a block of code to be executed, if a specified condition is true. Use else to specify a block of code to be executed, if the same condition is false",
        "example": "https://cdn.programiz.com/sites/tutorial2program/files/js-if-else-if-statement_0.png",
        "links": "https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/if...else",
        "week": 1
    },
    {
        "title": "Object",
        "definition": "A JavaScript object is a collection of named values. It is a common practice to declare objects with the const keyword",
        "example": "https://www.tutorialstonight.com/assets/js/javascript-object.webp",
        "links": "https://www.w3schools.com/js/js_object_definition.asp",
        "week": 1
    },
    {
        "title": "React props",
        "definition": "Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.",
        "example": "https://dmitripavlutin.com/react-props/cover.png",
        "links": "https://reactjs.org/docs/components-and-props.html",
        "week": 7
    },
    {
        "title": "React useEffect",
        "definition": "The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDv-xlfL62Kg-ChVPiJbd2KMPB235gF40DEg&usqp=CAU",
        "links": "https://reactjs.org/docs/hooks-effect.html",
        "week": 8
    },
    {
        "title": "React useReducer",
        "definition": "useReducer returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it. While this is similar to the pattern Redux uses, there are a few differences. For example, the useReducer function is tightly coupled to a specific reducer.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmANtyYZd1vAjtq-xz0EMV1SncmBUe3nTag&usqp=CAU",
        "links": "https://reactjs.org/docs/hooks-reference.html",
        "week": 8
    },
    {
        "title": "React useState",
        "definition": "The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzRRzwC_9_5jM3vJ43LZC6w_-_KkGckPSC_Q&usqp=CAU",
        "links": "https://reactjs.org/docs/hooks-state.html",
        "week": 7
    },
    {
        "title": "SQL Like operator",
        "definition": "The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.",
        "example": "https://www.programiz.com/sites/tutorial2program/files/sql-like.png",
        "links": "https://www.w3schools.com/sql/sql_like.asp",
        "week": 5
    },
    {
        "title": "Unit testing",
        "definition": "In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use.",
        "example": "https://miro.medium.com/max/1138/1*ohoa7R6eyI-r9HKSeLmb7w.png",
        "links": "https://en.wikipedia.org/wiki/Unit_testing",
        "week": 6
    },
    {
        "title": "User Experience",
        "definition": "User Experience refers to the feeling users experience when using a product, application, system, or service. It is a broad term that can cover anything from how well the user can navigate the product, how easy it is to use, how relevant the content displayed is etc.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESTBO3fUDgA38gO51TX4Gdj4cNNdrXHgiDA&usqp=CAU",
        "links": "https://www.interaction-design.org/literature/topics/ux-design",
        "week": 3
    },
    {
        "title": "User Interface",
        "definition": "The user interface (UI) is the point of human-computer interaction and communication in a device. This can include display screens, keyboards, a mouse and the appearance of a desktop. It is also the way through which a user interacts with an application or a website.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgo9YuXuJtZPi1SCj53XN0BDlDNEqwf-vow&usqp=CAU",
        "links": "https://www.techtarget.com/searchapparchitecture/definition/user-interface-UI",
        "week": 3
    },
    {
        "title": "While loops",
        "definition": "The while loop loops through a block of code as long as a specified condition is true.",
        "example": "https://www.tutorialspoint.com/javascript/images/while_loop.jpg",
        "links": "https://www.w3schools.com/js/js_loop_while.asp",
        "week": 1
    }
];


  return await pool.query(
    "INSERT INTO englishDefinitions (title, definition, example, links, week) (SELECT title, definition, example, links, week FROM json_populate_recordset(NULL::englishDefinitions, $1::JSON));",
    [JSON.stringify(objects)]
  );
}

export async function resetObjectTable() {
  return [
    await dropObjectTable(),
    await createObjectTable(),
    await populateObjectTable(),
  ];
}

