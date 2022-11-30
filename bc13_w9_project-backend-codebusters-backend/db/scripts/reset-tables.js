import { pool } from "../index.js"
import { resetObjectTable } from "../helpers.js"

try {
    await resetObjectTable();
    console.log("Reset all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}