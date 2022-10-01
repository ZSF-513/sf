import { defineStore } from "pinia";

const userMainStore = defineStore("main", {
  state: () => ({
    inverted: false,
    globalKeyWords: "", // 全局关键字
  }),
  actions: {
    setInverted: (cb) => {
      this.inverted = !this.inverted;
    },
  },
});

export default userMainStore;
