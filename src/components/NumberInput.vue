<template>
  <form class="section form" @submit.prevent="calculateNewNumber()" autocomplete="off">
    <fieldset class="fields">
      <div class="form-row">
        <label class="form-label" for="number-old">Alte Nummer:</label>
        <input class="form-field" name="number-old" id="number-old" v-model="numberOld" autocomplete="off" />
        <p class="form-error" v-if="showErrorMessage">
          Nummer muss 7 bis 9 Zeichen lang sein!
        </p>
      </div>
      <div class="form-row">
        <button type="submit" class="form-button" @click="$emit('newNumber', numberNew)">Submit</button>
      </div>
    </fieldset>
    <div class="results">
      Neue Nummer: <span>{{ numberNew }}</span>
    </div>
  </form>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

  @Component
  export default class NumberInput extends Vue {
    // data
    private numberOld: string = '';
    private numberCalculated: string = '';
    private showErrorMessage: boolean = false;

    constructor() {
      super();
    }

    // calculated properties
    get numberNew() {
      return this.numberCalculated;
    }

    // methods
    public calculateNewNumber() {
      /*
      const isValidLength = (this.numberOld.length >= 7 && this.numberOld.length <= 9);
      // https://github.com/lodash/lodash/issues/1148
      const isNumber = true; // dummy

      // number 7 to 9 digits
      if (isValidLength && isNumber) {
        // this.numberCalculated =
      }
      */
    }

    @Watch('numberOld')
    public onNumberOldChanged(value: string) {
      const isValidLength = (value.length >= 7 && value.length <= 9);

      if (isValidLength) {
        this.numberCalculated = value;
        this.showErrorMessage = false;
        this.$store.commit('addCalculatedNumber', value);
      } else {
          this.showErrorMessage = true;
          this.$store.commit('addCalculatedNumber', '');
      }
    }

    @Watch('numberCalculated')
    public numberCalculatedChanged(value: string) {
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

  .form-error {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: red;

    &:empty {
      display: none;
    }
  }
</style>
