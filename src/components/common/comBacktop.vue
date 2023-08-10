<template lang="pug">
.comBacktop(v-if="isShow" @click="scrollTop")
    el-icon
        ArrowUpBold
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const isShow: any = ref(false)

onMounted(() =>{
    window.addEventListener('scroll', showBtn, true)
})
const showBtn = () => {
    const _top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    _top > 500 ? isShow.value = true : isShow.value = false
}
const scrollTop = () => {
    document.body.scrollTop = 0;
}
</script>