import { pool } from "../index.js"
import { populateTweetsTableDE } from "../helpersDE.js"

try {
    await populateTweetsTableDE();
    console.log("Populated all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}