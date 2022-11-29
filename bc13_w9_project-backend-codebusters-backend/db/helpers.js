import { pool } from "./index.js"

export async function createTweetsTable() {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS englishDefinitions (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title TEXT, definition TEXT, example TEXT, links TEXT, week INT);"
  );
}

export async function dropTweetsTable() {
  return await pool.query("DROP TABLE IF EXISTS englishDefinitions;");
}

export async function populateTweetsTable() {
  const objects = [
    { title: 'Object', definition: 'A JavaScript object is a collection of named values. It is a common practice to declare objects with the const keyword', example: 'https://www.tutorialstonight.com/assets/js/javascript-object.webp', links: 'https://www.w3schools.com/js/js_object_definition.asp', week: 1},
    { title: 'Array', definition: 'An array can hold many values under a single name, and you can access the values by referring to an index number.', example: 'https://appdividend.com/wp-content/uploads/2019/06/Javascript-Array-Tutorial-With-Example-Arrays-in-Javascript.png', links: 'https://www.w3schools.com/js/js_arrays.asp', week: 1},
    { title: 'Arrow function', definition: 'Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax', example: 'https://miro.medium.com/max/1400/1*_IejCVtnJg24RDNQC9xftg.png', links: 'https://www.w3schools.com/js/js_arrow_function.asp', week: 1},
    { title: 'Function', definition: 'A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. A JavaScript function is executed when "something" invokes it (calls it)', example: 'https://www.programiz.com/sites/tutorial2program/files/javascript-function-with-parameter.png', links: 'https://www.w3schools.com/js/js_functions.asp', week: 1},
    { title: 'If statements', definition: 'Use if to specify a block of code to be executed, if a specified condition is true. Use else to specify a block of code to be executed, if the same condition is false', example: 'https://cdn.programiz.com/sites/tutorial2program/files/js-if-else-if-statement_0.png', links: 'https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/if...else', week: 1},
    { title: 'For loops', definition: 'Loops can execute a block of code a number of times.', example: 'https://miro.medium.com/max/1400/1*Wal8vgWVHiYnM0IrnK0p3w.jpeg', links: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for', week: 1},
    { title: 'While loops', definition: 'The while loop loops through a block of code as long as a specified condition is true.', example: 'https://www.tutorialspoint.com/javascript/images/while_loop.jpg', links: 'https://www.w3schools.com/js/js_loop_while.asp', week: 1}
  ];

  return await pool.query(
    "INSERT INTO englishDefinitions (title, definition, example, links, week) (SELECT title, definition, example, links, week FROM json_populate_recordset(NULL::englishDefinitions, $1::JSON));",
    [JSON.stringify(objects)]
  );
}

export async function resetTweetsTable() {
  return [
    await dropTweetsTable(),
    await createTweetsTable(),
    await populateTweetsTable(),
  ];
}
