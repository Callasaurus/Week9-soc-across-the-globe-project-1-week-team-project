import { pool } from "../index.js"
import { resetTweetsTableFR } from "../helpersFR.js"

try {
    await resetTweetsTableFR();
    console.log("Reset all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}