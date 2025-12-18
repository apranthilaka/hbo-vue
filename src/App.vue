<script setup></script>

<template>
    <router-view />
</template>

<style lang="scss">
/* 1. Global Reset & Variables */
:root {
    --primary-color: #007bff;
    --base-line-height: 1.5;
}

/* Apply border-box to everything */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* 2. Root Sizing (1rem = 14px) */
html {
    font-size: 87.5%;
    scroll-behavior: smooth;
}
/* 3. Define default typography on the body 
   Now 1rem will correctly equal the user's base font size. */
body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    font-size: 1rem;
    line-height: var(--base-line-height);
    color: #333;
    margin: 0;
    -webkit-font-smoothing: antialiased;

    /* Modern 2025 Full-Height Setup */
    // min-height: 100dvh;
    overflow-x: hidden; /* Prevents horizontal scroll while allowing vertical */
    height: 100vh;
    // max-height: 100vh;
    overflow: hidden;
    // border: 5px solid orange;
}

/* 4. Scale everything else using rem */
h1 {
    font-size: 2.5rem; /* Scales to 40px if base is 16px */
}

p {
    margin-bottom: 1.5rem;
}

#app {
    height: 100%;
}
</style>
