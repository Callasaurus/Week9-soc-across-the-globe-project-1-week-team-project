import { pool } from "../index.js"
import { dropObjectTableDE } from "../helpersDE.js"

try {
    await dropObjectTableDE();
    console.log("Dropped all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}