import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rootDirs: ["./src"],
  resolve: {
    alias: [
      { find: '@assets', replacement: '/assets' },
      { find: '@components', replacement: '/components' },
      { find: '@pages', replacement: '/pages' },
    ],
  },
});
