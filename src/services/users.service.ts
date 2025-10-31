
import { ObjectId } from "mongodb";
import { User } from "../models/users";
import { getDB } from "../dbs";

// Mapear documento Mongo a User
const mapUser = (doc: any): User => ({
  id: doc._id.toString(),
  nombre: doc.nombre
});

// Obtener todos los usuarios
export const getAllUsers = async (): Promise<User[]> => {
  const db = getDB();
  const users = await db.collection("users").find().toArray();
  return users.map(mapUser);
};

// Obtener usuario por id
export const getUserById = async (id: string): Promise<User | null> => {
  const db = getDB();
  const user = await db.collection("users").findOne({ _id: new ObjectId(id) });
  if (!user) return null;
  return mapUser(user);
};

// Crear usuario
export const createUser = async (nombre: string): Promise<User> => {
  const db = getDB();
  const result = await db.collection("users").insertOne({ nombre });
  return {
    id: result.insertedId.toString(),
    nombre
  };
};

