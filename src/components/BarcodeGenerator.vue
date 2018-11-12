<template>
  <section class="section barcode">
      <h2 class="section-title">Barcode</h2>
      <svg class="barcode-image" jsbarcode-format="itf" :jsbarcode-value="newNumber" ref="barcode"></svg>
  </section>
</template>

<script lang="ts">
    // https://github.com/vuejs/vue-class-component
    import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
    import JsBarcode from 'jsbarcode';

    @Component
    export default class BarcodeGenerator extends Vue {
        @Prop({ type: [Boolean, String], default: false, required: true })
        private newNumber!: boolean | string;

        constructor() {
            super();
        }

        public mount() {
            this.initBarcode();
        }

        public initBarcode() {
            if (!this.newNumber) {
                return;
            }

            const barcodeDom = this.$refs.barcode;
            JsBarcode(barcodeDom).init();
        }

        @Watch('newNumber')
        public onPropertyChanged(newValue: string | boolean) {
            this.$nextTick().then(() => {
                if (newValue !== false) {
                    this.initBarcode();
                }
            });
        }
    }
</script>

<style lang="pcss" scoped>
    .barcode {
        background: #c3c3c3;
        overflow: hidden;
    }

    .barcode-image {
        display: block;
        margin: 1rem auto;
    }
</style>
