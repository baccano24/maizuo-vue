import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home/Home"
import ComingMovies from "@/pages/home/components/ComingMovies"
import HotMovies from "@/pages/home/components/HotMovies"
import My from "@/pages/my/My"
import Cinema from "@/pages/cinema/Cinema"
import Tehui from "@/pages/tehui/Tehui"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{path:"/films/comingMovies"},
      name: 'Home'
    },
    {
      path:'/films',
      component: Home,
      children:[
        {path:"comingMovies",name:"ComingMovies",component:ComingMovies},
        {path:"hotMovies",name:"HotMovies",component:HotMovies}
      ]
    },
    {
      path:'/my',
      name:'My',
      component:My
    },
    {
      path:'/tehui',
      name:'Tehui',
      component:Tehui
    },
    {
      path:'/cinema',
      name:'Cinema',
      component:Cinema
    }
  ]
})
