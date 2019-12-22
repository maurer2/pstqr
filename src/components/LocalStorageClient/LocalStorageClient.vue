<template>
  <section class="section localstorage">
    LocalStorage Component
    <template v-if="localStorageIsSupported">
      <div>
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
  private localStorageIsSupported: boolean = false;
  private uniqueKey: string = 'PSTQR';

  private mounted() {
    try {
      const keyName = `${this.uniqueKey}-isSupported`;

      localStorage.setItem(keyName, 'true');
      localStorage.removeItem(keyName);

      this.localStorageIsSupported = true;
    } catch (e) {
      this.localStorageIsSupported = false;
    }
  }

  private setSavedNumbers() {
    if (!this.localStorageIsSupported) {
      return;
    }
    // dummy items
    const numbers = ['12345678901234', '43210987654321'];
    const keyName = `${this.uniqueKey}-numbers`;
    localStorage.setItem(keyName, JSON.stringify(numbers));
  }

  private getSavedNumbers(): string | null {
    const keyName = `${this.uniqueKey}-numbers`;
    const restoredNumbers: string | null = localStorage.getItem(keyName) || null;

    if (restoredNumbers === null) {
      return null;
    }

    console.log(restoredNumbers);

    return JSON.parse(restoredNumbers);
  }
}
</script>

<style scoped lang="postcss">

</style>
