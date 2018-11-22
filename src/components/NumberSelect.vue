<template>
  <section class="section number-select">
    <h2>Gespeicherte Nummern</h2>
    <select class="selectbox" v-model="selectedNumber" @change="$emit('numberHasChanged', selectedNumber)">
      <option disabled value="">Nummer auswählen</option>
      <option v-for="number in numbersList" :key="number">
        {{ number }}
      </option>
    </select>
    <p>
      Gewählte Nummer: {{ selectedNumber }}
    </p>
  </section>
</template>

<script lang="ts">
  import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

  @Component
  export default class NumberSelect extends Vue {
    @Prop({ type: Array, default: () => [] })
    private numbersList!: [];

    private selectedNumber = '' as string;
  }
</script>

<style scoped>
  .selectbox {
    padding: 0.5rem;
    border-radius: 0;
    appearance: none;
  }
</style>
