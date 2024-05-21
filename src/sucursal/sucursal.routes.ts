import { Router } from "express";
import { sanitizeSucursalInput, findAll, findOne, add, update, remove } from "./sucursal.controler.js";


export const sucursalRouter = Router()

sucursalRouter.get('/',findAll)
sucursalRouter.get('/:nro_sucursal',findOne)
sucursalRouter.post('/',sanitizeSucursalInput,add)
sucursalRouter.put('/:nro_sucursal',sanitizeSucursalInput,update)
sucursalRouter.patch('/:nro_sucursal',sanitizeSucursalInput,update)
sucursalRouter.delete('/:nro_sucursal',remove)