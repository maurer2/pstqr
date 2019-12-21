<template>
  <form
    class="section form"
    autocomplete="off"
    novalidate
    @submit.prevent="calculateNumber"
  >
    <output
      v-if="isValidInput && numberCalculated.length > 0"
      class="results"
    >
      <span class="key">Neue Nummer:</span>
      <span class="value">{{ numberCalculated }}</span>
    </output>
    <fieldset class="fields">
      <div class="form-row">
        <label
          class="form-label"
          for="number"
        >
          Alte Nummer
          <span
            v-if="number.length > 0"
            class="counter"
            :class="counterClass"
          >
            ({{ number.length }} Zeichen eingegeben)
          </span>
        </label>
        <input
          id="number"
          v-model="number"
          class="form-field"
          name="number"
          placeholder="7 bis 9 Zeichen notwendig"
          type="number"
          autocomplete="off"
          pattern="[0-9]*"
          inputmode="numeric"
        >
        <p
          v-if="!isValidInput"
          class="form-error"
        >
          Nummer muss eine Zahl sein und 7 bis 9 Zeichen lang sein!
        </p>
      </div>
      <div class="form-row">
        <button
          type="submit"
          class="form-button"
        >
          Submit
        </button>
      </div>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
// <reference path="../../NumberGenerator/javascript/LuhnDigit.d.ts" />
// import LuhnChecker from '../../NumberGenerator/javascript/LuhnDigit';
// <reference path="../../NumberGenerator/javascript/PostNumber.d.ts" />
import PostnumberConverter from '../../NumberGenerator/javascript/PostNumber';

@Component
export default class NumberInput extends Vue {
  private number: string = '';
  private numberCalculated: string = '';
  private isValidInput: boolean = true;
  private numberConverter!: PostnumberConverter;

  private mounted() {
    this.numberConverter = new PostnumberConverter();
  }

  private calculateNumber() {
    const isValidLength = (this.number.length >= 7 && this.number.length <= 9);
    const isValidNumber = !Number.isNaN(parseInt(this.number, 10));

    if (isValidLength && isValidNumber) {
      this.numberCalculated = this.numberConverter.getNewPostNumber(parseInt(this.number, 10));
      this.isValidInput = true;

      return;
    }

    this.numberCalculated = '';
    this.isValidInput = false;
  }

  private get counterClass() {
    return (this.number.length >= 7 && this.number.length <= 9) ? 'counter--is-valid' : 'counter--is-invalid';
  }

  @Watch('numberCalculated')
  private onNumberCalculatedChange() {
    this.$store.commit('addCalculatedNumber', this.numberCalculated);
  }
}
</script>

<style scoped lang="postcss">
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

    & .counter {
      font-size: 0.85rem;
    }

    & .counter--is-valid {
      color: var(--color-positive);
    }

    & .counter--is-invalid {
      color: var(--color-negative);
    }
  }

  .form-field,
  .form-button {
    padding: 0.5rem;
    background: white;
    border: 1px solid var(--color-delta);
  }

  .form-field::-webkit-inner-spin-button,
  .form-field::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .form-error {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--color-negative);
    font-size: 0.85rem;
  }

  .results {
    display: block;
    margin-bottom: 1rem;
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
