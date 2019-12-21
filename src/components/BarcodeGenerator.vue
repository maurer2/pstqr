<template>
  <section class="section barcode-generator">
    <h2 class="section-title">
      Nummer als Barcode
    </h2>
    <svg
      ref="barcode"
      class="barcode"
      jsbarcode-format="itf"
      :jsbarcode-value="number"
    />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import JsBarcode from 'jsbarcode';

@Component
export default class BarcodeGenerator extends Vue {
  @Prop({ type: [Boolean, String], default: false, required: true }) private number!: string;

  private mounted() {
    this.initBarcode();
  }

  private initBarcode() {
    if (this.number.length === 0 || this.$refs.barcode === undefined) {
      return;
    }

    JsBarcode(this.$refs.barcode).init();
  }

  @Watch('number')
  private onPropertyChanged(newValue: string) {
    this.$nextTick().then(() => {
      if (newValue.length > 0) {
        this.initBarcode();
      }
    });
  }
}
</script>

<style scoped lang="postcss">
  .barcode {
    display: block;
    margin: auto;
  }
</style>
