import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import("../pages/Home.vue")
    },
    {

        name: "AboutUsPage",
        path: "/aboutus",
        component: () => import("../pages/AboutUs.vue")
    },
    {
        name: "OurMissionPage",
        path: "/ourmission",
        component: () => import("../pages/OurMission.vue")
    },
    {
        name: "LoginPage",
        path: "/login",
        component: () => import("../pages/Login.vue")
    },
    {
        name: "RegisterPage",
        path: "/register",
        component: () => import("../pages/Register.vue")
    },
    {
        name: "EsnemePage",
        path: "/",
        component: () => import("../pages/esneme.vue")
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()

})

export default router