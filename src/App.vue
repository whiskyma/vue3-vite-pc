<template lang="pug"> 
Header
section
    router-view
Footer
comBacktop
</template>

<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import comBacktop from '@com/comBacktop.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

</script>

<style scoped>
:root {
    /* 背景色 */
    --theme_bg_color: red;
    /* 按钮颜色 */
    --theme_button_color: yellowgreen;
}
</style>
