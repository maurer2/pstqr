<template>
  <section class="section localstorage">
    LocalStorage Component
    <template v-if="localStorageIsSupported">
      <div>
        <button type="button" @click="setSavedNumbers">Set Dummy Values</button>
        <button type="button" @click="getSavedNumbers">Get Saved numbers</button>
      </div>
      <template v-for="number in getSavedNumbers()">
        <div :key="number">{{ number }} </div>
      </template>
    </template>
  </section>
</template>

<script lang="ts">
  import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

  @Component
  export default class LocalStorageClient extends Vue {
    private localStorageIsSupported: boolean = false;
    private uniqueKey: string = 'pstqr';

    constructor() {
      super();

      try {
        localStorage.setItem(this.uniqueKey + 'isSupported', 'isSupported');
        localStorage.removeItem(this.uniqueKey + 'isSupported');

        this.localStorageIsSupported = true;
      } catch(e) {
        this.localStorageIsSupported = false;
      }
    }

    setSavedNumbers() {
      if(!this.localStorageIsSupported) {
        return
      }
      // dummy items
      const numbers = ['12345678901234', '43210987654321'];
      localStorage.setItem(this.uniqueKey + '-numbers',  JSON.stringify(numbers));
    }

    getSavedNumbers() {
      const restoredNumbers = JSON.parse(localStorage.getItem(this.uniqueKey + '-numbers'));

      console.log(restoredNumbers);

      return restoredNumbers;
    }
  }
</script>

<style scoped>

</style>
