import { createRouter, createWebHistory } from 'vue-router';
import SIteMap from '@/pages/SiteMap.vue';
import Dashboard from '@/pages/Dashboard.vue';
import GpMain from "@/pages/gp/GpMain.vue";

// creating router instance
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: SIteMap,
        },
        {
            path: '/dashboard',
            component: Dashboard,
        },
        {
            path: '/gp',
            component: GpMain,
        },
    ],
});

export default router;
