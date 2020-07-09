import http from "@/utils/http";

const loginApi = (param)=>{
    return http.post('/userInfo/login',param);
}

export default {
loginApi
}