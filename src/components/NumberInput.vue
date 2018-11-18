<template>
  <form class="section form" @submit.prevent="calculateNewNumber()" autocomplete="off">
    <fieldset class="fields">
      <div class="form-row">
        <label class="form-label" for="number">Alte Nummer:</label>
        <input class="form-field" name="number" id="number" placeholder="7 bis 9 Zeichen notwendig" type="number"
          autocomplete="off" v-model="number" />
        <p class="form-error" v-if="!isValidInput">
          Nummer muss 7 bis 9 Zeichen lang sein!
        </p>
      </div>
      <div class="form-row" v-if="isValidInput">
        <button type="submit" class="form-button" @click="$emit('newNumber', numberNew)">Submit</button>
      </div>
    </fieldset>
    <div class="results" v-if="isValidInput">
      Neue Nummer: <span>{{ numberCalculated }}</span>
    </div>
  </form>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  /// <reference path="../../NumberGenerator/javascript/LuhnDigit.d.ts" />
  // import LuhnChecker from '../../NumberGenerator/javascript/LuhnDigit';
  /// <reference path="../../NumberGenerator/javascript/PostNumber.d.ts" />
  import PostnumberConverter from '../../NumberGenerator/javascript/PostNumber';

  @Component
  export default class NumberInput extends Vue {
    // data
    private number: string = '';
    private numberCalculated: string = '';
    private isValidInput: boolean = false;
    private numberConverter: PostnumberConverter;

    constructor() {
      super();

      this.numberConverter = new PostnumberConverter();
    }

    @Watch('number')
    private onNumberChanged(value: string) {
      const isValidLength = (value.length >= 7 && value.length <= 9);
      const isValidNumber = !Number.isNaN(parseInt(value, 10));

      if (isValidLength && isValidNumber) {
        this.numberCalculated = this.numberConverter.getNewPostNumber(parseInt(value, 10));
        this.isValidInput = true;
        this.$store.commit('addCalculatedNumber', this.numberCalculated);
      } else {
          this.isValidInput = false;
          this.$store.commit('addCalculatedNumber', '');
      }
    }

    @Watch('numberCalculated')
    private numberCalculatedChanged(value: string) {
      this.$emit('numberChanged', value);
    }
  }
</script>

<style scoped>
  .form {
    overflow: hidden;
    text-align: left;
  }

  .fields {
    border: 0;
    padding: 0;
    margin: 0 0 1rem 0;
    min-width: 0;
  }

  .results {
    margin: 0 0 1rem 0;
  }

  .form-row {
    display: flex;
    margin-bottom: 0.5rem;
    flex-direction: column;
  }

  .form-label {
    margin-bottom: 0.5rem;
  }

  .form-field,
  .form-button {
    padding: 0.5rem;
  }

  .form-field::-webkit-inner-spin-button,
  .form-field::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .form-error {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: red;

    &:empty {
      display: none;
    }
  }
</style>
