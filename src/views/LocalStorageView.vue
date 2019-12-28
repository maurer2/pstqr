<template>
  <div class="card-view">
    <h2 class="section-headline">
      LocalStorage
    </h2>
    <template v-if="!hasStorageSupport">
      <LocalStorageClient />
    </template>
    <template v-else>
      <p class="message">
        Storage not available
      </p>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

import LocalStorageClient from '@/components/LocalStorageClient/LocalStorageClient.vue';

@Component({
  name: 'LocalStorageView',
  components: {
    LocalStorageClient,
  },
})
export default class LocalStorageView extends Vue {
  @State('hasStorageSupport') hasStorageSupport!: boolean;
}

</script>
