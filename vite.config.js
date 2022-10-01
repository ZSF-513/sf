import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 按需自动引入NaiveUi组件
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@component": "./src/component",
      "@public": "./src/public",
      "@assets": "./src/assets",
      "@pages": "./src/pages",
      "@utils": "./src/utils",
      "@styles": "./src/assets/styles",
      "@store": "./src/store",
    },
  },
});
