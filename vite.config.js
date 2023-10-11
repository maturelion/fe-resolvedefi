import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rootDirs: ["/"],
  resolve: {
    alias: [
      { find: "@assets", replacement: "src/assets" },
      { find: "@components", replacement: "src/components" },
      { find: "@pages", replacement: "src/pages" },
    ],
  },
});
