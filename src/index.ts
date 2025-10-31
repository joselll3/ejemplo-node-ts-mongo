import express, { Application } from "express";
import usersRouter from "./routes/users.routes";
import { connectDB } from "./dbs";

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use("/api/users", usersRouter);


// Función para inicializar la DB y luego levantar el servidor
async function startServer() {
  await connectDB(); // 🔹 Espera a que Mongo se conecte antes de aceptar requests
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
}

// Inicia la app
startServer();