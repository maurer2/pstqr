<template>
  <div class="card-view">
    <h2 class="section-headline">
      LocalStorage
    </h2>
    <LocalStorageClient />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LocalStorageClient from '@/components/LocalStorageClient/LocalStorageClient.vue';

@Component({
  name: 'LocalStorageView',
  components: {
    LocalStorageClient,
  },
})
export default class LocalStorageView extends Vue {}
</script>
