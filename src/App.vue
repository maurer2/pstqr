<template>
  <div class="wrapper" id="app">
    <header class="header">
      Header
    </header>
    <main class="main">
      <nav class="nav">
        <div class="nav-buttons">
          <router-link to="/">Home</router-link>
          <router-link to="/card">Card</router-link>
          <router-link to="/barcode">Barcode</router-link>
        </div>
      </nav>
      <router-view/>
    </main>
    <footer class="footer">
      Footer
    </footer>
  </div>
</template>


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

.wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
}

.row {

}

.col {
  flex-shrink: 0;
  flex-grow: 1;
  flex-basis: 0;
}

.main {}

.header {
  padding: 1rem 0.5rem;
  color: var(--color-zeta) var(--color-beta);
}

.nav {
  overflow: hidden;
  background: azure;
}

.nav-buttons {
    margin-bottom: 1rem;
}

.footer {
  color: var(--color-zeta) var(--color-delta);
}
</style>
