<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Card from './Card.vue';
import { ref } from 'vue';

const cardDetails = ref([
    {
        id: 1,
        name: 'Wireless Mouse',
        price: '$25',
        entityType: 'card--gp',
    },
    {
        id: 2,
        name: 'Mechanical Keyboard',
        price: '$85',
        entityType: 'card--gp',
    },
    {
        id: 3,
        name: 'Monitor Stand',
        price: '$45',
        entityType: 'card--lp',
    },
    {
        id: 1,
        name: 'Wireless Mouse',
        price: '$25',
        entityType: 'card--gp',
    },
    {
        id: 2,
        name: 'Mechanical Keyboard',
        price: '$85',
        entityType: 'card--gp',
    },
    {
        id: 3,
        name: 'Monitor Stand',
        price: '$45',
        entityType: 'card--lp',
    },
    {
        id: 1,
        name: 'Wireless Mouse',
        price: '$25',
        entityType: 'card--gp',
    },
    {
        id: 2,
        name: 'Mechanical Keyboard',
        price: '$85',
        entityType: 'card--gp',
    },
    {
        id: 3,
        name: 'Monitor Stand',
        price: '$45',
        entityType: 'card--gp',
    },
    {
        id: 1,
        name: 'Wireless Mouse',
        price: '$25',
        entityType: 'card--gp',
    },
    {
        id: 2,
        name: 'Mechanical Keyboard',
        price: '$85',
        entityType: 'card--gp',
    },
    {
        id: 3,
        name: 'Monitor Stand',
        price: '$45',
        entityType: 'card--lp',
    },
    {
        id: 1,
        name: 'Wireless Mouse',
        price: '$25',
        entityType: 'card--gp',
    },
    {
        id: 2,
        name: 'Mechanical Keyboard',
        price: '$85',
        entityType: 'card--gp',
    },
    {
        id: 3,
        name: 'Monitor Stand',
        price: '$45',
        entityType: 'card--lp',
    },
    {
        id: 1,
        name: 'Wireless Mouse',
        price: '$25',
        entityType: 'card--gp',
    },
    {
        id: 2,
        name: 'Mechanical Keyboard',
        price: '$85',
        entityType: 'card--gp',
    },
    {
        id: 3,
        name: 'Monitor Stand',
        price: '$45',
        entityType: 'card--gp',
    },
    {
        id: 1,
        name: 'Wireless Mouse',
        price: '$25',
        entityType: 'card--gp',
    },
    {
        id: 2,
        name: 'Mechanical Keyboard',
        price: '$85',
        entityType: 'card--gp',
    },
    {
        id: 3,
        name: 'Monitor Stand',
        price: '$45',
        entityType: 'card--lp',
    },
    {
        id: 1,
        name: 'Wireless Mouse',
        price: '$25',
        entityType: 'card--gp',
    },
    {
        id: 2,
        name: 'Mechanical Keyboard',
        price: '$85',
        entityType: 'card--gp',
    },
    {
        id: 3,
        name: 'Monitor Stand',
        price: '$45',
        entityType: 'card--lp',
    },
    {
        id: 1,
        name: 'Wireless Mouse',
        price: '$25',
        entityType: 'card--gp',
    },
    {
        id: 2,
        name: 'Mechanical Keyboard',
        price: '$85',
        entityType: 'card--gp',
    },
    {
        id: 3,
        name: 'Monitor Stand',
        price: '$45',
        entityType: 'card--gp',
    },
    {
        id: 1,
        name: 'Wireless Mouse',
        price: '$25',
        entityType: 'card--gp',
    },
    {
        id: 2,
        name: 'Mechanical Keyboard',
        price: '$85',
        entityType: 'card--gp',
    },
    {
        id: 3,
        name: 'Monitor Stand',
        price: '$45',
        entityType: 'card--lp',
    },
    {
        id: 1,
        name: 'Wireless Mouse',
        price: '$25',
        entityType: 'card--gp',
    },
    {
        id: 2,
        name: 'Mechanical Keyboard',
        price: '$85',
        entityType: 'card--gp',
    },
    {
        id: 3,
        name: 'Monitor Stand',
        price: '$45',
        entityType: 'card--lp',
    },
    {
        id: 1,
        name: 'Wireless Mouse',
        price: '$25',
        entityType: 'card--gp',
    },
    {
        id: 2,
        name: 'Mechanical Keyboard',
        price: '$85',
        entityType: 'card--gp',
    },
    {
        id: 3,
        name: 'Monitor Stand',
        price: '$45',
        entityType: 'card--gp',
    },
]);
</script>
<template>
    <DefaultLayout>
        <div class="dashboard-container">
            <div>Header</div>
            <div>Title</div>
            <div class="cardsContainer">
                <div v-for="card in cardDetails" :key="card.id">
                    <Card
                        :title="card.name"
                        :entityTypeClass="card.entityType"
                    />
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>
<style lang="scss" scoped>
.dashboard-container {
    // border: 10px solid green;

    /* 1. Set a fixed or relative height */
    /* Fallback for older browsers */
    height: 100vh;
    /* The modern standard (Dynamic Viewport Height) */
    height: 100dvh;
    /* Your Webkit fix as an extra safety measure */
    height: -webkit-fill-available;

    overflow: hidden;

    /* 2. Turn on Flexbox */
    display: flex;
    flex-direction: column;

    /* 3. Prevent the container itself from scrolling */
    overflow: hidden;
    box-sizing: border-box;
}

.cardsContainer {
    /* 1. Take up all remaining space in the flex column */
    flex-grow: 1;

    /* 2. Allow scrolling on this element specifically */
    overflow-y: auto;

    /* Keep your existing grid styles */
    // border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows: min-content;
    gap: 16px;
    padding: 16px;

    overflow-y: auto; /* Ensure scrolling is still enabled */

    /* 1. Hide scrollbar for Chrome, Safari, and newer Edge */
    &::-webkit-scrollbar {
        display: none;
    }

    /* 2. Hide scrollbar for Firefox */
    scrollbar-width: none;

    /* 3. Hide scrollbar for IE and older Edge */
    -ms-overflow-style: none;
}
</style>
