import {createRouter, createWebHistory} from "vue-router";
import IndexView from "@/views/IndexView.vue";
import BevetView from "@/views/BevetView.vue";
import KiadasView from "@/views/KiadasView.vue";
import KeszletView from "@/views/KeszletView.vue";

const routes = [
    {
        name: "Index",
        path: "/",
        component: IndexView
    },
    {
        name: "Kiadas",
        path: "/kiadas",
        component: KiadasView
    },
    {
        name: "Bevet",
        path: "/bevet",
        component: BevetView
    },
    {
        name: "Keszlet",
        path: "/keszlet",
        component: KeszletView
    },
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
);

export default router;