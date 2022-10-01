<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Menus from "./components/Menus.vue";
import { ref } from "vue";
import useMainStore from "@store/mainStore";
const store = useMainStore();
</script>

<template>
  <n-dialog-provider>
    <n-message-provider>
      <n-space vertical>
        <n-layout>
          <n-layout-header :inverted="store.inverted" bordered>
            <Header />
          </n-layout-header>
          <n-layout has-sider>
            <n-layout-sider
              bordered
              :width="160"
              :native-scrollbar="false"
              :inverted="inverted"
            >
              <Menus />
            </n-layout-sider>
            <n-layout class="sf-page-container" />
          </n-layout>
        </n-layout>
      </n-space>
    </n-message-provider>
  </n-dialog-provider>
</template>
