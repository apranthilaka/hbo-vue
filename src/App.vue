<script setup></script>

<template>
    <router-view />
</template>

<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    // border: 5px solid orange;
}
#app {
    height: 100%;
}
</style>

<!-- <script setup>
</script>

<template>
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" :key="$route.path" />
        </transition>
    </router-view>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style> -->
