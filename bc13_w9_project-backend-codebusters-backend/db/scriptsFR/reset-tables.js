import { pool } from "../index.js"
import { resetObjectTableFR } from "../helpersFR.js"

try {
    await resetObjectTableFR();
    console.log("Reset all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}