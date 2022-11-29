import { pool } from "./index.js"

export async function createTweetsTableES() {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS spanishDefinitions (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, englishtitle TEXT, title TEXT, definition TEXT, example TEXT, links TEXT, week INT);"
  );
}

export async function dropTweetsTableES() {
  return await pool.query("DROP TABLE IF EXISTS spanishDefinitions;");
}

export async function populateTweetsTableES() {
  const objects = [
    { englishtitle: 'Object', title: 'Objeto', definition: 'Un objeto JavaScript es una colección de valores con nombre. Es una práctica común declarar objetos con la palabra clave cons.', example: 'https://www.tutorialstonight.com/assets/js/javascript-object.webp', links: 'https://www.w3schools.com/js/js_object_definition.asp', week: 1},
    { englishtitle: 'Array', title: 'Matriz', definition: 'A Una matriz puede contener muchos valores bajo un solo nombre, y puede acceder a los valores haciendo referencia a un número de índice.', example: 'https://appdividend.com/wp-content/uploads/2019/06/Javascript-Array-Tutorial-With-Example-Arrays-in-Javascript.png', links: 'https://www.w3schools.com/js/js_arrays.asp', week: 1},
    { englishtitle: 'Arrow function', title:'Funciones Flecha', definition: 'Las funciones de flecha se introdujeron en ES6. Las funciones de flecha nos permiten escribir una sintaxis de función más corta.', example: 'https://miro.medium.com/max/1400/1*_IejCVtnJg24RDNQC9xftg.png', links: 'https://www.w3schools.com/js/js_arrow_function.asp', week: 1},
    { englishtitle: 'Function', title: 'Funcion', definition: 'Una función en JavaScript es similar a un procedimiento: un conjunto de declaraciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como una función, debe tomar alguna entrada y devolver una salida donde exista una relación obvia entre el entrada y la salida. Una función de JavaScript se ejecuta cuando \"algo\" la invoca (lo llama).', example: 'https://www.programiz.com/sites/tutorial2program/files/javascript-function-with-parameter.png', links: 'https://www.w3schools.com/js/js_functions.asp', week: 1},
    { englishtitle: 'If statements', title: 'Declaracion if', definition: 'Use if para especificar un bloque de código que se ejecutará, si una condición especificada es verdadera. Use else para especificar un bloque de código a ejecutar, si la misma condición es falsa.', example: 'https://cdn.programiz.com/sites/tutorial2program/files/js-if-else-if-statement_0.png', links: 'https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/if...else', week: 1},
    { englishtitle: 'For loops', title: 'Bucle for', definition: 'Los bucles pueden ejecutar un bloque de código varias veces.', example: 'https://miro.medium.com/max/1400/1*Wal8vgWVHiYnM0IrnK0p3w.jpeg', links: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for', week: 1},
    { englishtitle: 'While loops', title: 'Bucles while', definition: 'El bucle while recorre un bloque de código siempre que una condición específica sea verdadera.', example: 'https://www.tutorialspoint.com/javascript/images/while_loop.jpg', links: 'https://www.w3schools.com/js/js_loop_while.asp', week: 1}
  ];

  return await pool.query(
    "INSERT INTO spanishDefinitions (englishtitle, title, definition, example, links, week) (SELECT englishtitle, title, definition, example, links, week FROM json_populate_recordset(NULL::spanishDefinitions, $1::JSON));",
    [JSON.stringify(objects)]
  );
}

export async function resetTweetsTableES() {
  return [
    await dropTweetsTableES(),
    await createTweetsTableES(),
    await populateTweetsTableES(),
  ];
}
