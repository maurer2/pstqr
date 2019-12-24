<template>
  <form class="section form" autocomplete="off" @submit.prevent="calculateNumber">
    <fieldset class="fields" :class="{ 'fields--is-disabled': showResult }" :disabled="showResult">
      <div class="form-row">
        <label class="form-label" for="number">
          <span class="text">
            Kartennummer:
          </span>
          <span class="counter" :class="counterClass" v-if="number.length > 0">
            {{ number.length | addLeadingZero }} Zeichen
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
        <p class="form-error" v-if="!isValidInput">
          Nummer muss zwischen 7 bis 9 Ziffern lang sein.
        </p>
      </div>
      <div class="form-row">
        <button class="form-button" type="submit">
          Barcodenummer berechnen
        </button>
      </div>
    </fieldset>
    <fieldset class="fields" v-if="showResult">
      <div class="form-row">
        <output class="results">
          <span class="key">Berechnete Nummer:</span>
          <span class="value">{{ numberCalculated }}</span>
        </output>
      </div>
      <div class="form-row">
        <button class="form-button" type="button" @click="addNumberToStore">
          Nummer speichern
        </button>
      </div>
      <div class="form-row">
        <button class="form-button" type="button" @click="resetForm">
          Abbrechen
        </button>
      </div>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// <reference path="../../../NumberGenerator/javascript/LuhnDigit.d.ts" />
// import LuhnChecker from '../../../NumberGenerator/javascript/LuhnDigit';
// <reference path="../../../NumberGenerator/javascript/PostNumber.d.ts" />
import PostnumberConverter from '../../../NumberGenerator/javascript/PostNumber';

@Component({
  filters: {
    addLeadingZero(number: number, targetLength: number = 2): string {
      if (!number) {
        return '';
      }

      return number.toString().padStart(targetLength, '0');
    },
  },
})
export default class NumberForm extends Vue {
  private number: string = '';
  private numberCalculated: string = '';
  private isValidInput: boolean = true;
  private numberConverter!: PostnumberConverter;

  private mounted(): void {
    this.numberConverter = new PostnumberConverter();
  }

  private calculateNumber(): void {
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

  private addNumberToStore(): void {
    this.$store.commit('addBarcodeNumber', this.numberCalculated);
  }

  private resetForm(): void {
    this.numberCalculated = '';
    this.isValidInput = true;
  }

  private get counterClass(): string {
    return (this.number.length >= 7 && this.number.length <= 9) ? 'counter--is-valid' : 'counter--is-invalid';
  }

  private get showResult(): boolean {
    return this.isValidInput && this.numberCalculated.length > 0;
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
    opacity: 1;
    transition: 0.5s all;
  }

  .fields--is-disabled {
    pointer-events: none;
    filter: grayscale(1);
    opacity: 0.25;
  }

  .form-row {
    display: flex;
    margin-bottom: 0.5rem;
    flex-direction: column;
  }

  .form-label {
    display: flex;
    margin-bottom: 0.5rem;
    align-items: baseline;

    & .text {
      margin-right: auto;
    }

    & .counter {
      font-size: 0.85rem;
      font-style: italic;
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
    font-size: 0.85rem;
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
    display: flex;
    padding: 1rem;
    justify-content: center;
    text-align: center;
    color: var(--color-alpha);
    border: 1px solid var(--color-gamma);

    & .key {
      padding: 0.25rem;
      white-space: nowrap;
    }

    & .value {
      padding: 0.25rem;
      font-weight: bold;
    }
  }
</style>
