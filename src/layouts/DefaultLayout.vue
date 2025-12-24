<script setup>
import TopMenu from '@/commonComponents/TopMenu.vue';
import Sidebar from '@/commonComponents/Sidebar.vue';
</script>

<template>
    <div class="layout">
        <TopMenu />
        <Sidebar />

        <main class="content-area">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>
    </div>
</template>

<style lang="scss" scoped>
.content-area {
    /* 1. Placement in the Grid */
    grid-column: 2/3;
    grid-row: 2/3;

    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.layout {
    height: 100vh;
    display: grid;
    grid-template-columns: max-content auto;
    grid-template-rows: 56px 1fr;
}
/* Ensure your TopMenu and Sidebar are positioned correctly in the grid */

/* Shorten the time to 0.2s for a "snappy" feel */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s ease-in-out;
}

/* Pure opacity only - no transforms or shifts */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
