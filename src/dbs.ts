import { Db, MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; // Cambia si usas otro puerto o usuario
const client = new MongoClient(uri);

let _db: Db;

/**
 * Conecta a MongoDB y guarda la instancia
 */
export async function connectDB() {
  await client.connect();
  _db = client.db("testdb"); // nombre de tu base de datos
  console.log("Conectado a MongoDB");
}

/**
 * Devuelve la db ya conectada
 */
export function getDB() {
  if (!_db) throw new Error("Base de datos no inicializada. Llama a connectDB primero.");
  return _db;
}
