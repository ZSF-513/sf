<template>
    <div class="fa-video-item">
        <n-space vertical v-if="!props.url">
            <n-skeleton :height="200" width="100%" :sharp="false" />
            <n-space>
                <n-skeleton circle size="medium" />
                <n-skeleton :width="353" size="medium" :sharp="false" />
            </n-space>
            <n-skeleton width="100%" size="medium" :sharp="false" />
        </n-space>
        <div v-else></div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    url: {
        type: String,
        default: ''
    }
})
</script>
<style lang="scss">
.fa-video-item {
    width: 400px;
    height: 320px;
}
</style>