import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import "element-plus/theme-chalk/el-message.css";
// import "element-plus/theme-chalk/el-message-box.css"; 
// import "element-plus/dist/index.css";
const app = createApp(App)

import '@styl/app.styl'
import comUtils from './utils/index'

// 统一注册Icon图标 
// for (let key in ELIcons){
//     app.component(key, ELIcons[key])
// }
for (const [key, component] of Object.entries(ElementPlusIconsVue)){
    app.component(key, component)
}
app.use(router).use(comUtils).mount('#app')
