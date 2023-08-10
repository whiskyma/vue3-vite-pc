import axios from 'axios'
// import store from '@js/store'
import { elMessage, elmessageBox } from './com'
import qs from 'qs'

const service = axios.create({
    baseURL: '/adminapi',
    timeout: 50000
});
service.interceptors.request.use(
    config =>{
        // console.log(config)
        // const token = store.state.token;
        // token && (config.headers.Authorization = token);
        config.data = config.data ? qs.stringify(config.data) : '';
        return config;
    },
    err =>{
        return Promise.reject(err);
    }
);

service.interceptors.response.use(
    response =>{
        let _res = response.data;
        // console.log(_res);
        // console.log(_res.code);
        // token失效处理及用户登录未授权处理（状态码需与后台人员保持一致）
        if(/^(401|-1003|-1009)$/.test(_res.code)){
            // store.dispatch('Logout');
        }
        if(_res.code == 200){
            return Promise.resolve(_res.data || _res);
        }else{
            if (_res.errMsg) elMessage(_res.errMsg, 'error');
            return Promise.resolve(_res.data || _res);
        }
    },
    error =>{
        console.log(error)
        let _status = error.response.status
        if (_status){
            switch (_status){
                case 400:
                    elMessage('错误请求', 'error');
                    break;
                case 401:
                    elmessageBox('未授权,或登录已过期,请重新登录。', '', () =>{
                        // store.dispatch('Logout');
                    })
                    break;
                case 403:
                    elmessageBox('未授权,或登录已过期,请重新登录。', '', () =>{
                        // store.dispatch('Logout');
                    })
                    break;
                case 404:
                    elMessage('请求地址不存在', 'error');
                    break;
                case 500:
                    elMessage('服务器内部错误', 'error');
                    break;
                default:
                    elMessage(error.message ? error.message : '服务器通讯故障', 'error');
            }
        }else{
            elMessage('服务器通讯故障', 'error');
        }
        return Promise.reject(error)
    }
);


export default service;