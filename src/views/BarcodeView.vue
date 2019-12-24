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
  private numbersList: string[] = [];
  private selectedNumber: string = '';
  private hasBarcodeNumbers: boolean = false;

  private mounted() {
    if (this.$store.getters.hasBarcodeNumbers) {
      this.numbersList = this.$store.state.barcodeNumbers;
      this.hasBarcodeNumbers = true;
    }
  }

  private updateSelectedNumber(value: string) {
    this.selectedNumber = value;
  }
}
</script>
