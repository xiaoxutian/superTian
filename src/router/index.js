import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from '../views/home/home.vue'

Vue.use(VueRouter);
const HomeView = () =>
    import ("../views/home/home.vue");
const homeadd = () =>
    import ("../views/home/homeadd.vue");
const Login = () =>
    import ("../views/login/login.vue");
const ProjectCase = () =>
    import ("../views/ProjectCase");
const Business = () =>
    import ("../views/ProjectCase/Business");
const ProjectManagement = () =>
    import ("../views/ProjectCase/ProjectManagement");
const Layout = () =>
    import ("../views/layout/index.vue");
const routes = [{
        path: "/",
        name: "login",
        component: Login,
    },


];
export const DynamicRoutes = [{
        path: "",
        name: "Layout",
        component: Layout,
        alwaysShouw: true,
        redirect: "/home",
        meta: {
            requiresAuth: true,
            name: "首页",
        },
        children: [{
            path: "home",
            name: "Home",
            component: HomeView,
            meta: {
                name: "首页",
            },
        }, {
            path: "homeadd",
            name: "homeadd",
            component: homeadd,
            meta: {
                name: "首页",
            },
        }],
    },


]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;