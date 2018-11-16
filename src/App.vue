<template>
  <div class="wrapper" id="app">
    <header class="header">
      Header
    </header>
    <nav class="nav">
      <router-link class="router-link" to="/">Home</router-link>
      <router-link class="router-link" to="/card">Card</router-link>
      <router-link class="router-link" to="/barcode">Barcode</router-link>
      <router-link class="router-link" to="/localstorage">LocalStorage</router-link>
    </nav>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">
      Footer
    </footer>
  </div>
</template>

<script lang="ts">
  // https://github.com/vuejs/vue-class-component
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class App extends Vue {
    public postNumber: string = '';

    public onNumberChanged(value: any) {
       console.log('numberChanged', value);
    }
  }
</script>

<style>
@import-normalize;
@import 'global.css';

.wrapper {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100%;
}

.header {
  padding: 0.5rem;
  color: var(--color-zeta) var(--color-beta);
}

.nav {
  display: flex;
  justify-content: space-evenly;
  background: var(--color-alpha);

  & .router-link {
    padding: 0.5rem;
    flex-grow: 1;
    flex-basis: 0;
  }

  & .router-link--is-active {
    font-weight: bold;
    background: var(--color-zeta);
    color: var(--color-alpha);
  }
}

.main {
  padding: 0.5rem;
}

.footer {
  color: var(--color-zeta) var(--color-delta);
}
</style>
