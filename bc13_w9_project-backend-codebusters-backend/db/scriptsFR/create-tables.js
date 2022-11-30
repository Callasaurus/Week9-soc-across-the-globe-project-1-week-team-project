import { pool } from "../index.js"
import { createObjectTableFR } from "../helpersFR.js"

try {
    await createObjectTableFR();
    console.log("Created all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}