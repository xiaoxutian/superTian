import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const ProjectCase = () =>
    import ("../views/ProjectCase");
const Business = () =>
    import ("../views/ProjectCase/Business");
const ProjectManagement = () =>
    import ("../views/ProjectCase/ProjectManagement");
const ProjectPreparation = () =>
    import ("../views/projectPreparation");
const AccountSetting = () =>
    import ("../views/projectPreparation/accountSetting");
const supplierManagement = () =>
    import ("../views/projectPreparation/supplierManagement");
const CostControl = () =>
    import ("../views/costControl");
const TargetCost = () =>
    import ("../views/costControl/targetCost");
const dynamicRouter = [{
        path: "/projectCase",
        name: "projectCase",
        meta: {
            name: "产品管理",
        },
        component: ProjectCase,
        children: [{
                path: "/business",
                name: "business",
                meta: {
                    name: "商品管理",
                },
                component: Business,
            },
            {
                path: "/projectManagement",
                name: "projectManagement",
                meta: {
                    name: "产业管理",
                },
                component: ProjectManagement,
            },
        ],
    },
    {
        path: "/projectPreparation",
        name: "projectPreparation",
        meta: {
            name: "项目准备",
        },
        component: ProjectPreparation,
        children: [{
                path: "/accountSetting",
                name: "accountSetting",
                meta: {
                    name: "科目设置",
                },
                component: AccountSetting,
            },
            {
                path: "/supplierManagement",
                name: "supplierManagement",
                meta: {
                    name: "供应商管理",
                },
                component: supplierManagement,
            },
        ],
    },
    {
        path: "/costControl",
        name: "costControl",
        meta: {
            name: "成本管理",
        },
        component: CostControl,
        children: [{
            path: "/targetCost",
            name: "targetCost",
            meta: {
                name: "目标成本",
            },
            component: TargetCost,
        }, ],
    },
];
export default dynamicRouter;