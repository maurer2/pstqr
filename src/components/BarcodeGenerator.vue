<template>
  <section class="barcode" v-if="postNumber">
      <h2>Barcode</h2>
      <svg class="barcode-image" jsbarcode-format="itf" :jsbarcode-value="postNumber" ref="barcode"></svg>
  </section>
</template>

<script lang="ts">
    // https://github.com/vuejs/vue-class-component
    import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
    import JsBarcode from 'jsbarcode';

    @Component
    export default class BarcodeGenerator extends Vue {
        @Prop({ type: [Boolean, String], default: false, required: true })
        postNumber: boolean | string;

        constructor() {
            super();
        }

        mounted () {
            this.initBarcode();
        }

        initBarcode() {
            if (!this.postNumber) {
                return
            }

            const barcodeDom = this.$refs['barcode'];
            JsBarcode(barcodeDom).init();
        }

        @Watch('postNumber')
        onPropertyChanged(newValue: string | boolean) {
            if (newValue !== false) {
                this.initBarcode();
            }
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
