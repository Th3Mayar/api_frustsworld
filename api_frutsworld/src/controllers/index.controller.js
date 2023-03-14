import {pool} from "../db.js"

export const ping = async(req,  res) => {
    //const [T_Producto] = await 
    const [result] = await pool.query("SELECT 'pong' AS result")
    res.json(result[0])
}