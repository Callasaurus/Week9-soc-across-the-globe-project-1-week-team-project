import { pool } from "../index.js"
import { populateObjectTableES } from "../helpersES.js"

try {
    await populateObjectTableES();
    console.log("Populated all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}