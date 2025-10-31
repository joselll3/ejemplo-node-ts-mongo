import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,                     // describe, it, expect global
    environment: "node",               // Node.js environment
    include: ["tests/**/*.test.ts"],   // Patrón para tus tests
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/**/*"]
    }
  }
});



