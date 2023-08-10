import App from '../App.vue'
import { createApp } from 'vue';
const app = createApp(App)

import{
        formatDate,
        trim,
        link,
        imgBg,
        elmessageBox,
        elMessage,
        // setLocal,
        // getLocal,
        // remLocal,
        get,
        post,
        // message,
        // messageBox
    } from './com';
// app.config.globalProperties.$formatDate = formatDate;
// app.config.globalProperties.$trim = trim;
// app.config.globalProperties.$link = link;
// app.config.globalProperties.$imgBg = imgBg;
export default {
    install: (app:any) =>
    {
        app.config.globalProperties.$formatDate = formatDate;
        app.config.globalProperties.$trim = trim;
        app.config.globalProperties.$link = link;
        app.config.globalProperties.$imgBg = imgBg;
        app.config.globalProperties.$elmessageBox = elmessageBox;
        app.config.globalProperties.$elMessage = elMessage;
        // app.config.globalProperties.$setLocal = setLocal;
        // app.config.globalProperties.$getLocal = getLocal;
        // app.config.globalProperties.$remLocal = remLocal;
        app.config.globalProperties.$get = get;
        app.config.globalProperties.$post = post;
        // app.config.globalProperties.$message = message;
        // app.config.globalProperties.$messageBox = messageBox;

    }
}