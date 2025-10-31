import { Request, Response } from "express";
import * as userService from "../services/users.service.js";

export const getUsers = async(req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const getUser = async(req: Request, res: Response) => {
  const user = await userService.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  res.json(user);
};


export const createUser = async (req: Request, res: Response) => {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({ message: "El campo 'nombre' es obligatorio" });
    }

    const user = await userService.createUser(nombre);
    res.status(201).json(user);
  } catch (err) {
    console.error("Error al crear usuario:", err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};