
import { ObjectId } from "mongodb";
import { User } from "../models/users.js";
import { getUsersCollection } from "../dbs.js";

// Mapear documento Mongo a User
const mapUser = (doc: any): User => ({
  id: doc._id.toString(),
  nombre: doc.nombre
});

// Obtener todos los usuarios
export const getAllUsers = async (): Promise<User[]> => {
  const users = await getUsersCollection().find().toArray();
  return users.map(mapUser);
};

// Obtener usuario por id
export const getUserById = async (id: string): Promise<User | null> => {
  const user = await getUsersCollection().findOne({ _id: new ObjectId(id) });
  if (!user) return null;
  return mapUser(user);
};

// Crear usuario
export const createUser = async (nombre: string): Promise<User> => {
  const result = await getUsersCollection().insertOne({ nombre });
  return {
    id: result.insertedId.toString(),
    nombre
  };
};

