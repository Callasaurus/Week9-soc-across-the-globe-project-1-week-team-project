import { pool } from "../index.js"
import { dropTweetsTableES } from "../helpers.js"

try {
    await dropTweetsTableES();
    console.log("Dropped all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}