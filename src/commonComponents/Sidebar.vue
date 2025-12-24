<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Check if we are on dashboard or any of the entity pages
const isDashboardActive = computed(() => {
    const entityRoutes = ['/dashboard', '/gp', '/lp', '/cp', '/me'];
    return entityRoutes.some((path) => route.path.startsWith(path));
});

let isMenuOpen = ref(true);
const menuToggle = function () {
    isMenuOpen.value = !isMenuOpen.value;
    console.log(isMenuOpen.value);
};
</script>

<template>
    <div
        class="sidebar"
        :class="isMenuOpen ? 'left-menu-open' : 'left-menu-close'"
    >
        <div class="logo-container">
            <div class="logo-container_logo">
                <img
                    class="logo-container_logo_full"
                    src="../../public/Holtara Logo.svg"
                    alt=""
                />
                <img
                    @click="menuToggle"
                    class="logo-container_logo_half"
                    src="../../public/logo-globe.svg"
                    alt=""
                />
            </div>
            <div @click="menuToggle" class="logo-container_icon">
                <i class="ph ph-list"></i>
            </div>
        </div>
        <nav class="link-wrapper">
            <div class="link-wrapper_link">
                <RouterLink to="/" exact-active-class="is-active">
                    <i class="ph-fill ph-house"></i>
                    <p>Sitemap</p>
                </RouterLink>
            </div>

            <div class="link-wrapper_link">
                <RouterLink
                    to="/dashboard"
                    :class="{ 'is-active': isDashboardActive }"
                >
                    <i class="ph-fill ph-squares-four"></i>
                    <p>Dashboard</p>
                </RouterLink>
            </div>

            <div class="link-wrapper_link">
                <RouterLink to="/setup" exact-active-class="is-active">
                    <i class="ph-fill ph-house"></i>
                    <p>Setup</p>
                </RouterLink>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
    grid-column: 1/2;
    grid-row: 1/3;
    height: 100%;
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: hsla(158, 23%, 91%, 1);
}
.left-menu-open {
    width: 250px;
}

.left-menu-close {
    width: 48px;

    .link-wrapper {
        padding: 0 0px;
        i {
            display: block;
        }
        p {
            display: none;
        }
    }

    .logo-container_logo_full {
        display: none;
    }
    .logo-container_logo_half {
        display: block;
    }
    .logo-container_icon {
        display: none;
    }
}

.link-wrapper {
    height: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    padding-top: 16px;

    &_link {
        border-radius: 4px;
        background-color: none;
        width: 100%;
        text-decoration: none;
        // padding: 0 16px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color font-weight 0.3s ease-in-out;
        min-width: 40px;
        width: 100%;
        a {
            width: 100%;
            height: 100%;
            // border: 1px solid red;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 8px;
            i {
                font-size: 14px;
                color: oklch(37.1% 0 0);
            }
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

        a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-radius: 4px; // Move radius here for better visual feedback
            padding: 0 16px; // Move padding here so the whole clickable area is padded

            // This is the magic part
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
        display: flex;
        justify-content: center;
        align-items: center;
        &_full {
            display: block;
        }
        &_half {
            display: none;
            width: 100%;
            height: 40px;
        }
    }
    &_icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
    }
}
.is-active {
    background-color: hsla(159, 22%, 77%, 1);
    p {
        color: rgb(45, 52, 75);
        font-weight: 500;
    }
}
</style>
