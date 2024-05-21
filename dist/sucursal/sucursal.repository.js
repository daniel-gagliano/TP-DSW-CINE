import { Sucursal } from "./sucursal.entity.js";
const sucursales = [
    new Sucursal('1', 'Showcase', 'Santa Fe', 'Rosario', 'Junin 313', '3413363235'),
];
export class SucursalRepository {
    findAll() {
        return sucursales;
    }
    findOne(item) {
        return sucursales.find((sucursal) => sucursal.nro_sucursal === item.id);
    }
    add(item) {
        sucursales.push(item);
        return item;
    }
    update(item) {
        const sucursalIdx = sucursales.findIndex((sucursal) => sucursal.nro_sucursal === item.nro_sucursal);
        if (sucursalIdx !== -1) {
            sucursales[sucursalIdx] = { ...sucursales[sucursalIdx], ...item };
        }
        return sucursales[sucursalIdx];
    }
    delete(item) {
        const sucursalIdx = sucursales.findIndex((sucursal) => sucursal.nro_sucursal === item.id);
        if (sucursalIdx !== -1) {
            const deletedSucursales = sucursales[sucursalIdx];
            sucursales.splice(sucursalIdx, 1);
            return deletedSucursales;
        }
    }
}
//# sourceMappingURL=sucursal.repository.js.map