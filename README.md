# TP-DSW-CINE

Trabajo Práctico de Desarrollo de Software : Aplicación para la gestión de Entradas de Cine <br/>
Comision: 304

## Integrantes

* 42895 - Gagliano, Daniel 
* 39233 - Rohr, Claudio

## Descripción 

La plataforma ofrece una experiencia al usuario permitiéndole explorar la cartelera, seleccionar sus películas preferidas, elegir los asientos y completar la compra en línea.
Para los administradores proporciona las herramientas para gestionar el inventario de entradas y programar los horarios de proyección.<br />

## Primer CRUD: SUCURSAL

	CREATE SUCURSAL: El admin da de alta una sucursal.
	READ SUCURSAL: 	 El admin realiza una consulta de una o muchas sucursales.
	UPDATE SUCURSAL: El admin actualiza los datos de una sucursal (totalmente y parcialmente).
	DELETE SUCURSAL: El admin elimina una sucursal.


## Diagrama de Entidad-Relacion 

https://drive.google.com/file/d/1lukkYYM_x9WASzTJszFzP0C0eT_pA_6D/view?usp=drive_link

## Instalacion
Clonar el repositorio
```
git clone https://github.com/daniel-gagliano/TP-DSW-CINE.git
```
Instalar Dependencias
```
pnpm add -D typescript@5.1.3
pnpm add -D tsc-watch@6.0.4
pnpm add -E -D @types/express @types/node
```
## Servidor
```
# El servidor esta funcionando en:
API: http://localhost:3000

# Iniciar la conexon:
pnpm star:dev

```



