import {pool} from '../db.js'

export const getProduct = (req,  res) => res.send('Obteniendo productos')

export const createProduct = async (req,  res) => {
    const {Nombre, Precio_Unitario} = req.body
    const [rows] = await pool.query('INSERT INTO T_Producto (Nombre, Precio_Unitario) VALUES (?, ?)', [Nombre, Precio_Unitario]);
    console.log(rows)
    res.send({
        ID_Producto: rows.insertId,
        Nombre,
        Precio_Unitario
    })
}

export const updateProduct = (req,  res) => {res.send('Actualizando')}
export const deleteProduct = (req,  res) => res.send('Eliminando productos')