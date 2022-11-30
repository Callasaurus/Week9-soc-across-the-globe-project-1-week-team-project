import { pool } from "../index.js"
import { createObjectTableES } from "../helpersES.js"

try {
    await createObjectTableES();
    console.log("Created all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}