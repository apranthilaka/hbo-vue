<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { RouterLink } from 'vue-router';

const cardData = [
    {
        id: 1,
        title: 'aravinda',
        icon: '<i class="ph ph-airplay"></i>',
    },
    {
        id: 2,
        title: 'aravinda',
        icon: '<i class="ph ph-airplay"></i>',
    },
    {
        id: 3,
        title: 'aravinda',
        icon: '<i class="ph ph-airplay"></i>',
    },

    {
        id: 1,
        title: 'aravinda',
        icon: '<i class="ph ph-airplay"></i>',
    },
];
</script>
<template>
    <DefaultLayout>
        <div class="sitemap-container">
            <div class="data-wrapper">
                <div class="sitemap-title">
                    <i class="ph-fill ph-squares-four"></i>
                    <h4>Sitemap</h4>
                </div>
                <div class="sitemap-cards">
                    <div class="card" v-for="card in cardData" id="card.id">
                        <div class="card_title">
                            <div v-html="card.icon"></div>
                            <div>{{ card.title }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<style lang="scss" scoped>
.sitemap-container {
    // border: 10px solid red;
    grid-column: 2/3;
    grid-row: 2/3;
    overflow: hidden;
    /* 2. Turn on Flexbox */
    // display: flex;
    // flex-direction: column;
    /* 3. Prevent the container itself from scrolling */
    // overflow: hidden;
    // box-sizing: border-box;
}

.data-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%; /* Ensure the wrapper fills the parent container's height */
}
.sitemap-title {
    background-color: #ffffff;
    padding: 16px 24px;
    gap: 8px;
    // border-bottom: 1px solid rgb(214, 214, 214);
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 68px;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    h4 {
        margin: 0;
    }
    i {
        font-size: 24px;
        //padding-top: 3px;
    }
}

.sitemap-cards {
    // border: 10px solid rgb(0, 167, 50);
    height: 100%;
    overflow-y: auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
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
.card {
    border: 1px solid rgb(224, 224, 224);
    border-radius: 8px;
    transition: box-shadow 0.3s ease;
    height: 200px;
    overflow: hidden;

    &_title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
}
</style>
