import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import store from '@/store'

const Home = () => import('@/views/home/HomeView')
const Account = () => import('@/views/account/AccountView')
const Register = () => import('@/views/account/childComps/RegisterView')
const Login = () => import('@/views/account/childComps/LoginView')
const Reserve= () => import('@/views/reserve/ReserveView')
const History= () => import('@/views/history/HistoryView')
const routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    tittle:'Home',
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    tittle:'Login',
    children:[
      {
        path: '',
        redirect:'/account/login',
      },
      {
        path:'login',
        name: 'AccountLogin',
        component:Login
      },
      {
        path:'register',
        name: 'AccountRegister',
        component:Register
      }
    ]
  },
  {
    path: '/reserve',
    name: 'reserve',
    component: Reserve,
    tittle:'Reserve',
  },
  {
    path: '/history',
    name: 'history',
    component: History,
    tittle:'History',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), //history模式
  //history: createWebHashHistory(process.env.BASE_URL), //hash模式
  routes
})

router.beforeEach((to,from,next) =>{
  document.title = to.name
  to.meta.keepAlive = true
  store.commit("showLoading",true)
  next();
})

router.afterEach((to,from,next) =>{
  store.commit("showLoading",false)
})
export default router
