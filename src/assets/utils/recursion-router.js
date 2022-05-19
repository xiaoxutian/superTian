// import router from "@/router"
import router from "../../router/index"
export function recursionRouter(userRoutes = [], allRouter = []) {
    var realRoutes = []
    allRouter.forEach((v, i) => {
        userRoutes.forEach((item, index) => {
            if (item.name === v.meta.name) {
                if (item.children && item.children.length > 0) {
                    v.children = recursionRouter(item.children, v.children)
                }
                realRoutes.push(v)
            }
        })
    })
    return realRoutes
}

export function setDefaultRoute(routes) {
    routes.forEach((v, i) => {
        if (v.children && v.children.length > 0) {
            v.redirect = { name: v.children[0].name }
            setDefaultRoute(v.children)
        }
    })

}


export function addrouterlist(list) {
    list.forEach((item, index) => {

        // if (item.children && item.children.length > 0) {

        //     addrouterlist(item.children)
        // }
        router.addRoute(item);

    })
}