import { describe, it, expect, vi } from "vitest";

// Mock completo del módulo antes de importarlo
vi.mock("../../src/services/hello.service.ts", () => ({
  getMessage: () => "Hola mundo mock"
}));

// Importamos el módulo ya mockeado
import * as helloService from "../../src/services/hello.service.ts";

describe("Hola Mundo con vi.mock", () => {
  it("devuelve mensaje mockeado", () => {
    expect(helloService.getMessage()).toBe("Hola mundo mock");
  });
});
