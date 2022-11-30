import { pool } from "../index.js"
import { populateObjectTableFR } from "../helpersFR.js"

try {
    await populateObjectTableFR();
    console.log("Populated all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}