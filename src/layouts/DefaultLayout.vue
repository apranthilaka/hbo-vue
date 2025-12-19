<script setup>
import TopMenu from '@/commonComponents/TopMenu.vue';
import Sidebar from '@/commonComponents/Sidebar.vue';
</script>
<template>
    <div class="layout">
        <TopMenu />
        <slot> </slot>
        <Sidebar></Sidebar>
    </div>
</template>

<style lang="scss" scoped>
.layout {
    overflow: auto;
    height: 100%;
    display: grid;
    grid-template-columns: 250px auto;
    /* top menu row fixed at 56px and content row takes remaining height */
    grid-template-rows: 56px 1fr;
    /* fill the viewport so the page container doesn't naturally scroll */
}
</style>
