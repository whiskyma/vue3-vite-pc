<template lang="pug">
footer
    .foo1
        img(src="../assets/images/wechat.jpg")
        ul
            li
                router-link(to='/') 首页
            li
                router-link(to='/help') 客服电话
            li
                router-link(to='/help') 帮助中心
    .foo2 Copyright 2022© 马景航 All Rights Reserved | 
        a(href="https://beian.miit.gov.cn/", target="_blank") 鄂ICP备2022013500号-2
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router';
const router: any = useRouter()

</script>
