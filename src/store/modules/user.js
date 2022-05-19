export default {

    state: {
        get UserToken() {
            return localStorage.getItem('token')
        },
        set UserToken(value) {
            localStorage.setItem("token", value)
        },
        userInfo: '用户信息',
        currentEvent: ''
    },
    getters: {},
    mutations: {
        LGOIN_IN(state, token) {

            state.UserToken = token

        },
    },
    actions: {},
}