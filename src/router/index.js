import Vue from 'vue'
import Router from 'vue-router'
import Cadastro from '@/components/cadastro'
import Login from '@/components/login'
import Cerveja from '@/components/cerveja'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cerveja',
      name: 'cerveja',
      component: Cerveja
    }
  ]
})
