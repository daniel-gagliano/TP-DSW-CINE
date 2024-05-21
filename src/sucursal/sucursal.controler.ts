import { NextFunction, Request, Response } from "express";
import { SucursalRepository } from "./sucursal.repository.js";
import { Sucursal } from "./sucursal.entity.js";

const repository = new SucursalRepository()

function sanitizeSucursalInput(req:Request, res:Response, next:NextFunction){
    req.body.sanitizedInput = {
        nro_sucursal: req.body.nro_sucursal,
        nombre_sucursal: req.body.nombre_sucursal,
        provincia: req.body.provincia,
        localidad: req.body.localidad,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
    }

    Object.keys(req.body.sanitizedInput).forEach((key)=>{
        if (req.body.sanitizedInput[key]===undefined){
            delete req.body.sanitizedInput[key]
        }
    })
    next()
}

function findAll(req:Request, res:Response){
    res.json({data: repository.findAll()})
}

function findOne(req:Request, res:Response){
    const id = req.params.nro_sucursal
    const sucursal = repository.findOne( {id} )
    if(!sucursal){
        return res.status(404).send({message:'No se encuentra esa sucursal'})
    }
    res.json({data:sucursal})
}

function add(req:Request, res:Response){
    const input = req.body.sanitizedInput

    const sucursalInput = new Sucursal(
        input.nro_sucursal,
        input.nombre_sucursal,
        input.provincia,
        input.localidad,
        input.direccion,
        input.telefono
    )
const sucursal = repository.add(sucursalInput)
return res.status(201).send ({message: 'Sucursal creada', data: sucursal})
}

function update(req:Request, res:Response){
    req.body.sanitizedInput.nro_sucursal = req.params.nro_sucursal
    const sucursal = repository.update(req.body.sanitizedInput)

    if(!sucursal){
        return res.status(404).send({messsage:'No se encuentra la Sucursal'})
    }
    return res.status(200).send({message:'Modificacion realizada', data:sucursal})
}

function remove(req:Request, res:Response){
    const id = req.params.nro_sucursal
    const sucursal = repository.delete({id})

    if(!sucursal){
        res.status(404).send({messsage:'No se encuentra la Sucursal'})
    } else
     {res.status(200).send({message:'Se elimino la sucursal'})}

}


export{sanitizeSucursalInput, findAll, findOne, add, update, remove}