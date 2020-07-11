import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      name: 'Login',
      component:()=> import('../views/login/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component:()=>import('../views/register/register')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(store.state.loginState);
  if (to.name === 'Register') {
    next();
  } else if (to.name !== 'Login' &&!store.state.loginState ){
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router
