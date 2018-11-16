<template>
  <div class="card-view">
    <h2 class="section-headline">Nummer konvertieren</h2>
    <number-input />
  </div>
</template>

<script>
  import NumberInput from '@/components/NumberInput.vue';

  export default {
    name: 'card',
    components: {
      NumberInput,
    },
  };
</script>
