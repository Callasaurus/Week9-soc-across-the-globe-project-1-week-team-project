import { pool } from "../index.js"
import { populateObjectTable } from "../helpers.js"

try {
    await populateObjectTable();
    console.log("Populated all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}