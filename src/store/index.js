import { createStore } from 'vuex';

const store = createStore({
  state: {
    menu: false,
  },
  mutations: {
    TOGGLE_MENU(state) {
      state.menu = !state.menu;
    },
  },
});

export default store;
