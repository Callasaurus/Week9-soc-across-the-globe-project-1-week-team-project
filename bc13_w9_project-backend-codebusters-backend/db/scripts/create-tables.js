import { pool } from "../index.js"
import { createTweetsTable } from "../helpers.js"

try {
    await createTweetsTable();
    console.log("Created all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}