<template>
  <div class="barcode-view">
    <template v-if="hasBarcodeNumbers">
      <NumberSelect
        v-if="numbersList.length > 0"
        :numbers-list="numbersList"
        @numberHasChanged="updateSelectedNumber"
      />
      <BarcodeGenerator
        v-if="selectedNumber.length > 0"
        :number="selectedNumber"
      />
    </template>
    <template v-else>
      <p class="message">
        No saved numbers yet.
      </p>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import NumberSelect from '@/components/NumberSelect/NumberSelect.vue';
import BarcodeGenerator from '@/components/BarcodeGenerator/BarcodeGenerator.vue';

@Component({
  name: 'BarcodeView',
  components: {
    NumberSelect,
    BarcodeGenerator,
  },
})
export default class BarcodeView extends Vue {
  private selectedNumber: string = '';

  private get hasBarcodeNumbers(): boolean {
    return this.$store.getters.hasBarcodeNumbers;
  }

  private get numbersList(): string[] {
    return this.$store.state.barcodeNumbers;
  }

  private updateSelectedNumber(value: string) {
    this.selectedNumber = value;
  }
}
</script>
