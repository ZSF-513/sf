<template>
    <div class="sf-home">home
        <VideoItem />
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Home'
})
</script>
<script setup>
import VideoItem from '@components/VideoItem.vue';
</script>
<style lang="scss" scoped>

</style>