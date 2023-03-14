import express from 'express'
import productRoutes from './routes/productos.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())
app.use(indexRoutes)
app.use(productRoutes)

app.listen(5000)
console.log('Server runing on port 5000')