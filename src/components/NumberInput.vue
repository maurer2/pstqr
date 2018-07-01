<template>
  <form @submit.prevent="onSubmit()">
    <div>
        <label for="number-old">Alte Nummer</label>
        <input v-model="numberOld" type="text" name="number-old" id="number-old" placeholder="Alte Nummer" @change="onChange()" />
    </div>

    <div>
        <label for="number-old">Neue Nummer</label>
        <input v-model="numberNew" type="text" readonly="readonly" />
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
    // https://github.com/vuejs/vue-class-component
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PostNumber from '../../numberGenerator/javascript/PostNumber.js';

    @Component
    export default class NumberInput extends Vue {
        // data
        numberOld: string = '432432';
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
        onChange() {
            console.log('change');
            this.numberCalculated = this.PostNumberConverter.getNewPostNumber(this.numberOld);
        }

        onSubmit() {
            console.log('submit');
        }
    }
</script>

<style lang="pcss" scoped>
    form {
        padding: 1rem;
        background: gray;
    }

    div {
        margin-bottom: 1rem;
    }
</style>
