<template>
  <section class="section number-select">
    <h2 class="section-title">
      Gespeicherte Nummern
    </h2>
    <select
      class="selectbox select-css"
      v-model="selectValue"
      @change="$emit('numberHasChanged', newBarcodeNumber)"
    >
      <option disabled value="">
        Nummer auswählen
      </option>
      <option v-for="number in numbersList" :key="number">
        {{ number }}
      </option>
    </select>
    <p class="message" v-if="hasSelectedBarcodeNumber">
      <span class="key">
        Gewählte Nummer:
      </span>
      <span class="value">
        {{ selectedBarcodeNumber }}
      </span>
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NumberSelect extends Vue {
  @Prop({ default: () => [] }) private numbersList!: [];
  @Prop() private selectedBarcodeNumber!: string;

  private newBarcodeNumber: string = this.selectedBarcodeNumber;

  private get selectValue(): string {
    return this.newBarcodeNumber;
  }

  private set selectValue(value: string) {
    this.newBarcodeNumber = value;
  }

  private get hasSelectedBarcodeNumber(): boolean {
    return this.selectedBarcodeNumber !== '';
  }
}
</script>

<style scoped lang="postcss">
  .number-select {}

  .selectbox {
    border: 1px solid var(--color-delta);
    border-radius: 0;
  }

  .message {
    & .value {
      font-weight: bold;
    }
  }

</style>
