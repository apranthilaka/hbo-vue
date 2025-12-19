<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { RouterLink } from 'vue-router';
</script>
<template>
    <DefaultLayout>
        <div class="sitemap-container">
            <h5>Work In Progress</h5>
            <button>
                <RouterLink to="/dashboard"><p>View Dashboard</p></RouterLink>
            </button>
        </div>
    </DefaultLayout>
</template>
<style lang="scss" scoped>
.sitemap-container {
    grid-column: 2/3;
    grid-row: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    button {
    }
    p {
        color: white;
        margin: 0;
    }
}
</style>
