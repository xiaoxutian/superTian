import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import user from '../store/modules/user'
import userRoutes from '../store/modules/userRoutes'
export default new Vuex.Store({
    // state: {
    // },
    // getters: {
    // },
    // mutations: {
    // },
    // actions: {
    // },
    modules: {
        user,
        userRoutes

    }
})