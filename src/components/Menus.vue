<template>
  <div class="sf-menus">
    <div
      class="sf-menu-item sf-menu-item__hover"
      @click="onRouterLink('/home')"
    >
      <n-icon size="18" :component="HomeIcon" /><span>首页</span>
    </div>
    <div
      class="sf-menu-item sf-menu-item__hover"
      @click="onRouterLink('/concern')"
    >
      <n-icon size="18" :component="HeartIcon" /><span>关注</span>
    </div>
    <div class="sf-slider"></div>
    <div
      class="sf-menu-item sf-menu-item__hover"
      @click="onRouterLink('/history')"
    >
      <n-icon size="18" :component="ExtensionPuzzleIcon" /><span>观看历史</span>
    </div>
    <div
      class="sf-menu-item sf-menu-item__hover"
      @click="onRouterLink('/collection')"
    >
      <n-icon size="18" :component="ThumbsIcon" /><span>收藏</span>
    </div>
    <div class="sf-slider"></div>
    <!-- <div class="sf-menu-item"><span class="sf-text-bold">特色频道</span></div>
    <div class="sf-menu-item sf-menu-item__hover" v-for="menu of menus">
      <n-icon size="18" :component="menu.icon" />
      <span class="sf-menu-text">{{ menu.name }}</span>
    </div> -->
  </div>
</template>
<script setup>
import { reactive, h } from "vue";
import {
  HomeSharp as HomeIcon,
  BookOutline as BookIcon,
  ThumbsUpSharp as ThumbsIcon,
  HeartCircleSharp as HeartIcon,
  ExtensionPuzzle as ExtensionPuzzleIcon,
  MusicalNoteOutline as MusicIcon,
  ReceiptOutline as ReceiptIcon,
  GameControllerOutline as GameIcon,
  FastFoodOutline as FoodIcon,
  TerminalOutline as TerminalIcon,
  RocketOutline as RocketIcon,
  CarOutline as CarIcon,
  FootballOutline as FootballIcon,
  StarOutline as StarIcon,
  LanguageOutline as LanguageIcon,
} from "@vicons/ionicons5";
import { renderIcon } from "../utils/render";

import { useRouter } from "vue-router";

const menus = reactive([
  { name: "音乐", icon: renderIcon(MusicIcon) },
  { name: "纪录片", icon: renderIcon(ReceiptIcon) },
  { name: "游戏", icon: renderIcon(GameIcon) },
  { name: "美食", icon: renderIcon(FoodIcon) },
  { name: "计算机", icon: renderIcon(TerminalIcon) },
  { name: "科技", icon: renderIcon(RocketIcon) },
  { name: "汽车", icon: renderIcon(CarIcon) },
  { name: "体育", icon: renderIcon(FootballIcon) },
  { name: "军事", icon: renderIcon(StarIcon) },
  { name: "文化", icon: renderIcon(BookIcon) },
]);

// 路由跳转
const router = useRouter();

function onRouterLink(path) {
  router.push({ path: path });
}
</script>
<style lang="scss" scoped>
.sf-menus {
  display: flex;
  flex-direction: column;
  place-items: center;

  .sf-menu-item {
    width: 100px;
    font-size: 16px;
    padding: 8px 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    gap: 10px;

    &__hover:hover {
      background-color: #f1f1f1;
    }
  }
}

.sf-slider {
  height: 1px;
  width: 120px;
  background: #f1f1f1;
}
</style>
