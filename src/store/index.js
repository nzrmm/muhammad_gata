import { createStore } from 'vuex';
import { socials, skills, projects, certificates } from '@/data/data.js';

const store = createStore({
  state: {
    menu: false,
    socials: socials,
    skills: skills,
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
