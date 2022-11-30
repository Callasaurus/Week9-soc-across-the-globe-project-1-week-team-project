import { pool } from "../index.js"
import { createObjectTableDE } from "../helpersDE.js"

try {
    await createObjectTableDE();
    console.log("Created all tables")
} catch (err) {
    console.log(err)
} finally {
    await pool.end()
}