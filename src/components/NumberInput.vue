<template>
  <form class="form" @submit.prevent="calculateNewNumber()" autocomplete="off">
    <div class="form-row">
        <label class="form-label" for="number-old">Alte Nummer</label>
        <input class="form-field" v-model="numberOld" name="number-old" id="number-old" placeholder="Alte Nummer" @change="calculateNewNumber()" autocomplete="off" />
        <p class="form-error"></p>
    </div>

    <div class="form-row">
        <label class="form-label" for="number-old">Neue Nummer</label>
        <input class="form-field" v-model="numberNew" readonly="readonly"  placeholder="Neue Nummer" />
    </div>

    <button type="submit" class="btn">Submit</button>
  </form>
</template>

<script lang="ts">
    // https://github.com/vuejs/vue-class-component
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PostNumber from '../../numberGenerator/javascript/PostNumber.js';

    @Component
    export default class NumberInput extends Vue {
        // data
        numberOld: string = '';
        numberCalculated: string = '';

        constructor(private PostNumberConverter: PostNumber) {
            super();
            this.PostNumberConverter = new PostNumber();
        }

        // calculated properties
        get numberNew() {
            return this.numberCalculated;
        }

        // methods
        calculateNewNumber() {
            const isValidLength = (this.numberOld.length >= 7 && this.numberOld.length <= 9);
            // https://github.com/lodash/lodash/issues/1148
            const isNumber = true; // dummy

            // number 7 to 9 digits
            if (isValidLength && isNumber) {
                this.numberCalculated = this.PostNumberConverter.getNewPostNumber(this.numberOld);
            }
        }
    }
</script>

<style lang="pcss" scoped>
    .form {
        padding: 1rem;
        background: gray;
    }

    .form-row {
        display: flex;
        margin-bottom: 1rem;
        flex-direction: column;
    }

    .form-label {
        margin-bottom: 1rem;
    }

    .form-field {

    }

    .form-error {
        color: red;
    }
</style>
