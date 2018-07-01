<template>
  <div class="wrapper">
    <header class="header">
      Header
    </header>
    <main class="main">
      <NumberInput></NumberInput>
    </main>
    <footer class="footer">
      Footer
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NumberInput from './components/NumberInput.vue';

@Component({
  components: {
      NumberInput,
  },
})
export default class App extends Vue {}
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
  font-size: 16px;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-delta);
  overflow: scroll;
}

.wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
}

.main {}

.header {
  padding: 1rem 0.5rem;
  color: var(--color-zeta) var(--color-beta);
}

.footer {
  color: var(--color-zeta) var(--color-delta);
}
</style>
