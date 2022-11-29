import { pool } from "../index.js"
import { dropTweetsTable } from "../helpers.js"

try {
    await dropTweetsTable();
    console.log("Dropped all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}