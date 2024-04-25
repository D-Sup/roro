import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig(({ command, mode }) => {
  const isDevMode = mode === "development";

  return {
    plugins: [react()],
    base: isDevMode ? "/" : "/roro/",
    server: {
      proxy: {
        "/v1": {
          target: "https://maps.googleapis.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/v1/, ""),
          secure: false,
          ws: true,
        },
      },
    },
  };
});
