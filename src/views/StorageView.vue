<template>
  <div class="card-view">
    <h2 class="section-headline">
      Storage
    </h2>
    <template v-if="hasStorageSupport">
      <StorageClient />
    </template>
    <template v-else>
      <p class="message">
        Persistent storage not available.
      </p>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

import StorageClient from '@/components/StorageClient/StorageClient.vue';

@Component({
  name: 'LocalStorageView',
  components: {
    StorageClient,
  },
})
export default class LocalStorageView extends Vue {
  @State('hasStorageSupport') hasStorageSupport!: boolean;
}

</script>
