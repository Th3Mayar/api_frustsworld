import {keys} from "./keys.js"
import mysql2 from 'mysql2/promise'


export const pool = mysql2.createPool({
    host: keys.msqlHost,
    user: keys.msqlUser,
    password: keys.msqlPassword,
    port: keys.msqlPort,
    database: keys.msqlDatabase,
})
