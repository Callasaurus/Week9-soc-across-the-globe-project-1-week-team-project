import { pool } from "../index.js"
import { createTweetsTableES } from "../helpers.js"

try {
    await createTweetsTableES();
    console.log("Created all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}