// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import relay from "vite-plugin-relay";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), relay],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias para la carpeta "src"
    },
  },
  define: {
    "process.env": {}, // Esto ayuda a evitar problemas con `process.env` en el código
  },
});
