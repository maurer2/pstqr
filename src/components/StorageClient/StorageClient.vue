<template>
  <section class="section storage">
    <h2 class="section-title">
      Stored numbers
    </h2>
    <ul class="list">
      <template v-for="(barcodeNumber, index) in barcodeNumbers">
        <li class="entry" :key="index">
          {{ barcodeNumber }}
        </li>
      </template>
    </ul>
    <h2 class="section-title">
      Store actons
    </h2>
    <div class="button-group">
      <button
        type="button"
        @click="clearStorage"
      >
        Clear stored numbers
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class StorageClient extends Vue {
  @Prop({ default: () => [] }) private barcodeNumbers!: string[];

  private clearStorage(): void {
    this.$emit('clearStorage');
  }
}
</script>

<style scoped lang="postcss">
.storage {}

.list {
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-delta);
}

.entry {
  padding: 1rem;
  color: var(--color-delta) white;

  & + .entry {
    border-top: 1px solid var(--color-delta);
  }

  &:nth-child(even) {
    background: var(--color-zeta);
  }
  
}

</style>
