import { createStore } from 'vuex';
import { projects, certificates } from '@/data/data.js';

const store = createStore({
  state: {
    menu: false,
    projects: projects,
    certificates: certificates,
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
