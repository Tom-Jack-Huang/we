import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/Login')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/register/register')
    },
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/home')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: 'library',
    routes
})

router.beforeEach((to, from, next) => {
    console.log(store.state.loginState);
    // if (to.name === 'Register') {
    //     next();
    // } else if (to.name !== 'Login' && !store.state.loginState) {
    //     next({name: 'Login'});
    // } else {
    //     next();
    // }
    next();
});

export default router
