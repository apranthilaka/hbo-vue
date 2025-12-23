<script setup>
import { useRouter, useRoute } from 'vue-router'; // Import useRoute
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();

// Get the name from the URL query (?name=...)
// Fallback to 'GP Details' if no name is found
const entityName = computed(() => route.query.name || 'GP Details');

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="page-top-bar">
    <nav class="breadcrumb">
      <ol>
        <li>
          <RouterLink to="/dashboard">Dashboard</RouterLink>
        </li>
        <li class="separator">/</li>
        <li>
          <span class="current-page">{{ entityName }}</span>
        </li>
      </ol>
    </nav>

    <button @click="goBack" class="btn-back">
      <i class="ph ph-arrow-left"></i>
      Back
    </button>
  </div>
</template>

<style scoped>
.page-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: #f9f9f9;
  border-bottom: 1px solid #e0e0e0;
}

.breadcrumb {
  ol {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 8px;
    font-size: 14px;
  }

  a {
    color: #666;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #000;
    }
  }

  .separator {
    color: #ccc;
  }

  .current-page {
    color: #222;
    font-weight: 600;
  }
}

.btn-back {
  display: flex;
  align-items: center;
  gap: 6px;
  background: white;
  border: 1px solid #dcdcdc;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #f0f0f0;
  }
}
</style>