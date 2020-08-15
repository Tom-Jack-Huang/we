import axios from 'axios'
import qs from 'qs'
import {Message} from 'element-ui';


const instance = axios.create({
    baseURL: "/api",
    timeout: 1000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});
//
// instance.interceptors.request.use(config => {
//     // loading
//     return config
// }, error => {
//     return Promise.reject(error)
// })
//
// instance.interceptors.response.use(response => {
//     return response
// }, error => {
//     return Promise.reject(error)
// })

function checkStatus(response) {
    // loading
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response.data;
        // 如果不需要除了data之外的数据，可以直接 return response.data
    }
}

function checkCode(res) {
    console.log(res);
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status === 500) {
        Message.error("服务器内部错误");
    }

    return Promise.reject(res);
}

function post(url, data) {
    return instance({
        method: 'post',
        url,
        data: qs.stringify(data),
    }).then((response) => {
        return checkStatus(response);
    }).catch((error) => {
        return checkCode(error.response);
    });
}

function get(url, params) {
    return instance({
        method: 'get',
        url,
        params,
    }).then((response) => {
        return checkStatus(response);
    }).catch((error) => {
        return checkCode(error.response);
    });
}

export default {
    post,
    get
}