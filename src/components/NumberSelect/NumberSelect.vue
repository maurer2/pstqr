<template>
  <section class="section number-select">
    <h2>Gespeicherte Nummern</h2>

    <select
      class="selectbox"
      v-model="selectedNumber"
      @change="$emit('numberHasChanged', selectedNumber)"
    >
      <option disabled value="">
        Nummer auswählen
      </option>
      <option v-for="number in numbersList" :key="number">
        {{ number }}
      </option>
    </select>

    <p class="message" v-if="hasSelectedNumber">
      <span class="key">
        Gewählte Nummer:
      </span>
      <span class="value">
        {{ selectedNumber }}
      </span>
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NumberSelect extends Vue {
  @Prop({ default: () => [] }) private numbersList!: [];
  @Prop({ default: () => [] }) private numbersList!: [];

  private selectedNumber = '' as string;

  private get hasSelectedNumber(): boolean {
    return this.selectedNumber !== '';
  }
}
</script>

<style scoped lang="postcss">
  .number-select {}

  .selectbox {
    padding: 0.5rem;
    border-radius: 0;
    appearance: none;
  }

  .message {
    & .value {
      font-weight: bold;
    }
  }

</style>
