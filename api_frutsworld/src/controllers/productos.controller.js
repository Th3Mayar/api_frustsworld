import {pool} from '../db.js'

//FUNCION OBTENER PRODUCTOS - create by Jose Francisco
export const getProducts = async (req,  res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM T_Producto')
        res.json(rows)
    }catch (error){
        return res.status(500).json({
            message: 'Ha ocurrido un error'
        })
    }
}

//OBTENER PRODUCTO - create by Jose Francisco
export const getProduct = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM T_Producto WHERE ID_Producto = ?', [req.params.id])
        if (rows.length <= 0) res.status(404).json({
            message: 'No se encontro el producto'
        })
        res.json(rows[0])
    }catch (error){
        return res.status(500).json({
            message: 'Ha ocurrido un error'
        })
    }
}

//CREAR PRODUCTO - create by Jose Francisco
export const createProduct = async (req,  res) => {
    const {Nombre, Precio_Unitario} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO T_Producto (Nombre, Precio_Unitario) VALUES (?, ?)', [Nombre, Precio_Unitario]);
        console.log(rows)
        res.send({
            ID_Producto: rows.insertId,
            Nombre,
            Precio_Unitario
        })
    }catch (error){
        return res.status(500).json({
            message: 'Ha ocurrido un error'
        })
    }
}

//ELIMINAR PRODUCTO - create by Jose Francisco
export const deleteProduct = async (req,  res) => {
    try {
        const [result] = await pool.query('DELETE FROM T_Producto WHERE ID_Producto = ?', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Producto no encontrado'
        })
    res.sendStatus(204)
    }catch (error){
        return res.status(500).json({
            message: 'Ha ocurrido un error'
        })
    }
}

export const updateProduct = async (req,  res) => {
    const {id} =  req.params
    const {Nombre, Precio_Unitario} = req.body
    try {
        const [result] = await pool.query('UPDATE T_Producto SET Nombre = IFNULL(?, Nombre), Precio_Unitario = IFNULL(?, Precio_Unitario) WHERE ID_Producto = ?', [Nombre, Precio_Unitario, id])
        
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Ha ocurrido un error'
        })

        const [rows] = await pool.query('SELECT * FROM T_Producto WHERE ID_Producto = ?', [id])

        res.json(rows[0])
    }catch (error){
        return res.status(500).json({
            message: 'Ha ocurrido un error'
        })
    }
}