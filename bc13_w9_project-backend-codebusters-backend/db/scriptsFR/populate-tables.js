import { pool } from "../index.js"
import { populateTweetsTableFR } from "../helpersFR.js"

try {
    await populateTweetsTableFR();
    console.log("Populated all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}