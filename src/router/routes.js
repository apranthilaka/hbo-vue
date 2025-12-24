import { createRouter, createWebHashHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue'; // Make sure this path is correct
import SIteMap from '@/pages/sitemap/SiteMap.vue';
import Dashboard from '@/pages/dashboard/Dashboard.vue';
import GpMain from '@/pages/gp/GpMain.vue';
import Setup from '@/pages/setup/Setup.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: DefaultLayout, // The Layout stays mounted!
            children: [
                {
                    path: '', // The default view at "/"
                    component: SIteMap,
                },
                {
                    path: 'dashboard', // matches "/#/dashboard"
                    component: Dashboard,
                },
                {
                    path: 'setup', // matches "/#/dashboard"
                    component: Setup,
                },
                {
                    path: 'gp', // matches "/#/gp"
                    component: GpMain,
                },
            ],
        },
    ],
});

export default router;
