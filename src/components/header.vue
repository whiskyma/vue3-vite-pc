<template lang="pug">
header
    ul
        li(v-for="(it,inx) in nav", :key="inx", :class="{'act': path == it.path}", @click="router.push(it.path)") {{it.title}}
        .logbox
            span(@click="router.push('/logReg')") 登录
            span(@click="router.push('/logReg')") 注册
</template>

<script setup lang="ts">

import { ref, getCurrentInstance, watch } from 'vue'
import { useRouter } from 'vue-router';
const router: any = useRouter()
const nav = ref([
    { path: '/', title: '首页' },
    { path: '/classify', title: '分类' },
    { path: '/brand', title: '品牌' },
    { path: '/discounts', title: '优惠活动' },
    { path: '/help', title: '帮助中心' },
])
const path = ref('/')
watch(
    () => router.currentRoute.value.fullPath,
    (to, from) =>{
        path.value = to;
    }
);
</script>
