import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/teste-front-end-econverse/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://app.econverse.com.br",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            "/api",
            "/teste-front-end/junior/tecnologia/lista-produtos",
          ),
      },
    },
  },
});
