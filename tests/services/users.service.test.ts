import { describe, it, expect, vi, beforeEach } from "vitest";
import { ObjectId } from "mongodb";
import * as userService from "../../src/services/users.service";
import * as dbs from "../../src/dbs";

// Mock de getDB
vi.mock("../../src/dbs");

const mockedGetUsersCollection = vi.mocked(dbs.getUsersCollection);

describe("userService.getUserById", () => {
  const fakeUserId = new ObjectId().toString();
  const fakeUserDoc = { _id: new ObjectId(fakeUserId), nombre: "Juan" };
  let findOneMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    findOneMock = vi.fn();
    mockedGetUsersCollection.mockReturnValue({
      findOne: findOneMock,
    } as any);
  });

  it("debe devolver un usuario cuando existe", async () => {
    findOneMock.mockResolvedValue(fakeUserDoc);

    const user = await userService.getUserById(fakeUserId);

    expect(findOneMock).toHaveBeenCalledWith({ _id: new ObjectId(fakeUserId) });
    expect(user).toEqual({ id: fakeUserId, nombre: "Juan" });
  });

  it("debe devolver null cuando el usuario no existe", async () => {
    findOneMock.mockResolvedValue(null);

    const user = await userService.getUserById(fakeUserId);

    expect(user).toBeNull();
  });
});

describe("userService.getAllUsers", () => {
  const fakeUsers = [
    { _id: new ObjectId().toString(), nombre: "Juan" },
    { _id: new ObjectId().toString(), nombre: "Maria" },
  ];

  let findMock: ReturnType<typeof vi.fn>;
  it("debe devolver todos los usuarios", async () => {
    findMock = vi.fn();
    mockedGetUsersCollection.mockReturnValue({
      find: () => ({
        toArray: vi.fn().mockResolvedValue(fakeUsers),
      }),
    } as any);
    findMock.mockResolvedValue(fakeUsers);

    const users = await userService.getAllUsers();

    expect(users).toEqual([
      { id: fakeUsers[0]._id.toString(), nombre: "Juan" },
      { id: fakeUsers[1]._id.toString(), nombre: "Maria" },
    ]);
  });
});
