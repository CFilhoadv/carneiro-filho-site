import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    allowedHosts: [
      'localhost',
      '5173-imrib6lakd5du9chnk199-d5a63d21.manusvm.computer',
      '.manusvm.computer'
    ]
  }
})
