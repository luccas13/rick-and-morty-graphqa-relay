// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import relay from "vite-plugin-relay";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), relay, tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias para la carpeta "src"
    },
  },
});
