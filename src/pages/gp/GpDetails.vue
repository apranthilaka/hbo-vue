<script setup>
import { ref, reactive } from 'vue';
const currentStep = ref(1);
const form = reactive({ name: '', password: '' });
</script>

<template>
    <div class="step-wrapper">
        <div class="step-one" v-if="currentStep === 1">
            <p>Account Info</p>
            <h3>Basic Information</h3>
            <div class="step-one_form-grid">
                <div>
                    <select
                        name="favorite-cuisine"
                        aria-label="Select your favorite cuisine..."
                        required
                    >
                        <option selected disabled value="">
                            Select your favorite cuisine...
                        </option>
                        <option>Italian</option>
                        <option>Japanese</option>
                        <option>Indian</option>
                        <option>Thai</option>
                        <option>French</option>
                    </select>
                </div>
                <div>
                    <select
                        name="favorite-cuisine"
                        aria-label="Select your favorite cuisine..."
                        required
                    >
                        <option selected disabled value="">
                            Select your favorite cuisine...
                        </option>
                        <option>Italian</option>
                        <option>Japanese</option>
                        <option>Indian</option>
                        <option>Thai</option>
                        <option>French</option>
                    </select>
                </div>
                <div>
                    <select
                        name="favorite-cuisine"
                        aria-label="Select your favorite cuisine..."
                        required
                    >
                        <option selected disabled value="">
                            Select your favorite cuisine...
                        </option>
                        <option>Italian</option>
                        <option>Japanese</option>
                        <option>Indian</option>
                        <option>Thai</option>
                        <option>French</option>
                    </select>
                </div>
                <div>
                    <select
                        name="favorite-cuisine"
                        aria-label="Select your favorite cuisine..."
                        required
                    >
                        <option selected disabled value="">
                            Select your favorite cuisine...
                        </option>
                        <option>Italian</option>
                        <option>Japanese</option>
                        <option>Indian</option>
                        <option>Thai</option>
                        <option>French</option>
                    </select>
                </div>
                <div>
                    <textarea
                        name="bio"
                        placeholder="Write a professional short bio..."
                        aria-label="Professional short bio"
                    ></textarea>
                </div>

                <div>
                    <select
                        name="favorite-cuisine"
                        aria-label="Select your favorite cuisine..."
                        required
                    >
                        <option selected disabled value="">
                            Select your favorite cuisine...
                        </option>
                        <option>Italian</option>
                        <option>Japanese</option>
                        <option>Indian</option>
                        <option>Thai</option>
                        <option>French</option>
                    </select>
                </div>

                <div>
                    <select
                        name="favorite-cuisine"
                        aria-label="Select your favorite cuisine..."
                        required
                    >
                        <option selected disabled value="">
                            Select your favorite cuisine...
                        </option>
                        <option>Italian</option>
                        <option>Japanese</option>
                        <option>Indian</option>
                        <option>Thai</option>
                        <option>French</option>
                    </select>
                </div>

                <div>
                    <select
                        name="favorite-cuisine"
                        aria-label="Select your favorite cuisine..."
                        required
                    >
                        <option selected disabled value="">
                            Select your favorite cuisine...
                        </option>
                        <option>Italian</option>
                        <option>Japanese</option>
                        <option>Indian</option>
                        <option>Thai</option>
                        <option>French</option>
                    </select>
                </div>
            </div>
        </div>

        <div v-else-if="currentStep === 2">
            <h3>Security Settings</h3>
            <input v-model="form.password" type="password" />
            <button @click="currentStep--">Back</button>
            <button @click="$emit('next-step', form)">
                Finish Account Section
            </button>
        </div>
    </div>
</template>

<style lang="scss">
.step-one {
    // border: 1px solid green;
    height: 100%;
    padding: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    &_form-grid {
        max-width: 1000px;
        overflow-y: auto;
        // border: 1px solid red;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        grid-template-rows: min-content;
        gap: 16px;
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
        scroll-behavior: smooth;
    }
}
.step-wrapper {
    width: 100%;
    height: 100%;
    // border: 1px solid red;
}
</style>
