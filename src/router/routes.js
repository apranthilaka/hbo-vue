import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Dashboard from '@/pages/Dashboard.vue';

// creating router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/dashboard', component: Dashboard },
    ],
});

export default router;
