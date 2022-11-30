import { pool } from "../index.js"
import { resetObjectTableES } from "../helpersES.js"

try {
    await resetObjectTableES();
    console.log("Reset all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}