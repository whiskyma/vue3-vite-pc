import request from './http'
import { ElMessage, ElMessageBox } from 'element-plus'
import router from '../router';
// 时间戳转换
export const formatDate = (v: string) => {
    let p = new Date(v),
        y = p.getFullYear(),
        MM = p.getMonth()+1,
        d = p.getDate(),
        h = p.getHours(),
        m = p.getMinutes(),
        s = p.getSeconds();
    let fm = (t:any) => t<10?('0'+t):t;
    return fm(y)+'-'+fm(MM)+'-'+fm(d)+' '+fm(h)+':'+fm(m)+':'+fm(s);
}

// 清除首尾空的字符串
export const trim = ((val: string) => {
    return val&&val.replace(/\s/g, "").toLowerCase();
})

// 背景图片
export const imgBg = (url: string) =>{
    if(!url) return false
    if(/^http/.test(url)){
        if(!url.includes('public/images')) window.open(url)
    }
    return 'background-image:url(' + url + ')'
}

// 路由跳转方法
export const link = (url: string) => {
    if(!url) return
    if(/^http/.test(url)){
        window.open(url);
    }else{
        router.push(url);
    }
}

// elmessageBox
export const elmessageBox = (msg: string, title: string = '提示', fun: any) => {
    ElMessageBox.alert(msg, title, {
        confirmButtonText: /重新登录/.test(msg) ? '重新登录' : '确定',
        callback: fun,
    })
}

// elMessage----type：success,warning,error
export const elMessage = (msg: string, msgType: any = 'success') => {
    ElMessage({
        message: msg,
        type: msgType
    })
}

// get方法
export const get = ((url:string, param:any) =>{
    if(param){
        let nd = "?";
        let xx = Object.entries(param);
        xx.forEach((val) => {
            if(val[1] || val[1] == 0){
                nd+=val[0]+'='+val[1]+'&'
            }
        });
        url = url+nd.replace(/&$/,'');
    }
    return request({url: url, method: 'get'})
})

// post方法
export const post = ((url:string, param:any) =>{
    if(param){
        return request({url: url, method: 'post', data: param})
    }
})

// 防抖函数--调用防抖函数（触发事件后在1秒内函数只能执行一次）
// es6 注意点：获取入参...args(es5是arguments)
export const debounce = (fn: any, interval = 1500, ...args: any[]) => {
  let timer: any;
  const gapTime = interval;
  return function () {
    clearTimeout(timer);
    timer = setTimeout( () => {
      fn.call(this, args);
    }, gapTime);
  };
};

// 节流函数--调用节流函数（首次点击后触发打印，2秒内点击按钮都不会触发，2秒后再次点击触发）
// es6 注意点：获取入参...args(es5是arguments)
export const throttle = (fn: any, interval = 1500, ...args: any[]) => {
  let enterTime = 0;
  const gapTime = interval;
  return function () {
    const backTime: any = new Date();
    if (backTime - enterTime > gapTime) {
      fn.call(this, args);
      enterTime = backTime;
    }
  };
};