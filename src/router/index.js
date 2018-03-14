import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About/About'
import Home from '@/components/Home'
import HeaderHome from '@/components/Header/HeaderHome'
import HeaderPage from '@/components/Header/HeaderPage'
import Portfolio from '@/components/Portfolio/Portfolio'
import Categories from '@/components/Portfolio/AllCategories'
import Category from '@/components/Portfolio/Category'
import Project from '@/components/Portfolio/Project'
import WebLink from '@/components/Portfolio/WebLink'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        'header-home': HeaderHome,
      }
    },
    {
      path: '/about',
      name: 'About',
      components: {
        default: About,
        'header-page': HeaderPage
      }
    },
    {
      path: '/portfolio',
      components: {
        default: Portfolio,
        'header-page': HeaderPage
      },
      children: [
        { path: '', component: Categories, name: 'Portfolio'},
        { path: '/category/:slug', component: Category, name: 'Category', props: true },
        { path: '/project/:slug', component: Project, name: 'Project', props: true },
        { path: '/project/:slug/weblink?:url', component: WebLink, name: 'WebLink', props: true }
      ]
    },
    {
      path: '/404',
      component: NotFound
    },
    //catch all route
    { path: "*", redirect:'404', component: NotFound }
  ]
})
