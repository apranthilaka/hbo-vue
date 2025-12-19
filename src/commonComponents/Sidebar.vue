<script setup>
import { ref } from 'vue';
</script>

<template>
    <div class="left-menu">
        <div class="logo-container">
            <div class="logo-container_logo">
                <img src="../../public/Holtara Logo.svg" alt="" />
            </div>
            <div class="logo-container_logo">
                <i class="ph ph-list"></i>
            </div>
        </div>
        <nav class="link-wrapper">
            <div class="link-wrapper_link link-wrapper_link--state-active">
                <RouterLink to="/"><p>Sitemap</p></RouterLink>
            </div>
            <div class="link-wrapper_link">
                <RouterLink to="/dashboard"><p>Dashboard</p></RouterLink>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.left-menu {
    // // border-right: 1px solid rgb(214, 214, 214);
    grid-column: 1/2;
    grid-row: 1/3;
    height: 100%;
    background-color: hsla(158, 23%, 91%, 1);
}

.link-wrapper {
    height: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 2px;
    padding-top: 16px;

    &_link {
        border-radius: 4px;
        background-color: none;
        width: 100%;
        text-decoration: none;
        padding: 0 16px;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: background-color font-weight 0.3s ease-in-out;
        a {
            width: 100%;
            height: 100%;
            // border: 1px solid red;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        p {
            color: gray;
            margin: 0;
            font-weight: 400;
        }
        &:hover {
            cursor: pointer;
            background-color: hsla(159, 22%, 77%, 1);
            transition: background-color 0.3s ease-in-out;
            p {
                color: rgb(45, 52, 75);
                font-weight: 500;
            }
        }
        &--state-active {
            background-color: hsla(159, 22%, 77%, 1);
            p {
                color: rgb(45, 52, 75);
                font-weight: 500;
            }
        }
    }
}

.logo-container {
    border-bottom: 1px solid hsla(159, 22%, 77%, 1);
    height: 56px;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    align-items: center;
    &_logo {
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &_close {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
