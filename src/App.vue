<script setup>
import Header from '@/commonComponents/Header.vue';
import Footer from '@/commonComponents/Sidebar.vue';
</script>

<template>
    <router-view />
</template>

<style lang="scss">
body,
html {
    margin: 0;
    padding: 0;
    border: 1px solid orange;
}

body {
    min-height: 100vh; /* This is the key property */
    /* Use 100% width over 100vw to avoid horizontal scrollbars */
    width: 100%;
    /* Optional: Hide scrollbars if absolutely necessary, but generally not recommended for accessibility */
    /* overflow: hidden; */
}
</style>
