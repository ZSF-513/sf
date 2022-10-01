<template>
  <div class="sf-menus">
    <div class="sf-menu-item">
      <n-icon size="18" :component="HomeIcon" /><span>首页</span>
    </div>
    <div class="sf-menu-item">
      <n-icon size="18" :component="HomeIcon" /><span>关注</span>
    </div>
    <div class="sf-slider"></div>
    <div class="sf-menu-item">
      <n-icon size="18" :component="ExtensionPuzzleIcon" /><span>观看历史</span>
    </div>
    <div class="sf-menu-item">
      <n-icon size="18" :component="HomeIcon" /><span>收藏</span>
    </div>
    <div class="sf-slider"></div>
    <div class="sf-menu-item"><span class="sf-text-bold">特色频道</span></div>
    <div class="sf-menu-item" v-for="menu of menus">
      <n-icon size="18" :component="menu.icon" />
      <span class="sf-menu-text">{{ menu.name }}</span>
    </div>
  </div>
</template>
<script setup>
import { reactive, h } from "vue";
import {
  HomeSharp as HomeIcon,
  BookOutline as BookIcon,
  ExtensionPuzzle as ExtensionPuzzleIcon,
} from "@vicons/ionicons5";
import { renderIcon } from "../utils/render";

const menus = reactive([
  { name: "电影", icon: renderIcon(BookIcon) },
  { name: "电影", icon: renderIcon(BookIcon) },
  { name: "电影", icon: renderIcon(BookIcon) },
  { name: "电影", icon: renderIcon(BookIcon) },
  { name: "电影", icon: renderIcon(BookIcon) },
  { name: "电影", icon: renderIcon(BookIcon) },
  { name: "电影", icon: renderIcon(BookIcon) },
  { name: "电影", icon: renderIcon(BookIcon) },
  { name: "电影", icon: renderIcon(BookIcon) },
  { name: "电影", icon: renderIcon(BookIcon) },
]);
</script>
<style lang="scss" scoped>
.sf-menus {
  display: flex;
  flex-direction: column;
  place-items: center;
  .sf-menu-item {
    width: 100px;
    font-size: 16px;
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}

.sf-slider {
  height: 1px;
  width: 120px;
  background: #f1f1f1;
  margin-top: 10px;
}
</style>
