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
        name: "StretchPage",
        path: "/stretch",
        component: () => import("../pages/drillPages/back/gluteus/Stretch.vue")
    },
    {
        name: "DumbbellPage",
        path: "/dumbbell",
        component: () => import("../pages/drillPages/back/gluteus/Dumbbell.vue")
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