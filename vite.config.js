import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(ttf|woff|woff2|eot|otf)$/.test(assetInfo.name)) {
            return "fonts/[name]-[hash][extname]"; // 输出到 fonts 文件夹
          }
          return "[name]-[hash][extname]";
        },
      },
    },
  },
});
