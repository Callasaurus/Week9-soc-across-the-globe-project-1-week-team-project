import { pool } from "../index.js"
import { dropObjectTableFR } from "../helpersFR.js"

try {
    await dropObjectTableFR();
    console.log("Dropped all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}