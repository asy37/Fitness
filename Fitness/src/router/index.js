import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import("../pages/Home.vue")
    },
    {
        name: "StretchPage",
        path: "/",
        component: () => import("../pages/stretch.vue")
    },
    {
        name: "DambılPage",
        path: "/",
        component: () => import("../pages/dambıl.vue")
    },
    
]

const router = createRouter({
    routes,
    history: createWebHistory()

})

export default router