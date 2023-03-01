import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import("../pages/Home.vue")
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()

})

export default router