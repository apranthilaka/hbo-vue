<script setup>
import { ref } from 'vue';
import GpDetails from '@/pages/gp/GpDetails.vue';
import BillingDetails from '@/pages/gp/BillingDetails.vue';
import ReviewOrder from '@/pages/gp/ReviewOrder.vue';
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import GpHeading from "@/pages/gp/GpHeading.vue";

const activeTab = ref(GpDetails);

const tabs = [
  { name: 'Details', label: 'Details', component: GpDetails },
  { name: 'billing', label: '2. Billing', component: BillingDetails },
  { name: 'review', label: '3. Review', component: ReviewOrder },
];

const handleStepUpdate = (data) => {
  // Logic to move to next tab or save data
};
</script>

<template>
 <default-layout>
   <div class="wizard-container">
     <GpHeading></GpHeading>
     <nav class="tab-headers">
       <button
           v-for="tab in tabs"
           :key="tab.name"
           :class="{ active: activeTab === tab.component }"
           @click="activeTab = tab.component"
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
 </default-layout>
</template>

<style scoped>

.tab-headers{
  border: 1px solid red;
  height: 56px;
  padding: 0 24px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}

</style>

