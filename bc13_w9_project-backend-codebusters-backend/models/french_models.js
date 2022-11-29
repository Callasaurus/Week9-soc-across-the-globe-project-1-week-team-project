import query from "../db/index.js";

async function getFrenchDefinitions() {
  const allFrenchObject = await query("SELECT * FROM frenchDefinitions");
  return allFrenchObject.rows;
}

async function getFrenchDefinitionByTitle(title) {
  const allFrenchObject = await query("SELECT * FROM frenchDefinitions WHERE title ILIKE '%'||$1||'%' ", [title]);
  return allFrenchObject.rows;
}

async function getFrenchDefinitionByEnglishTitle(englishtitle) {
  const allFrenchObject = await query("SELECT * FROM frenchDefinitions WHERE englishtitle ILIKE '%'||$1||'%'", [englishtitle]);
  return allFrenchObject.rows;
}

async function updateFrenchDefinition(id, englishtitle, title, definition, example, links, week) {
  const updateFrenchObject = await query("UPDATE frenchDefinitions SET englishtitle = $2, title = $3, definition = $4, example = $5, links = $6, week = $7 WHERE id = $1 RETURNING *;", [id, englishtitle, title, definition, example, links, week]);
  return updateFrenchObject.rows;
}

async function createFrenchDefinition(englishtitle, title, definition, example, links, week) {
  const createFrenchObject = await query("INSERT INTO frenchDefinitions (englishtitle, title, definition, example, links, week) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;", [englishtitle, title, definition, example, links, week]);
  return createFrenchObject.rows;
}

async function deleteFrenchDefinition(id) {
  const deleteFrenchObject = await query("DELETE FROM frenchDefinitions WHERE id = $1 RETURNING *;", [id]);
  return deleteFrenchObject.rows;
}


export {
  getFrenchDefinitions,
  getFrenchDefinitionByTitle,
  updateFrenchDefinition,
  createFrenchDefinition,
  deleteFrenchDefinition,
  getFrenchDefinitionByEnglishTitle
}
