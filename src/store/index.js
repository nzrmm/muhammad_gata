import { createStore } from 'vuex';
import { projects } from '@/data/data.js';

const store = createStore({
  state: {
    menu: false,
    projects: projects,
  },
  mutations: {
    TOGGLE_MENU(state) {
      state.menu = !state.menu;
    },
  },
});

export default store;
