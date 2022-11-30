import { pool } from "../index.js"
import { resetObjectTableDE } from "../helpersDE.js"

try {
    await resetObjectTableDE();
    console.log("Reset all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}