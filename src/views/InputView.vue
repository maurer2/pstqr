<template>
  <div class="card-view">
    <h2 class="section-headline">Nummer eingeben</h2>
    <number-input />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  import NumberInput from '@/components/NumberInput.vue';

  @Component({
    name: 'InputView',
    components: {
        NumberInput,
    },
  })
  export default class InputView extends Vue {}
</script>
