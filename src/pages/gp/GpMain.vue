<script setup>
import { ref } from 'vue';
import GpDetails from '@/pages/gp/GpDetails.vue';
import BillingDetails from '@/pages/gp/BillingDetails.vue';
import ReviewOrder from '@/pages/gp/ReviewOrder.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import GpHeading from '@/pages/gp/GpHeading.vue';

const activeTab = ref(GpDetails);
const currentTab = ref('details');

const tabs = [
    { name: 'details', label: 'Details', component: GpDetails },
    { name: 'billing', label: '2. Billing', component: BillingDetails },
    { name: 'review', label: '3. Review', component: ReviewOrder },
];

const handleStepUpdate = (data) => {
    // Logic to move to next tab or save data
};
</script>

<template>
    <div class="wizard-container">
        <GpHeading></GpHeading>
        <nav class="tab-headers">
            <button
                v-for="tab in tabs"
                :key="tab.name"
                @click="currentTab = tab.name"
                :class="{ active: currentTab === tab.name }"
            >
                {{ tab.label }}
            </button>
        </nav>

        <div class="tab-content">
            <keep-alive>
                <component :is="activeTab" @next-step="handleStepUpdate" />
            </keep-alive>
        </div>
    </div>
</template>

<style scoped>
.wizard-container {
    /* border: 1px solid red; */
    /* background-color: rgb(247, 247, 247); */
}

.tab-headers {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 56px;
    padding: 0 24px;
    border-bottom: 1px solid hsla(159, 22%, 77%, 1);
}
button {
    background-color: white;
    color: gray;
    border-radius: 4px 4px 0 0;
    border-collapse: collapse;
    border: none;
}

.active {
    background-color: hsla(159, 22%, 77%, 1);
    color: white; /* Optional: make text readable against red */
    border: 1px solid hsla(159, 22%, 77%, 1);
    color: hsl(158, 25%, 40%);
}
</style>
