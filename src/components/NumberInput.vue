<template>
  <form class="section form" @submit.prevent="calculateNewNumber()" autocomplete="off">
    <div class="form-row">
      <label class="form-label" for="number-old">Alte Nummer</label>
      <input class="form-field" name="number-old" id="number-old" v-model="numberOld" autocomplete="off" />
      <p class="form-error"></p>
    </div>
    <div class="form-row">
      <label class="form-label" for="number-old">Neue Nummer</label>
      <input class="form-field" v-model="numberNew" readonly="readonly" />
    </div>
    <div class="form-row">
      <button type="submit" class="btn" @click="$emit('newNumber', numberNew)">Submit</button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

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
  public calculateNewNumber(element: any) {
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
    }
  }

  @Watch('numberCalculated')
  public numberCalculatedChanged(value: string) {
    this.$emit('numberChanged', value);
  }
}
</script>

<style lang="pcss" scoped>
  .form {
    overflow: hidden;
    text-align: left;
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
