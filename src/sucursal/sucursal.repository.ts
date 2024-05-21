import { Repository } from "../shared/repository.js";
import { Sucursal } from "./sucursal.entity.js";

const sucursales = [    
    new Sucursal(   
    '1',
    'Showcase',
    'Santa Fe',
    'Rosario',
    'Junin 313',
    '3413363235'
),
]




export class SucursalRepository implements Repository<Sucursal>{
    
     public findAll(): Sucursal[] | undefined {
        return sucursales        
    }

     public findOne(item: { id: string; }): Sucursal | undefined {
        return sucursales.find((sucursal)=>sucursal.nro_sucursal === item.id)        
    }

     public add(item: Sucursal): Sucursal | undefined {
        sucursales.push(item)
        return item        
    }

     public update(item: Sucursal): Sucursal | undefined {
        const sucursalIdx = sucursales.findIndex((sucursal)=>sucursal.nro_sucursal === item.nro_sucursal)

        if(sucursalIdx!== -1){
                sucursales[sucursalIdx] = {...sucursales[sucursalIdx], ...item}
        }
        return sucursales[sucursalIdx]                
    }

     public delete(item: { id: string; }): Sucursal | undefined {
        const sucursalIdx = sucursales.findIndex((sucursal)=>sucursal.nro_sucursal === item.id)
        if(sucursalIdx!==-1){
            const deletedSucursales = sucursales[sucursalIdx]
            sucursales.splice(sucursalIdx,1)
            return  deletedSucursales
        }        
    }
}