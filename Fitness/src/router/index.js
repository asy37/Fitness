import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import("../pages/Home.vue")
    },

    {

        name: "EsnemePage",
        path: "/esneme",
        component: () => import("../pages/Esneme.vue")
    },
    {
        name: "DambılPage",
        path: "/dambıl",
        component: () => import("../pages/Dambıl.vue")
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass:'activelink'
})

export default router