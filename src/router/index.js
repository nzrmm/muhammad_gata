import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Blog from '@/views/Blog.vue';
import Project from '@/views/Project/index.vue';
import ProjectDetails from '@/views/Project/details.vue';
import Certificate from '@/views/Certificate.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
    meta: {
      title: 'Project',
    },
  },
  {
    path: '/project/:slug',
    name: 'Project Details',
    component: ProjectDetails,
    meta: {
      title: '',
    },
  },
  {
    path: '/certificate',
    name: 'Certificate',
    component: Certificate,
    meta: {
      title: 'Certificate',
    },
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'Blog',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const docTitle = (document.title = `${to.meta.title} - Muhammad Gata`);

  if (to.params.title) {
    document.title = `${to.params.title} - Muhammad Gata`;
  } else {
    docTitle;
  }

  next();
});

export default router;
