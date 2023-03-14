import express from 'express'
import productRoutes from './routes/productos.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())
app.use(indexRoutes)
app.use('/api',productRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint Not Found'
    })
})

app.listen(5000)
console.log('Server runing on port 5000')