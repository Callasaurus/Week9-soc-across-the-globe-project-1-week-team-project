import { pool } from "../index.js"
import { populateObjectTableDE } from "../helpersDE.js"

try {
    await populateObjectTableDE();
    console.log("Populated all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}