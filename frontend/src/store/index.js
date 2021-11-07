import Vue from 'vue'
import Vuex from 'vuex'
import category from "./modules/category";
import dish from "./modules/dish";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        category, dish
    }
})
