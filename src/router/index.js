import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Blog from '@/views/Blog.vue';
import Project from '@/views/Project.vue';
import Certificate from '@/views/Certificate.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
  },
  {
    path: '/certificate',
    name: 'Certificate',
    component: Certificate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
