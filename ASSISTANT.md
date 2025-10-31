# Guía de estilo y convenciones del proyecto

Este fichero sirve como referencia para asistentes de IA y desarrolladores sobre **cómo escribir código en este proyecto**.

## Lenguaje y entorno

- **Node.js** con **TypeScript**.
- **ES Modules** (`import/export`) en lugar de `require/module.exports`.
- **Async/await** preferido para cualquier operación asíncrona.
- **Vitest** para pruebas unitarias
- Base de datos: MongoDB (driver oficial `mongodb`).
- Editor recomendado: **VSCode**.
- Preinstalación sugerida: `typescript`, `@types/node`, `mongodb`, `express`, `vitest`.


---

## Estructura de carpetas típica
```text
src/
 ├─ controllers/   # Manejo de request/responses
 ├─ services/      # Lógica de negocio y acceso a DB
 ├─ models/        # Interfaces y tipos TS
 ├─ routes/        # Definición de rutas Express
 ├─ db.ts          # Conexión a MongoDB
 └─ app.ts         # Servidor Express principal
tests/