import { pool } from "../index.js"
import { createTweetsTableDE } from "../helpersDE.js"

try {
    await createTweetsTableDE();
    console.log("Created all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}