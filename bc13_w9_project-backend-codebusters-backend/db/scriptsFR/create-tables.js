import { pool } from "../index.js"
import { createTweetsTableFR } from "../helpersFR.js"

try {
    await createTweetsTableFR();
    console.log("Created all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}