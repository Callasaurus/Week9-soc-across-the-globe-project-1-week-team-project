import { pool } from "../index.js"
import { resetTweetsTableES } from "../helpers.js"

try {
    await resetTweetsTableES();
    console.log("Reset all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}