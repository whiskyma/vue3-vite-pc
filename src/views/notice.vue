<template lang="pug">
.notice(v-if="noticeList")
    el-breadcrumb(:separator-icon='ArrowRight')
        el-breadcrumb-item(:to="{ path: '/' }") 首页
        el-breadcrumb-item {{RouterName}}

    li(v-for="(it,inx) in noticeList", :key="inx", @click="$elmessageBox(it.src, it.title)")
        .p1
            span {{it.title}}
            span {{it.time}}
        .p2 {{it.src}}
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const RouterName = ref(router.currentRoute.value.meta.title)
const noticeList: any = ref([{
    title: '优惠活动',
    time: '2022-12-12 23:23:50',
    src: '1、放大发发阿斯蒂芬阿萨德阿萨德防守打法放大发发阿斯蒂芬阿萨德阿萨德防守打法放大发发阿斯蒂芬阿萨德阿萨德防守打法放大发发阿斯蒂芬阿萨德阿萨德防守打法'
}, {
    title: '优惠活动',
    time: '2022-12-12 23:23:50',
    src: '2、放大发发阿斯蒂芬阿萨德阿萨德防守打法放大发发阿斯蒂芬阿萨德阿萨德防守打法放大发发阿斯蒂芬阿萨德阿萨德防守打法放大发发阿斯蒂芬阿萨德阿萨德防守打法'
}, {
    title: '长期活动',
    time: '2022-11-10 23:23:50',
    src: '3、放大发发阿斯蒂芬阿萨德阿萨德防守打法放大发发阿斯蒂芬阿萨德阿萨德防守打法放大发发阿斯蒂芬阿萨德阿萨德防守打法放大发发阿斯蒂芬阿萨德阿萨德防守打法'
}])

</script>
