<script setup>
// defineProps is a compiler macro; it declares which properties
// this component can receive from a parent.
import { ref } from 'vue';
const isButtonDisabled = ref(true);

// button On click function

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    entityTypeClass: {
        type: String,
        default: 'card--gp',
    },
    isMember: Boolean,
    titleLink: String,
});

// You can access props in the script using the 'props' object
</script>
<template>
    <div>{{ props.userName }}</div>
    <!-- :class is attribute binding -->
    <div class="card" :class="entityTypeClass">
        <RouterLink :to="titleLink">
            <div class="card_heading">
                <div class="card_icon">GP</div>
                <!-- {{ title }} is text interpalation  -->

                <h6>{{ title }}</h6>
            </div>
        </RouterLink>
        <div class="card_links">
            <div>
                <div class="card_links_left-icon">
                    <i class="ph ph-chat-centered-dots"></i>
                </div>
                <div class="card_links_label">
                    <p>Details</p>
                </div>
                <div class="card_links_right-icon">
                    <i class="ph ph-arrow-right right-icon"></i>
                </div>
            </div>
            <div>
                <div class="card_links_left-icon">
                    <i class="ph ph-chat-centered-dots"></i>
                </div>
                <div class="card_links_label">
                    <p>Users</p>
                </div>
                <div class="card_links_right-icon">
                    <i class="ph ph-arrow-right right-icon"></i>
                </div>
            </div>
            <div>
                <div class="card_links_left-icon">
                    <i class="ph ph-chat-centered-dots"></i>
                </div>
                <div class="card_links_label">
                    <p>Mapped Entities</p>
                </div>
                <div class="card_links_right-icon">
                    <i class="ph ph-arrow-right right-icon"></i>
                </div>
            </div>

            <div>
                <div class="card_links_left-icon">
                    <i class="ph ph-chat-centered-dots"></i>
                </div>
                <div class="card_links_label">
                    <p>Data Requests</p>
                </div>
                <div class="card_links_right-icon">
                    <i class="ph ph-arrow-right right-icon"></i>
                </div>
            </div>

            <div>
                <div class="card_links_left-icon">
                    <i class="ph ph-chat-centered-dots"></i>
                </div>
                <div class="card_links_label">
                    <p>Add to My Entities</p>
                </div>
                <div class="card_links_right-icon">
                    <i class="ph ph-arrow-right right-icon"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    --header-background-color: #ffffff;
    --header-border-color: rgb(224, 224, 224);
    --icon-border-color: rgb(224, 224, 224);
    --icon-background-color: #e3e3e3;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 8px;
    transition: box-shadow 0.3s ease;
    height: min-content;
    overflow: hidden;

    &_heading {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;
        padding: 8px 16px;
        border-bottom: 1px solid var(--header-border-color);
        background-color: var(--header-background-color);
        transition: background-color 0.5s ease;

        h6 {
            margin: 0;
        }
        &:hover {
            h6 {
                text-decoration: underline;
            }
        }
    }

    &_icon {
        border: 1px solid var(--icon-border-color);
        background-color: var(--icon-background-color);
        width: 32px;
        height: 32px;
        border-radius: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.5s ease;
        font-size: 13px;
    }

    &_links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
        grid-template-rows: auto;
        //padding: 16px;
        gap: 1px;

        p {
            margin: 0;
        }

        > div {
            gap: 8px;
            width: 100%;
            height: 40px;
            outline: 1px solid rgb(224, 224, 224);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: row;
            padding: 0 16px;
            color: gray;
            transition: background-color, font-size 0.5s ease;
            &:hover {
                text-decoration: underline;
                cursor: pointer;
                color: black;
                .card_links_right-icon {
                    display: block;
                }
                i {
                    text-decoration: none;
                }
            }
        }
        &_left-icon {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &_label {
            width: 100%;
        }
        &_right-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            display: none;
        }
    }
    transition: transform 0.5s ease-in-out;

    &:hover {
        transition: transform 0.1s ease-in-out;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        transform: scale(1.02);
    }
}

.card--gp {
    --icon-border-color: #f1dc8e;
    --icon-background-color: #fbf5df;

    &:hover {
        --icon-background-color: #f1dc8e;

        --header-background-color: #fbf5df;
        --header-border-color: #fbf5df;
    }
}

.card--lp {
    --icon-border-color: #85f09c;
    --icon-background-color: #dffbe5;

    &:hover {
        --icon-background-color: #85f09c;

        --header-background-color: #dffbe5;
        --header-border-color: #dffbe5;
    }
}

.card--cp {
    --icon-border-color: #dda8f5;
    --icon-background-color: #f8edfd;

    &:hover {
        --icon-background-color: #dda8f5;

        --header-background-color: #f8edfd;
        --header-border-color: #f8edfd;
    }
}

.card--me {
    --icon-border-color: #aee9f4;
    --icon-background-color: #edfafd;

    &:hover {
        --icon-background-color: #aee9f4;

        --header-background-color: #edfafd;
        --header-border-color: #edfafd;
    }
}

RouterLink {
    &:hover {
        text-decoration: underline;
    }
}
</style>
