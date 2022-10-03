<template>
  <div class="sf-header flex-justify__between">
    <div class="left flex-alien__center">
      <span class="sf-title">SaFa</span>
      <n-input-group round class="sf-global-search">
        <n-input v-model:value="globalKeyWords" placeholder="搜索关键字" :style="{ width: '240px' }" />
        <n-button type="primary" ghost @click="handleGlobalSearch">
          搜索
        </n-button>
      </n-input-group>
    </div>
    <div class="right flex-alien__center">
      <div class="sf-header-nav">创造平台</div>
      <span class="sf-slider"></span>
      <div class="sf-header-nav sf-message" @click="handleMessage">
        <n-icon>
          <MessageIcon />
        </n-icon>消息
      </div>
      <div class="sf-header-nav">
        <n-icon>
          <AddIcon />
        </n-icon>发视频
      </div>
      <span class="sf-slider"></span>
      <n-switch v-model:value="inverted" @update:value="handleSetMessage" />
      <n-button type="primary" round class="sf-login" @click="handleLogin">
        登陆
      </n-button>
    </div>
  </div>
  <!-- 登陆弹框 -->
  <n-modal v-model:show="showLoginModal" transform-origin="center">
    <n-card style="width: 600px" title="登陆" :bordered="false" role="dialog" aria-modal="true">
      <template #header-extra>
        <n-button strong secondary circle type="primary" @click="showLoginModal = false">
          <template #icon>
            <n-icon>
              <close-icon />
            </n-icon>
          </template>
        </n-button>
      </template>
      <!-- 登陆表单 -->
      <div class="sf-login">
        <div class="sf-login__left">
          <n-form ref="formRef" :model="loginModel" :rules="loginRules" label-placement="left" label-width="auto"
            require-mark-placement="right-hanging" :style="{
              maxWidth: '320px',
            }">
            <n-form-item path="phone">
              <n-input v-model:value="loginModel.phone" placeholder="请输入手机号" size="large" />
            </n-form-item>
            <n-form-item path="inputValue">
              <n-input-group>
                <n-input v-model:value="loginModel.authCode" placeholder="请输入验证码" size="large" />
                <n-button type="primary" size="large">获取验证码</n-button>
              </n-input-group>
            </n-form-item>
            <n-form-item>
              <n-button type="primary" size="large" block>登陆/注册</n-button>
            </n-form-item>
          </n-form>
        </div>
        <div class="sf-login__right"></div>
      </div>

      <template #footer>
        <div class="sf-other-login">
          其他方式：
          <n-icon :size="24" color="green">
            <logo-wechat />
          </n-icon>
          &nbsp;&nbsp;
          <n-icon :size="24" color="blue">
            <logo-alipay />
          </n-icon>
        </div>
      </template>
    </n-card>
  </n-modal>
  <!--  消息抽屉 -->
  <n-drawer v-model:show="showMessageModal" :width="600" :placement="placement">
    <n-drawer-content title="斯通纳">
      《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
    </n-drawer-content>
  </n-drawer>
</template>
<script setup>
import { ref, h } from "vue";
import { storeToRefs } from "pinia";
import {
  CloseOutline as CloseIcon,
  LogoWechat,
  LogoAlipay,
  ChatbubbleEllipsesSharp as MessageIcon,
  AddCircleSharp as AddIcon
} from "@vicons/ionicons5";
import useMainStore from "@store/mainStore";

const store = useMainStore();
const { inverted, globalKeyWords } = storeToRefs(store);

const activeKey = ref(null);

// 显示模式切换
const message = useMessage();
function handleSetMessage(value) {
  value ? message.info("天黑了") : message.info("天亮了");
}

// 全局搜索
function handleGlobalSearch() {
  console.log("全局搜索", globalKeyWords.value);
}

// 登陆弹框
const loginModel = reactive({
  phone: "",
  authCode: "",
});
const loginRules = reactive({
  phone: "",
  authCode: "",
});
const showLoginModal = ref(false);
function handleLogin() {
  showLoginModal.value = true;
}

//  消息抽屉
const showMessageModal = ref(false);
function handleMessage() {
  showMessageModal.value = true;
}
</script>
<style lang="scss" scoped>
.sf-header {
  height: 60px;
  padding: 10px 20px;
  display: flex;
  place-items: center; // justify-content, align-items简写

  .sf-title {
    font: 800 2em "Gill Sans", sans-serif;
    color: rgb(114, 243, 146);
  }

  .sf-global-search {
    width: 520px;
    margin-left: 20px;
  }

  .sf-login {
    margin-left: 20px;
  }

  .sf-slider {
    display: inline-block;
    width: 1px;
    height: 18px;
    background-color: #f2f2f2;
    margin: 0 10px;
  }

  .sf-header-nav {
    display: flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #f1f1f1;
    }
  }
}

.sf-login {
  display: flex;

  .sf-login__left {
    width: 360px;
  }

  .sf-login-rignt {
    width: 240px;
  }
}

.sf-other-login {
  display: flex;
  place-items: center;
}
</style>
