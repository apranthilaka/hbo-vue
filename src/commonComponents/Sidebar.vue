<script setup>
import { ref } from 'vue';
</script>

<template>
    <div class="left-menu">
        <p>Sidebar</p>
        <nav>
            <div>
                <RouterLink to="/">Sitemap</RouterLink>
            </div>
            <div>
                <RouterLink to="/dashboard">Dashboard</RouterLink>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.left-menu {
    // // border-right: 1px solid rgb(214, 214, 214);
    grid-column: 1/2;
    grid-row: 1/3;
    height: 100%;
    background-color: hsla(158, 23%, 91%, 1);
}
</style>
