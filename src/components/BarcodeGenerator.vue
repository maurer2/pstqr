<template>
  <section class="section barcode-generator">
    <h2 class="section-title">Nummer als Barcode</h2>
    <svg class="barcode" jsbarcode-format="itf" :jsbarcode-value="number" ref="barcode"></svg>
  </section>
</template>

<script lang="ts">
  import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
  import JsBarcode from 'jsbarcode';

  @Component
  export default class BarcodeGenerator extends Vue {
    @Prop({ type: [Boolean, String], default: false, required: true })
    private number!: string;

    public mounted() {
      this.initBarcode();
    }

    public initBarcode() {
      if (this.number.length === 0) {
        return;
      }

      const barcodeDom = this.$refs.barcode;
      JsBarcode(barcodeDom).init();
    }

    @Watch('number')
    public onPropertyChanged(newValue: string) {
      this.$nextTick().then(() => {
        if (newValue.length > 0) {
          this.initBarcode();
        }
      });
    }
  }
</script>

<style scoped>
  .barcode {
    display: block;
    margin: auto;
  }
</style>
