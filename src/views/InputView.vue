<template>
  <div class="card-view">
    <h2 class="section-headline">Nummer eingeben</h2>
    <number-input />

    <h2 class="section-headline">Scan Card with Google Mobile Vision</h2>
    <image-capturing />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  import NumberInput from '@/components/NumberInput.vue';
  import ImageCapturing from '@/components/ImageCapturing.vue';

  @Component({
    name: 'InputView',
    components: {
        NumberInput, ImageCapturing,
    },
  })
  export default class InputView extends Vue {}
</script>
