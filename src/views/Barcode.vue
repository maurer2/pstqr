<template>
  <div class="barcode-view">
    <NumberSelect :numbersList="numbersList"/>
    Barcode
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  import NumberSelect from '@/components/NumberSelect.vue';

  @Component({
    name: 'barcode',
    components: {
      NumberSelect,
    },
  })
  export default class Barcode extends Vue {
    public numbersList!: string[];

    constructor() {
      super();

      this.numbersList = ['1235', '456'];
    }

    private mounted() { }
  }
</script>
