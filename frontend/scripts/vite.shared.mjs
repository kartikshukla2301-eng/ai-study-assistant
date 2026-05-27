import react from "@vitejs/plugin-react";

export const viteConfig = {
  root: process.cwd(),
  configFile: false,
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    proxy: {
      "/api": "http://localhost:5000"
    }
  }
};
