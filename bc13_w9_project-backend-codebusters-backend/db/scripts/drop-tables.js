import { pool } from "../index.js"
import { dropObjectTable } from "../helpers.js"

try {
    await dropObjectTable();
    console.log("Dropped all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}