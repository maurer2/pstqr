<template>
  <div class="wrapper" id="app">
    <header class="header">
      Header {{ postNumber }}
    </header>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/card">Card</router-link>
      <router-link to="/barcode">Barcode</router-link>
      <router-link to="/localstorage" disabled>LocalStorage</router-link>
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

  public onNumberChanged(value) {
     console.log('numberChanged', value);
  }
}
</script>

<style lang="pcss">
@import-normalize;

:root {
  --color-alpha: rgba(72, 65, 76, 1);
  --color-beta: rgba(182, 151, 160, 1);
  --color-gamma: rgba(147, 144, 156, 1);
  --color-delta: rgba(75, 67, 64, 1);
  --color-zeta: rgba(232, 228, 226, 1);
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100%;
  height: 100%;
  background: var(--color-zeta);
}

html {
  font-size: 1rem;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-y: scroll;
  color: var(--color-delta);
}

a:link,
a:visited,
a:active,
a:hover {
  color: inherit;
  text-decoration: none;
}

.wrapper {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100%;
}

.row {
  display: flex;
}

.col {
  flex-shrink: 0;
  flex-grow: 1;
  flex-basis: 0;
}

.header {
  padding: 0.5rem;
  color: var(--color-zeta) var(--color-beta);
}

.nav {
  display: flex;
  padding: 0.5rem;
  justify-content: space-evenly;
  background: var(--color-gamma);
  color: var(--color-zeta);
}

.main {
  padding: 0.5rem;
}

.footer {
  color: var(--color-zeta) var(--color-delta);
}

.router-link {}

.router-link--is-active {
  font-weight: bold;
}
</style>
