<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Card from './Card.vue';
import { ref } from 'vue';

const cardDetails = ref([
    { id: 1, name: 'Nebula Nexus', entityType: 'card--gp', route: '/gp' },
    { id: 2, name: 'Vortex Ventures', entityType: 'card--gp', route: '/gp' },
    { id: 3, name: 'Stellar Solutions', entityType: 'card--lp', route: '/lp' },
    { id: 4, name: 'Apex Analytics', entityType: 'card--cp', route: '/cp' },
    { id: 5, name: 'Quantum Quorum', entityType: 'card--gp', route: '/gp' },
    { id: 6, name: 'Blue Ridge Biotics', entityType: 'card--cp', route: '/cp' },
    { id: 7, name: 'Summit Systems', entityType: 'card--gp', route: '/gp' },
    {
        id: 8,
        name: 'Ironwood Industries',
        entityType: 'card--gp',
        route: '/gp',
    },
    { id: 9, name: 'Ethereal Edge', entityType: 'card--me', route: '/me' },
    { id: 10, name: 'Titan Tech', entityType: 'card--gp', route: '/gp' },
    { id: 11, name: 'Nova Networks', entityType: 'card--gp', route: '/gp' },
    { id: 12, name: 'Silverline Software', entityType: 'card--me' },
    { id: 13, name: 'Pinnacle Partners', entityType: 'card--gp', route: '/gp' },
    { id: 14, name: 'Zenith Zero', entityType: 'card--cp', route: '/cp' },
    { id: 15, name: 'Crestline Core', entityType: 'card--lp', route: '/lp' },
    { id: 16, name: 'Velocity Vision', entityType: 'card--gp', route: '/gp' },
    { id: 17, name: 'Prism Power', entityType: 'card--me', route: '/me' },
    { id: 18, name: 'Aether Agency', entityType: 'card--gp', route: '/gp' },
    { id: 19, name: 'Horizon Holdings', entityType: 'card--gp', route: '/gp' },
    { id: 20, name: 'Flux Foundry', entityType: 'card--cp', route: '/cp' },
    { id: 21, name: 'Terra Trace', entityType: 'card--me', route: '/me' },
    { id: 22, name: 'Catalyst Cloud', entityType: 'card--gp', route: '/gp' },
    { id: 23, name: 'Opal Optics', entityType: 'card--gp', route: '/gp' },
    { id: 24, name: 'Driftwood Digital', entityType: 'card--lp', route: '/lp' },
    { id: 25, name: 'Echo Engineering', entityType: 'card--gp', route: '/gp' },
    { id: 26, name: 'Radiant Robotics', entityType: 'card--gp', route: '/gp' },
    { id: 27, name: 'Sovereign Shield', entityType: 'card--gp', route: '/gp' },
    { id: 28, name: 'Kinetic Keys', entityType: 'card--gp', route: '/gp' },
    { id: 29, name: 'Atlas Align', entityType: 'card--gp', route: '/gp' },
    { id: 30, name: 'Modulus Media', entityType: 'card--lp', route: '/lp' },
    { id: 31, name: 'Solaris Stream', entityType: 'card--gp', route: '/gp' },
    { id: 32, name: 'Beacon Bridge', entityType: 'card--gp', route: '/gp' },
    { id: 33, name: 'Vector Valet', entityType: 'card--lp', route: '/lp' },
    { id: 34, name: 'Alpha Aspect', entityType: 'card--gp', route: '/gp' },
    { id: 35, name: 'Mantra Metals', entityType: 'card--gp', route: '/gp' },
    { id: 36, name: 'Neon Node', entityType: 'card--gp', route: '/gp' },
]);
let answer = ref(true);
let className = ref('');
</script>
<template>
    <DefaultLayout>
        <div class="dashboard-container">
            <div class="data-wrapper">
                <div class="dashboard-title">
                    <div class="dashboard-title__left">
                        <i class="ph-fill ph-squares-four"></i>
                        <h4>DASHBOARD</h4>
                    </div>
                    <div class="dashboard-title__right">
                        <div class="indicator indicator--green">
                            <div><p>Background Jobs</p></div>
                            <div class="indicator__value">1 Entries</div>
                        </div>

                        <div class="indicator indicator--red">
                            <div>
                                <p>Import Queue Status</p>
                            </div>
                            <div class="indicator__value">ON</div>
                        </div>

                        <div class="indicator indicator--yellow">
                            <div>
                                <p>Mailer Status</p>
                            </div>
                            <div class="indicator__value">OFF</div>
                        </div>
                        <div class="indicator indicator--gray">
                            <div>
                                <p>Main Queue Status</p>
                            </div>
                            <div class="indicator__value">ON</div>
                        </div>
                    </div>
                </div>
                <div class="cards-title">
                    <div class="cards-title_left">
                        <div>
                            <h6>125 Entities in Total</h6>
                        </div>
                    </div>
                    <div>
                        <div class="cards-title_right">
                            <select
                                name="favorite-cuisine"
                                aria-label="Select your favorite cuisine..."
                                required
                            >
                                <option selected disabled value="">
                                    All (Entities + Master Entities)
                                </option>
                                <option>Italian</option>
                                <option>Japanese</option>
                                <option>Indian</option>
                                <option>Thai</option>
                                <option>French</option>
                            </select>

                            <input
                                type="search"
                                name="search"
                                placeholder="Search"
                                aria-label="Search"
                            />

                            <button class="primaryButton">Add Entity</button>
                        </div>
                    </div>
                </div>
                <div class="cardsContainer">
                    <div v-for="card in cardDetails" :key="card.id">
                        <Card
                            :titleLink="`${
                                card.route
                            }?name=${encodeURIComponent(card.name)}`"
                            :title="card.name"
                            :entityTypeClass="card.entityType"
                        />
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>
<style lang="scss" scoped>
.dashboard-container {
    grid-column: 2/3;
    grid-row: 2/3;
    overflow: hidden;
}

.data-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%; /* Ensure the wrapper fills the parent container's height */
}
// .header-wrapper {
//     height: 56px;
//     width: 100%;
//     background-color: rgb(63, 27, 33);
//     padding: 0 16px;
//     border: 1px solid black;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
.action-wrapper {
    height: 56px;
    width: 100%;
    background-color: pink;
    padding: 0 16px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cardsContainer {
    // border: 10px solid rgb(0, 167, 50);
    // height: 100%;
    overflow-y: auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows: min-content;
    gap: 16px;
    padding: 16px;
    padding-top: 0;

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

// title component
.dashboard-title {
    background-color: #ffffff;
    padding: 0 24px;
    // border-bottom: 1px solid rgb(214, 214, 214);
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 70px;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    h4 {
        margin: 0;
    }

    &__left {
        display: flex;
        align-items: center;
        gap: 8px;

        i {
            font-size: 24px;
            //padding-top: 3px;
        }
    }

    &__right {
        display: flex;
        align-items: center;
        gap: 16px;
    }
}

.indicator {
    --value-bg-color: gray;
    --value-text-color: #ffffff;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgb(212, 212, 212);
    padding: 0 12px;
    border-radius: 4px;
    gap: 16px;

    p {
        margin: 0;
        color: rgb(114, 106, 106);
        //font-size: 13px;
    }

    &__value {
        min-width: 50px;
        padding: 2px 8px;
        background-color: var(--value-bg-color);
        color: var(--value-text-color);
        border-radius: 4px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &--green {
        --value-bg-color: hsla(104, 50%, 85%, 1);
        --value-text-color: hsla(104, 50%, 25%, 1);
    }

    &--red {
        --value-bg-color: hsla(0, 70%, 85%, 1);
        --value-text-color: hsla(0, 70%, 25%, 1);
    }

    &--yellow {
        --value-bg-color: hsla(45, 100%, 85%, 1);
        --value-text-color: hsla(45, 100%, 25%, 1);
    }

    &--gray {
        --value-bg-color: gray;
        --value-text-color: #ffffff;
    }
}
// title component

// card title
.cards-title {
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;

    h6 {
        margin: 0;
        color: gray;
    }

    &_left {
        display: flex;
        flex-direction: row;
        gap: 16px;
        align-items: center;
    }

    &_right {
        display: flex;
        flex-direction: row;
        gap: 16px;

        input {
            border-radius: 3px;
        }
    }

    input,
    select {
        margin: 0;
    }

    button {
        margin: 0;
    }
}
//card title
</style>
