import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://app.econverse.com.br",
        changeOrigin: true,
        rewrite: () =>
          "/teste-front-end/junior/tecnologia/lista-produtos/produtos.json",
      },
    },
  },
});
