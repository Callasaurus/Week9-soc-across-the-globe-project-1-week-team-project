import { pool } from "../index.js"
import { createObjectTable } from "../helpers.js"

try {
    await createObjectTable();
    console.log("Created all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}