<template>
  <div class="barcode-view">
    <NumberSelect v-if="numbersList.length > 0" :numbersList="numbersList" @numberHasChanged="updateSelectedNumber" />
    <BarcodeGenerator v-if="selectedNumber.length > 0" :number="selectedNumber"></BarcodeGenerator>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  import NumberSelect from '@/components/NumberSelect.vue';
  import BarcodeGenerator from '@/components/BarcodeGenerator.vue';

  @Component({
    name: 'BarcodeView',
    components: {
      NumberSelect, BarcodeGenerator,
    },
  })
  export default class BarcodeView extends Vue {
    private numbersList!: string[];
    private selectedNumber: string = '';

    constructor() {
      super();

      this.numbersList = ['12345678901234', '43210987654321']; // dummy

      if (this.$store.state.convertedNumber.length > 0) {
        this.numbersList = this.numbersList.concat(this.$store.state.convertedNumber);
      }
    }

    private updateSelectedNumber(value: string) {
      this.selectedNumber = value;
    }
  }
</script>
