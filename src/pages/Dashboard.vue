<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Card from './Card.vue';
</script>
<template>
    <DefaultLayout>
        <div class="dashboard-container">
            <div>Header</div>
            <div>Title</div>
            <div class="cardsContainer">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card /><Card />
                <Card />
                <Card />
                <Card />
                <Card /><Card />
                <Card />
                <Card />
                <Card />
                <Card /><Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card /><Card />
                <Card />
                <Card />
                <Card />
                <Card /><Card />
                <Card />
                <Card />
                <Card />
                <Card /><Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </DefaultLayout>
</template>
<style lang="scss" scoped>
.dashboard-container {
    height: 500px;
    border: 10px solid green;
}

.cardsContainer {
    height: 100%;
    border: 10px solid black;
    overflow-y: auto;
    overflow-x: hidden;
    min-height: 0;
    flex: 1 1 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows: min-content;
    gap: 16px;
    padding: 16px;
    padding-top: 0;

    position: relative;
    scrollbar-width: thin;
    /* Firefox */
    scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
    /* Firefox */

    &::-webkit-scrollbar {
        width: 14px;
        height: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.18);
        border-radius: 8px;
        border: 3px solid transparent;
        /* creates a gutter so thumb doesn't overlay content */
        background-clip: padding-box;
    }
}
</style>
