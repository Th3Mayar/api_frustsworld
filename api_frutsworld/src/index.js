import express from 'express'

const app = express()

app.get('/Productos', (req,  res) => res.send('Obteniendo productos'))

app.post('/Productos', (req,  res) => res.send('Creando productos'))

app.put('/Productos', (req,  res) => res.send('Actualizando'))

app.delete('/Productos', (req,  res) => res.send('Eliminando productos'))

app.listen(5000)

console.log('Server running on port 5000')