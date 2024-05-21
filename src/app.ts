import express from 'express'
import { sucursalRouter } from './sucursal/sucursal.routes.js';


const app = express()
app.use(express.json())

app.use('/api/sucursales',sucursalRouter)


app.use ((_req,res)=>{
return res.status(404).send({message:'No se encuentra URL'})
})

app.listen(3000, ()=>{
    console.log('El servidor esta funcionando en http://localhost:3000')
})