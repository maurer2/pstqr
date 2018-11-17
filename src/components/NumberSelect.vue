<template>
  <section class="section number-select">
    <h2>Gespeicherte Nummern</h2>
    <select v-model="selectedNumber">
      <option disabled value="">Nummer Auswählen</option>
      <option v-for="number in numbersList":key="number">
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

<style lang="pcss" scoped>

</style>
