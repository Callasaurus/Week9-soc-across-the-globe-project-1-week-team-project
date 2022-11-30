import { pool } from "../index.js"
import { dropTweetsTableDE } from "../helpersDE.js"

try {
    await dropTweetsTableDE();
    console.log("Dropped all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}