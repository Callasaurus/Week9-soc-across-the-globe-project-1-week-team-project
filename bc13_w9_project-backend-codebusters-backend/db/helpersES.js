import { pool } from "./index.js"

export async function createObjectTableES() {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS spanishDefinitions (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, englishtitle TEXT, title TEXT, definition TEXT, example TEXT, links TEXT, week INT);"
  );
}

export async function dropObjectTableES() {
  return await pool.query("DROP TABLE IF EXISTS spanishDefinitions;");
}

export async function populateObjectTableES() {
  const objects =   [
    {
        "englishtitle": "API",
        "title": "API",
        "definition": "Una interfaz de programación de aplicaciones es una forma en que dos o más programas de computadora se comunican entre sí. Es un tipo de interfaz de software que ofrece un servicio a otras piezas de software. Un documento o estándar que describe cómo construir o usar dicha conexión o interfaz se denomina especificación API.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2lGIkpT4QVUSA9ilkZuYVVi_5FcVHX6vWA&usqp=CAU",
        "links": "https://www.mulesoft.com/resources/api/what-is-an-api",
        "week": 4
    },
    {
        "englishtitle": "Database",
        "title": "Base de datos",
        "definition": "En informática, una base de datos es una colección organizada de datos almacenados y a los que se accede electrónicamente. Las bases de datos pequeñas se pueden almacenar en un sistema de archivos, mientras que las bases de datos grandes se alojan en clústeres de computadoras o almacenamiento en la nube.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hH9pzWkAcEuhtzgBUBkURpCPiioiqAl0jw&usqp=CAU",
        "links": "https://www.techtarget.com/searchdatamanagement/definition/database",
        "week": 2
    },
    {
        "englishtitle": "For loops",
        "title": "Bucle for",
        "definition": "Los bucles pueden ejecutar un bloque de código varias veces.",
        "example": "https://miro.medium.com/max/1400/1*Wal8vgWVHiYnM0IrnK0p3w.jpeg",
        "links": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for",
        "week": 1
    },
    {
        "englishtitle": "While loops",
        "title": "Bucles while",
        "definition": "El bucle while recorre un bloque de código siempre que una condición específica sea verdadera.",
        "example": "https://www.tutorialspoint.com/javascript/images/while_loop.jpg",
        "links": "https://www.w3schools.com/js/js_loop_while.asp",
        "week": 1
    },
    {
        "englishtitle": "If statements",
        "title": "Declaracion if",
        "definition": "Use if para especificar un bloque de código que se ejecutará, si una condición especificada es verdadera. Use else para especificar un bloque de código a ejecutar, si la misma condición es falsa.",
        "example": "https://cdn.programiz.com/sites/tutorial2program/files/js-if-else-if-statement_0.png",
        "links": "https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/if...else",
        "week": 1
    },
    {
        "englishtitle": "Unit testing",
        "title": "Examen de la unidad",
        "definition": "En la programación de computadoras, la prueba unitaria es un método de prueba de software mediante el cual se prueban unidades individuales de código fuente (conjuntos de uno o más módulos de programa de computadora junto con datos de control asociados, procedimientos de uso y procedimientos operativos) para determinar si son aptos para su uso.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDv-xlfL62Kg-ChVPiJbd2KMPB235gF40DEg&usqp=CAU",
        "links": "https://reactjs.org/docs/hooks-effect.html",
        "week": 6
    },
    {
        "englishtitle": "User Experience",
        "title": "Experiencia de usuario",
        "definition": "La experiencia del usuario se refiere a la sensación que experimentan los usuarios al usar un producto, aplicación, sistema o servicio. Es un término amplio que puede cubrir cualquier cosa, desde qué tan bien el usuario puede navegar por el producto, qué tan fácil es de usar, qué tan relevante es el contenido que se muestra, etc.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESTBO3fUDgA38gO51TX4Gdj4cNNdrXHgiDA&usqp=CAU",
        "links": "https://www.interaction-design.org/literature/topics/ux-design",
        "week": 3
    },
    {
        "englishtitle": "Function",
        "title": "Funcion",
        "definition": "Una función en JavaScript es similar a un procedimiento: un conjunto de declaraciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como una función, debe tomar alguna entrada y devolver una salida donde exista una relación obvia entre el entrada y la salida. Una función de JavaScript se ejecuta cuando \"algo\" la invoca (lo llama).",
        "example": "https://www.programiz.com/sites/tutorial2program/files/javascript-function-with-parameter.png",
        "links": "https://www.w3schools.com/js/js_functions.asp",
        "week": 1
    },
    {
        "englishtitle": "Async function",
        "title": "función asíncrona",
        "definition": "La declaración de la función asíncrona declara una función asíncrona en la que se permite la palabra clave await dentro del cuerpo de la función. Las palabras clave async y await permiten que el comportamiento asincrónico basado en promesas se escriba en un estilo más claro, lo que evita la necesidad de configurar explícitamente cadenas de promesas.",
        "example": "https://cdn.programiz.com/sites/tutorial2program/files/async-await-function.png ",
        "links": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
        "week": 2
    },
    {
        "englishtitle": "Arrow function",
        "title": "Funciones Flecha",
        "definition": "Las funciones de flecha se introdujeron en ES6. Las funciones de flecha nos permiten escribir una sintaxis de función más corta.",
        "example": "https://miro.medium.com/max/1400/1*_IejCVtnJg24RDNQC9xftg.png",
        "links": "https://www.w3schools.com/js/js_arrow_function.asp",
        "week": 1
    },
    {
        "englishtitle": "User Interface",
        "title": "Interfaz de usuario",
        "definition": "La interfaz de usuario (UI) es el punto de interacción y comunicación humano-computadora en un dispositivo. Esto puede incluir pantallas de visualización, teclados, un mouse y la apariencia de un escritorio. También es la forma a través de la cual un usuario interactúa con una aplicación o un sitio web.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgo9YuXuJtZPi1SCj53XN0BDlDNEqwf-vow&usqp=CAU",
        "links": "https://www.techtarget.com/searchapparchitecture/definition/user-interface-UI",
        "week": 3
    },
    {
        "englishtitle": "Array",
        "title": "Matriz",
        "definition": "A Una matriz puede contener muchos valores bajo un solo nombre, y puede acceder a los valores haciendo referencia a un número de índice.",
        "example": "https://appdividend.com/wp-content/uploads/2019/06/Javascript-Array-Tutorial-With-Example-Arrays-in-Javascript.png",
        "links": "https://www.w3schools.com/js/js_arrays.asp",
        "week": 1
    },
    {
        "englishtitle": "Document Object Model (DOM)",
        "title": "Modelo de objeto de documento (DOM)",
        "definition": "El modelo de objetos de documento es una interfaz multiplataforma e independiente del idioma que trata un documento XML o HTML como una estructura de árbol en la que cada nodo es un objeto que representa una parte del documento. El DOM representa un documento con un árbol lógico.",
        "example": "https://www.w3schools.com/js/pic_htmltree.gif",
        "links": "https://www.w3schools.com/js/js_htmldom.asp",
        "week": 2
    },
    {
        "englishtitle": "Object",
        "title": "Objeto",
        "definition": "Un objeto JavaScript es una colección de valores con nombre. Es una práctica común declarar objetos con la palabra clave cons.",
        "example": "https://www.tutorialstonight.com/assets/js/javascript-object.webp",
        "links": "https://www.w3schools.com/js/js_object_definition.asp",
        "week": 1
    },
    {
        "englishtitle": "Event Listener",
        "title": "Oyente de eventos",
        "definition": "Un detector de eventos es un procedimiento en JavaScript que espera a que ocurra un evento. El ejemplo simple de un evento es un usuario que hace clic con el mouse o presiona una tecla en el teclado.",
        "example": " https://bootcamp.burlingtoncodeacademy.com/images/event-listener.png",
        "links": "https://www.w3schools.com/js/js_htmldom_eventlistener.asp",
        "week": 2
    },
    {
        "englishtitle": "End to end testing",
        "title": "Pruebas de extremo a extremo",
        "definition": "La prueba de extremo a extremo (prueba E2E) es un método de prueba de software que implica probar el flujo de trabajo de una aplicación de principio a fin. Este método tiene como objetivo replicar escenarios de usuarios reales para validar el sistema para la integración y la integridad de los datos.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhjXHhNUo_8tbD3tafLxTe2Gxln5xS-Y8vA&usqp=CAU",
        "links": "https://circleci.com/blog/what-is-end-to-end-testing/",
        "week": 6
    },
    {
        "englishtitle": "React props",
        "title": "React props",
        "definition": "Los accesorios son argumentos que se pasan a los componentes de React. Los accesorios se pasan a los componentes a través de atributos HTML. props significa propiedades",
        "example": "https://dmitripavlutin.com/react-props/cover.png",
        "links": "https://reactjs.org/docs/components-and-props.html",
        "week": 7
    },
    {
        "englishtitle": "React useEffect",
        "title": "React useEffect",
        "definition": "UseEffect Hook le permite realizar efectos secundarios en sus componentes. Algunos ejemplos de efectos secundarios son: obtención de datos, actualización directa del DOM y temporizadores. useEffect acepta dos argumentos. El segundo argumento es opcional.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDv-xlfL62Kg-ChVPiJbd2KMPB235gF40DEg&usqp=CAU",
        "links": "https://reactjs.org/docs/hooks-effect.html",
        "week": 8
    },
    {
        "englishtitle": "React useReducer",
        "title": "React useReducer",
        "definition": "useReducer devuelve una matriz que contiene el valor del estado actual y una función de envío a la que puede pasar una acción y luego invocarla. Si bien esto es similar al patrón que usa Redux, existen algunas diferencias. Por ejemplo, la función useReducer está estrechamente relacionada con un reductor específico.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmANtyYZd1vAjtq-xz0EMV1SncmBUe3nTag&usqp=CAU",
        "links": "https://reactjs.org/docs/hooks-reference.html",
        "week": 8
    },
    {
        "englishtitle": "React useState",
        "title": "React useState",
        "definition": "El React useState Hook nos permite rastrear el estado en un componente de función. El estado generalmente se refiere a datos o propiedades que deben rastrearse en una aplicación.",
        "example": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzRRzwC_9_5jM3vJ43LZC6w_-_KkGckPSC_Q&usqp=CAU",
        "links": "https://reactjs.org/docs/hooks-state.html",
        "week": 7
    }
];


  return await pool.query(
    "INSERT INTO spanishDefinitions (englishtitle, title, definition, example, links, week) (SELECT englishtitle, title, definition, example, links, week FROM json_populate_recordset(NULL::spanishDefinitions, $1::JSON));",
    [JSON.stringify(objects)]
  );
}

export async function resetObjectTableES() {
  return [
    await dropObjectTableES(),
    await createObjectTableES(),
    await populateObjectTableES(),
  ];
}
