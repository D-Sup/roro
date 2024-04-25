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
https://velog.velcdn.com/images/lee7198/post/81447611-8edf-41ad-8032-66bf91ece5e0/image.png