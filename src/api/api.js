import http from "@/utils/http";

const loginApi = (param) => {
    return http.post('/userInfo/login', param);
}
const registerApi = (param) => {
    return http.post('/userInfo/register', param);
}
export default {
    loginApi,
    registerApi
}