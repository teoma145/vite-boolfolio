import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './views/AppHome.vue'
import AppProject from './views/AppProject.vue'
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
    
  
  ],
});

export default router;
