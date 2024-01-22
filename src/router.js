import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './views/AppHome.vue'
import AppProject from './views/AppProject.vue'
import SingleProject from './views/SingleProject.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path:'/projects',
      name: 'projects',
      component:AppProject

    },
    {
      path:'/projects/:slug',
      name: 'singleproject',
      component:SingleProject

    },
    
  
  ],
});

export default router;
