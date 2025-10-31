import { describe, it, expect, vi } from "vitest";
import * as helloService from "../../src/services/hello.service.js";

describe("Hola Mundo con mock", () => {
  it("Devuelve mensaje real", () => {
    expect(helloService.getMessage()).toBe("Hola mundo real");
  });

  it("Devuelve mensaje mockeado", () => {
    // Mockeamos getMessage
    const mockFn = vi.spyOn(helloService, "getMessage").mockReturnValue("Hola mundo mock");

    expect(helloService.getMessage()).toBe("Hola mundo mock");

    // Restaurar la función original
    mockFn.mockRestore();
    expect(helloService.getMessage()).toBe("Hola mundo real");
  });

});