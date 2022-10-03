import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
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
      "@components": resolve(__dirname, "src/components"),
      "@public": resolve(__dirname, "src/public"),
      "@assets": resolve(__dirname, "src/assets"),
      "@pages": resolve(__dirname, "src/pages"),
      "@utils": resolve(__dirname, "src/utils"),
      "@styles": resolve(__dirname, "src/assets/styles"),
      "@store": resolve(__dirname, "src/store"),
      "@router": resolve(__dirname, "src/router"),
    },
  },
});
