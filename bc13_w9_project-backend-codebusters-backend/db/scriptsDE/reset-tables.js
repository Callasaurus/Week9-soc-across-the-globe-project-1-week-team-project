import { pool } from "../index.js"
import { resetTweetsTableDE } from "../helpersDE.js"

try {
    await resetTweetsTableDE();
    console.log("Reset all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}