<template>
  <div class="wrapper">
    <header class="header">
      <h1 class="title">
        PSTQR
      </h1>
    </header>
    <nav class="nav">
      <template v-for="(route, routeName) in routesMap">
        <router-link
          class="link"
          active-class="link--is-active"
          exact-active-class="link--is-active"
          exact
          :to="route"
          :key="route"
        >
          {{ routeName }}
        </router-link>
      </template>
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
export default class App extends Vue {
  private routesMap: { [key: string]: string } = {
    Home: '/',
    Input: '/inputView',
    Barcode: '/barcodeView',
    LocalStorage: '/localStorageView',
  };
}
</script>

<style lang="postcss">
@import 'normalize';
@import '~fg-select-css/src/select-css.css';
@import 'vars.css';
@import 'global.css';
</style>

<style scoped lang="postcss">
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

  & .link {
    padding: 0.5rem;
    flex-grow: 1;
  }

  & .link--is-active {
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
