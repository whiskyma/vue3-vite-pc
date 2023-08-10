<template lang="pug">
.comBanner
    el-carousel(v-if="bannerList")
        el-carousel-item(v-for="(it,inx) in bannerList", :key="inx")
            .imgBg(:style="$imgBg(it.imageUrl)")
            //- .imgBg(:style="{'background-image': `url(${it.src})`}")
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router: any = useRouter()
const { proxy }:any = getCurrentInstance()
const options: any = ref({
    page: 1,
    pageSize: 10
})
// const bannerList: any = ref([{
//     title: '首页',
//     src: 'http://mqy5878.cn/public/images/banner/20100822_015.jpg'
// }, {
//     title: '分类',
//     src: 'http://mqy5878.cn/public/images/banner/WechatIMG94.jpeg'
// }, {
//     title: '优惠活动',
//     src: 'http://mqy5878.cn/public/images/banner/20100822_015.jpg'
// }])
const bannerList: any = ref([])


onMounted(() =>{
    // getData()
})
const getData = function (){
    proxy.$get('activity/getActivity', options.value).then((res: any) =>{
        bannerList.value = res.list
    });
}

</script>
<style lang="stylus" scoped>
>>>.el-carousel__button
    width: 8px
    height: 8px
    border-radius: 50%
</style>