import { pool } from "../index.js"
import { dropObjectTableES } from "../helpersES.js"

try {
    await dropObjectTableES();
    console.log("Dropped all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}