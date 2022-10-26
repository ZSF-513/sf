<template>
  <n-space vertical>
    <div class="article-edit__head">
      <div class="sf-edit__title">
        <n-input
          v-model:value="articleTitle"
          type="text"
          placeholder="标题"
          size="large"
        />
      </div>
      <div class="sf-submit">
        <n-button tertiary round type="success" size="large" @click="onSubmit">
          提交
        </n-button>
      </div>
    </div>
  </n-space>

  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="min-height: 760px; overflow-y: hidden"
      v-model="articleHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script setup>
import { onBeforeUnmount, ref, shallowRef, onMounted, watch } from "vue";
import { useMessage } from "naive-ui";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import articleApi from "@apis/article";

const message = useMessage();
const { proxy } = getCurrentInstance();

// 文章标题
const articleTitle = ref("");

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 内容 HTML
const articleHtml = ref("");
watch(articleHtml, (newHtml, oldHtml) => {
  console.log("new", newHtml, "old", oldHtml);
});

// 模拟 ajax 异步获取内容
onMounted(() => {});

const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

// 提交文章
function onSubmit() {
  if (!articleTitle.value) return message.error("文章标题不能为空");
  if (!articleHtml.value) return message.error("文章内容不能为空");
  try {
    console.log("article.create", articleApi.create);
    const res = proxy.$axios({
      method: "post",
      url: articleApi.create,
      data: {
        html: articleHtml.value,
        title: articleTitle.value,
      },
    });
    console.log("文章提交结果", res);
  } catch (e) {}
}
</script>
<style lang="scss">
.article-edit__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  .sf-edit__title {
    flex: 1;
  }
  .sf-submit {
    width: 200px;
    text-align: center;
  }
}
</style>
