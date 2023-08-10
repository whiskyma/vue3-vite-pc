// createWebHistory 可以理解为history模式，路径不带#
// createWebHashHistory可以理解为hash模式，路径带#
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
    { name: 'Home', path: '/', meta: { title: '首页' }, component: () => import("@views/home.vue") },
    { name: 'Classify', path: '/classify', meta: { title: '分类' }, component: () => import("@/views/classify.vue") },
    { name: 'Brand', path: '/brand', meta: { title: '品牌' }, component: () => import("@/views/brand.vue") },
    { name: 'Discounts', path: '/discounts', meta: { title: '优惠活动' }, component: () => import("@/views/discounts.vue") },
    { name: 'Help', path: '/help', meta: { title: '帮助中心' }, component: () => import("@/views/help.vue") },
    { name: 'LogReg', path: '/logReg', meta: { title: '登录注册' }, component: () => import("@/views/logReg.vue") },
    { name: 'Notice', path: '/notice', meta: { title: '消息中心' }, component: () => import("@/views/notice.vue") },


    { path: '/:pathMatch(.*)*/', redirect: '/' }
]
const router = createRouter({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    // createWebHashHistory模式带#号、createWebHistory模式不带#号
    history: createWebHashHistory(),
    routes,
})

router.beforeEach(async (to:any, from:any) => {
    if(to.name){
        window.document.title = to.meta.title
    }
    document.body.scrollTop = 0;
})

export default router;