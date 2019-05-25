<template>
  <div class="wrapper">
    <header class="header">
      <h1 class="title">
        PSTQR
      </h1>
    </header>
    <nav class="nav">
      <router-link
        class="router-link"
        to="/"
      >
        Home
      </router-link>
      <router-link
        class="router-link"
        to="/inputView"
      >
        Input
      </router-link>
      <router-link
        class="router-link"
        to="/barcodeView"
      >
        Barcode
      </router-link>
      <router-link
        class="router-link"
        to="/localStorageView"
      >
        LocalStorage
      </router-link>
    </nav>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      Footer
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style>
@import '~normalize.css';
@import 'global.css';

.wrapper {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100%;
}

.header {
  padding: 0.5rem;
  color: var(--color-zeta) var(--color-beta);

  & .title {
    margin: 0;
    font-size: 1.75rem;
    color: var(--color-delta);
  }
}

.nav {
  display: flex;
  justify-content: space-evenly;
  background: var(--color-alpha);

  & .router-link {
    padding: 0.5rem;
    flex-grow: 1;
    // flex-basis: 0;
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
  padding: 0.5rem;
  color: var(--color-zeta) var(--color-delta);
}
</style>
