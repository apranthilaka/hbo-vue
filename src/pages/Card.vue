<script setup></script>

<template>
    <div class="card card--gp">
        <div class="card_heading">
            <div class="card_icon">GP</div>
            <h6>Card Title</h6>
        </div>
        <div class="card_links">
            <div>
                <div>
                    <i class="ph ph-chat-centered-dots"></i>
                    <p>Details</p>
                </div>
                <div>
                    <i class="ph ph-arrow-right right-icon"></i>
                </div>
            </div>
            <div>
                <div>
                    <i class="ph ph-user"></i>
                    <p>User</p>
                </div>
                <div>
                    <i class="ph ph-arrow-right right-icon"></i>
                </div>
            </div>
            <div>
                <p>Mapped Entities</p>
            </div>
            <div>
                <p>Users</p>
            </div>
            <div>
                <p>Data Requests</p>
            </div>
            <div>
                <p>Add to My Entities</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    --header-background-color: #ffffff;
    --header-border-color: gray;
    --icon-border-color: gray;
    --icon-background-color: #e3e3e3;
    border: 1px solid gray;
    border-radius: 8px;
    transition: box-shadow 0.3s ease;
    height: min-content;
    overflow: hidden;
    background-color: rgb(243, 243, 243);

    &_heading {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        border-bottom: 1px solid gray;
        background-color: rgb(241, 241, 241);
        transition: background-color 0.5s ease;

        h6 {
            margin: 0;
        }
    }

    &_icon {
        border: 1px solid gray;
        background-color: gray;
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

        > div {
            width: 100%;
            height: 40px;
            outline: 1px solid rgb(224, 224, 224);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            padding: 0 16px;
            color: gray;
            transition: background-color, font-size 0.5s ease;
            > div {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: row;
                gap: 8px;
            }
            i.right-icon {
                display: none;
            }
            &:hover {
                //background-color: #F5F5F5;
                cursor: pointer;
                i.right-icon {
                    display: block;
                    font-size: 16px;
                }
                p {
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }
    }
}

.card--gp {
    --icon-border-color: #f1dc8e;
    --icon-background-color: #fbf5df;

    &:hover {
        --header-background-color: #fbf5df;
        --header-border-color: #fbf5df;
    }
}

.card--lp {
    --icon-border-color: #85f09c;
    --icon-background-color: #dffbe5;

    &:hover {
        --header-background-color: #dffbe5;
        --header-border-color: #dffbe5;
    }
}
</style>
