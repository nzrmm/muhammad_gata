import { createStore } from 'vuex';
import { projects } from '@/data/data.js';

const store = createStore({
  state: {
    menu: false,
    projects: projects,
  },
  getters: {
    getProjectBySlug: state => slug => {
      return state.projects.find(project => project.slug === slug);
    },
  },
  mutations: {
    TOGGLE_MENU(state) {
      state.menu = !state.menu;
    },
  },
});

export default store;
