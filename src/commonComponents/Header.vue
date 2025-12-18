<script setup>
import { ref } from 'vue';
</script>

<template>
    <div>
        <div class="topMenu">Top Menu</div>
    </div>
</template>

<style lang="scss" scoped>
.topMenu {
    grid-row: 1/2;
    grid-column: 2/3;
    border-bottom: 1px solid rgb(235, 235, 235);
    height: auto;
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;

    select,
    input {
        margin: 0;
        border-radius: 1000px;
    }
}
</style>
