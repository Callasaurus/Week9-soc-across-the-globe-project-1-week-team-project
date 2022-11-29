import query from "../db/index.js";

async function getEnglishDefinitions() {
  const allEnglishObject = await query("SELECT * FROM englishDefinitions");
  return allEnglishObject.rows;
}

async function getEnglishDefinitionByTitle(title) {
  const allEnglishObject = await query("SELECT * FROM englishDefinitions WHERE title ILIKE '%'||$1||'%'", [title]);
  return allEnglishObject.rows;
}

async function updateEnglishDefinition(id, title, definition, example, links, week) {
  const updateEnglishObject = await query("UPDATE englishDefinitions SET title = $2, definition = $3, example = $4, links = $5, week = $6 WHERE id = $1 RETURNING *;", [id, title, definition, example, links, week]);
  return updateEnglishObject.rows;
}

async function createEnglishDefinition(title, definition, example, links, week) {
  const createEnglishObject = await query("INSERT INTO englishDefinitions (title, definition, example, links, week) VALUES ($1, $2, $3, $4, $5) RETURNING *;", [title, definition, example, links, week]);
  return createEnglishObject.rows;
}

async function deleteEnglishDefinition(id) {
  const deleteEnglishObject = await query("DELETE FROM englishDefinitions WHERE id = $1 RETURNING *;", [id]);
  return deleteEnglishObject.rows;
}

export {
  getEnglishDefinitions,
  getEnglishDefinitionByTitle,
  updateEnglishDefinition,
  createEnglishDefinition,
  deleteEnglishDefinition
}
