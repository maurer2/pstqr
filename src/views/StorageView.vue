<template>
  <div class="card-view">
    <h2 class="section-headline">
      Storage
    </h2>
    <template v-if="hasStorageSupport && hasBarcodeNumbers">
      <StorageClient
        :barcode-numbers="barcodeNumbers"
        @clearStorage="clearStorage"
      />
    </template>
    <template v-else>
      <p class="message">
        Persistent storage not available or empty.
      </p>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter } from 'vuex-class';

import StorageClient from '@/components/StorageClient/StorageClient.vue';

@Component({
  name: 'LocalStorageView',
  components: {
    StorageClient,
  },
})
export default class LocalStorageView extends Vue {
  @State('hasStorageSupport') hasStorageSupport!: boolean;
  @State('barcodeNumbers') barcodeNumbers!: string[];
  @Getter('hasBarcodeNumbers') hasBarcodeNumbers!: boolean;

  private clearStorage() {
    this.$store.commit('clearBarcodeNumbers');
  }
}

</script>
