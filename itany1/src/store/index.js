import Vue from "vue";
import Vuex from "vuex";
import goods from "./modules/goods";
import ratings from "./modules/ratings";
import sellers from "./modules/seller";
import getters from "./getters";
import actions from "./actions";
import types from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  actions,
  types,
  modules: {
    sellers,
    goods,
    ratings
  }
});
