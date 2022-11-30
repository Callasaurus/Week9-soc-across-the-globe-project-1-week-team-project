import { pool } from "../index.js"
import { dropTweetsTableFR } from "../helpersFR.js"

try {
    await dropTweetsTableFR();
    console.log("Dropped all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}