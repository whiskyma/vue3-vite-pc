<template lang="pug">
.comNotice
    .notbox
        el-icon
            BellFilled
        ul(v-if="noticeList", :class="{'animate-up': animateUp}")
            li(v-for="(it,inx) in noticeList", :key="inx", @mouseenter="stopFn", @mouseleave="startFn", @click="$elmessageBox(it.src, it.title)") {{it.src}}
        p(@click="$link('/notice')") 更多
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router: any = useRouter()
const { proxy }: any = getCurrentInstance()
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
const timer: any = ref(false)
const animateUp: any = ref(false)
onMounted(() => {
    timer.value = setInterval(scrollAnimat, 2000);
})

const scrollAnimat = ()=> {
    animateUp.value = true
    setTimeout(() => {
        noticeList.value.push(noticeList.value[0])
        noticeList.value.shift()
        animateUp.value = false
    },1000)
}

const stopFn = () => {
    clearInterval(timer.value)
}
const startFn = () => {
    timer.value = setInterval(scrollAnimat, 2000);
}

</script>