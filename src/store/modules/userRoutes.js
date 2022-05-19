import api from '../../../src/api/index.js';
import router, { DynamicRoutes } from "../../router/index"
import dynamicRouter from "../../router/dynameic-touter"
import { recursionRouter, setDefaultRoute, addrouterlist } from '../../assets/utils/recursion-router'
export default {
    nameSpacad: true,
    state: {
        permissionList: null,
        sidebarMenu: [], // 导航菜单
        currentMenu: '' // 高亮
    },
    getters: {},
    mutations: {
        SET_PERMISSION(state, routes) {
            state.permissionList = routes;
        },
        CLEAR_PERMSSION(state) {
            state.permissionList = null;
        },
        SET_MENU(state, menu) {
            state.sidebarMenu = menu;
        },
        CLEAR_MENU(state) {
            state.sidebarMenu = []
        }
    },
    actions: {
        async FETCH_PERMISSION({ commit, state }) {
            var permissionList = await api.routerPromission()
            let routes = recursionRouter(permissionList.data.data, dynamicRouter);
            let MainContainer = DynamicRoutes.find(v => v.path === "");
            let children = MainContainer.children;
            children.push(...routes)
            commit("SET_MENU", children);
            setDefaultRoute([MainContainer]);
            let initialRoutes = router.options.routes;
            console.log(DynamicRoutes, "123")
            addrouterlist(DynamicRoutes)
                // DynamicRoutes.forEach((item, index) => {
                //     router.addRoute(item);
                // })

            commit("SET_PERMISSION", [...initialRoutes, ...DynamicRoutes])

        }
    },
}