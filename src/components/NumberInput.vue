<template>
  <form class="section form" @submit.prevent="calculateNewNumber()" autocomplete="off">
    <h2 class="section-title">Input</h2>
    <div class="form-row">
      <label class="form-label" for="number-old">Alte Nummer</label>
      <input class="form-field" name="number-old" id="number-old" placeholder="Alte Nummer" value="numberOld" @change="calculateNewNumber" autocomplete="off" />
      <p class="form-error"></p>
    </div>
    <div class="form-row">
      <label class="form-label" for="number-old">Neue Nummer</label>
      <input class="form-field" v-model="numberNew" readonly="readonly" placeholder="Neue Nummer" />
    </div>
    <div class="form-row">
      <button type="submit" class="btn" @click="$emit('newNumber', numberNew)">Submit</button>
    </div>
  </form>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class NumberInput extends Vue {
    // data
    public numberOld: string = '';
    public numberCalculated: string = '';

    constructor() {
      super();
    }

    // calculated properties
    get numberNew() {
      return this.numberCalculated;
    }

    // methods
    public calculateNewNumber(value) {
      console.log(value);
      this.numberOld = value;
      this.numberCalculated = value + 'Neu';

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
  }
</script>

<style lang="pcss" scoped>
  .form {
    padding: 0 1rem;
    height: 100%;
    overflow: hidden;
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
