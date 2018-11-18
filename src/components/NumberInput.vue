<template>
  <form class="section form" @submit.prevent="calculateNumber" autocomplete="off" novalidate>
    <fieldset class="fields">
      <div class="form-row">
        <label class="form-label" for="number">Alte Nummer:</label>
        <input class="form-field" name="number" id="number" placeholder="7 bis 9 Zeichen notwendig" type="number"
          autocomplete="off" pattern="[0-9]*" inputmode="numeric" v-model="number" />
        <p class="form-error" v-if="!isValidInput">
          Nummer muss 7 bis 9 Zeichen lang sein!
        </p>
      </div>
      <div class="form-row">
        <button type="submit" class="form-button">Submit</button>
      </div>
    </fieldset>
    <div class="results" v-if="isValidInput && numberCalculated.length > 0">
      <span class="key">Neue Nummer:</span>
      <span class="value">{{ numberCalculated }}</span>
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
    private isValidInput: boolean = true;
    private numberConverter: PostnumberConverter;

    constructor() {
      super();

      this.numberConverter = new PostnumberConverter();
    }

    private calculateNumber() {
      const isValidLength = (this.number.length >= 7 && this.number.length <= 9);
      const isValidNumber = !Number.isNaN(parseInt(this.number, 10));

      if (isValidLength && isValidNumber) {
          this.numberCalculated = this.numberConverter.getNewPostNumber(parseInt(this.number, 10));
          this.isValidInput = true;
      } else {
          this.numberCalculated = '';
          this.isValidInput = false;
      }
    }

    @Watch('numberCalculated')
    private onNumberCalculatedChange() {
      this.$store.commit('addCalculatedNumber', this.numberCalculated);
    }
  }
</script>

<style scoped>
  .form {
    text-align: left;
  }

  .fields {
    border: 0;
    padding: 0;
    margin: 0 0 1rem 0;
    min-width: 0;
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

  .results {
    padding: 1rem;
    text-align: center;
    color: var(--color-alpha) var(--color-gamma);

    & .key {
      display: inline-block;
      padding: 0.25rem;
      white-space: nowrap;
    }

    & .value {
      display: inline-block;
      padding: 0.25rem;
      font-weight: bold;
    }
  }
</style>
