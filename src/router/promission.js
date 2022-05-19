import router from "./index"
import store from "../store/index"

router.beforeEach((to, from, next) => {
    if (!store.state.user.UserToken) {

        if (to.matched.length > 0) {
            next()
        } else {
            next({
                path: "/login"
            })
        }
    } else {

        if (!store.state.userRoutes.permissionList) {
            store.dispatch("FETCH_PERMISSION").then(() => {

                next({
                    path: to.path
                })
            })
        } else {
            if (to.path !== "/login") {
                next();
            } else {
                next(from.fullPath)
            }
        }
    }
})