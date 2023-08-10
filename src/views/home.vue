<template lang="pug">
comBanner
comNotice
.shopShow
    .shop-tl 商品推荐
    .shop-item(v-if="shopList")
        li(v-for="(it,inx) in shopList", :key="inx")
            .imgBox
                .imgBg(:style="$imgBg(it.imageUrl)")
            p {{it.content}}
h3 换肤 / 切换样式主题 方式1：
button(@click="changeTheme('Moccasin')") 换肤为Moccasin
button(@click="changeTheme('#1E90FF')") 换肤为#1E90FF
button(@click="changeTheme('#00FF7F')") 换肤为#00FF7F
button(@click="changeTheme('DeepPink')") 换肤为DeepPink
button.myButton 我是一个可以换肤的按钮
.myDiv 我是一个可以换肤的div
button(@click="onClick") 登录
</template>

<script setup lang="ts">
import comBanner from '@com/comBanner.vue'
import comNotice from '@com/comNotice.vue'
import { getCurrentInstance, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import { debounce, throttle  } from '@/utils/com'


const { proxy }: any = getCurrentInstance()
const router = useRouter()
const RouterName = ref(router.currentRoute.value.path)
// const shopList: any = ref([{
//     title: '阿斯蒂芬萨芬阿斯蒂芬阿斯蒂芬水岸东方',
//     src: 'http://mqy5878.cn/public/images/banner/20100822_015.jpg'
// }, {
//     title: '岸东方',
//     src: 'http://mqy5878.cn/public/images/banner/WechatIMG94.jpeg'
// }, {
//     title: '阿瓦尔我饿确认完二恶',
//     src: 'http://mqy5878.cn/public/images/banner/20100822_015.jpg'
// }, {
//     title: '是阿瓦尔我饿确认完二恶',
//     src: 'http://mqy5878.cn/public/images/banner/20100822_015.jpg'
// }, {
//     title: '来看看认完二恶',
//     src: 'http://mqy5878.cn/public/images/banner/20100822_015.jpg'
// }])
const options: any = ref({
    page: 1,
    pageSize: 10
})
const shopList: any = ref([])

onMounted(() =>{
    // getData()
})
const getData = function (){
    proxy.$get('activity/getActivity', options.value).then((res: any) =>{
        shopList.value = res.list
    });
}
// 切换主题方式1：修改全局CSS变量
let changeTheme = (color: string|null) => {
    document.documentElement.style.setProperty("--theme_bg_color", color);
    document.documentElement.style.setProperty("--theme_button_color", color);
};
// return { changeTheme };

// 点击事件
const onClick = debounce(() => {
    console.log(1234);
});



</script>
<style scoped>
.myButton {
    background: var(--theme_bg_color);
}

.myDiv {
    background: var(--theme_button_color);
    width: 200px;
    height: 200px;
}
button {
    background: #ddd;
    width: 100px;
    height: 45px;
    border-radius: 8px;
    cursor: pointer;
}
</style>