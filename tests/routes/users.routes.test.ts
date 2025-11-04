import express, { Request, Response } from "express";
import supertest from "supertest";
import { describe, it, vi, beforeEach, expect } from "vitest";

vi.mock("../../src/controllers/users.controller.js");

import * as usersController from "../../src/controllers/users.controller.js";

const getUsersMock = vi.mocked(usersController.getUsers);
const getUserMock = vi.mocked(usersController.getUser);
const createUserMock = vi.mocked(usersController.createUser);

import router from "../../src/routes/users.routes";

let app: ReturnType<typeof express>;

beforeEach(() => {
  app = express();
  app.use(express.json());
  app.use("/users", router);
  vi.clearAllMocks();

  const mockResponse = async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json({ ok: true });
  };

  (getUsersMock as any).mockImplementation(mockResponse);
  (getUserMock as any).mockImplementation(mockResponse);
  (createUserMock as any).mockImplementation(mockResponse);
});

describe("users.routes (Plan B - integration-lite)", () => {
  it("GET /users llama a getUsers", async () => {
    await supertest(app).get("/users").expect(200);
    expect(getUsersMock).toHaveBeenCalled();
  });

  it("GET /users/:id llama a getUser", async () => {
    await supertest(app).get("/users/123").expect(200);
    expect(getUserMock).toHaveBeenCalled();
  });

  it("POST /users llama a createUser", async () => {
    await supertest(app).post("/users").send({ nombre: "Juan" }).expect(200);
    expect(createUserMock).toHaveBeenCalled();
  });
});
