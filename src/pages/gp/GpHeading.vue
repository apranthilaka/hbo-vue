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
    <div class="gp-heading">
        <button @click="goBack" class="btn-back">
            <i class="ph ph-arrow-left"></i>
            <!-- Back -->
        </button>
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
    </div>
</template>

<style scoped>
.gp-heading {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 24px;
    background: #ffffff;
    border-bottom: 1px solid #e0e0e0;
    height: 56px;
    gap: 16px;
    min-height: 70px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.breadcrumb {
    ol {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
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
    justify-content: center;
    /* gap: 6px; */
    background: rgb(255, 255, 255);
    border-radius: 1000px;
    cursor: pointer;
    font-size: 14px;
    width: 32px;
    height: 32px;
    min-width: 32px;
    border: 1px solid gray;
    color: gray;
    padding-top: 2px;

    &:hover {
        background: #252525;
        font-size: 16px;
        color: white;
        padding-top: 0;
    }
}
</style>
