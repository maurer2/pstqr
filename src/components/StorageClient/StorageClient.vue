<template>
  <section class="section localstorage">
    LocalStorage Component
    <template v-if="localStorageIsSupported">
      <div class="button-group">
        <button
          type="button"
          @click="setSavedNumbers"
        >
          Set Dummy Values
        </button>
        <button
          type="button"
          @click="getSavedNumbers"
        >
          Get Saved numbers
        </button>
      </div>
      <template v-for="number in getSavedNumbers()">
        <div :key="number">
          {{ number }}
        </div>
      </template>
    </template>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LocalStorageClient extends Vue {
  
}
</script>

<style scoped lang="postcss">

</style>
