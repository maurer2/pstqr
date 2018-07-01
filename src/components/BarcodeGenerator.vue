<template>
  <div class="barcode-wrapper">
      Barcode
  </div>
</template>

<script lang="ts">
    // https://github.com/vuejs/vue-class-component
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class BarcodeGenerator extends Vue {
        constructor() {
            super();
        }
    }
</script>

<style lang="pcss" scoped>
    .barcode-wrapper {
        background: black;
    }
</style>
