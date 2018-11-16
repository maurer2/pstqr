<template>
  <div class="wrapper" id="app">
    <header class="header">
      Header {{ postNumber }}
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
  min-height: 100%;
  height: 100%;
  color: var(--color-delta) var(--color-zeta);
}

html {
  font-size: 1rem;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-y: scroll;
  color: var(--color-delta);
}

a,
a:link,
a:visited,
a:active,
a:hover {
  color: var(--color-beta);
  text-decoration: none;
}

a:disabled {
  color: #c3c3c3;
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
