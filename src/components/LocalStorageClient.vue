<template>
  <section class="section localstorage">
    LocalStorage Component
  </section>
</template>

<script lang="ts">
  import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

  @Component
  export default class LocalStorageClient extends Vue {
    constructor() {
      super();
    }
  }
</script>

<style scoped>

</style>
