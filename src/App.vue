<template>
    <div class="wrapper">
        <header class="header">
          Header <template v-if="newNumber !== false">(Number: {{ newNumber }})</template>
        </header>
        <main class="main">
            <nav class="nav">
                <h2 class="section-headline">Eingabe&shy;möglichkeiten</h2>
                <div class="nav-buttons">
                    <button type="button" :disabled="!cardInputIsAvailable">
                        Karte scannen
                    </button>
                    <button type="button" :disabled="!localStorageIsAvailable">
                        Gespeicherte Karte
                    </button>
                    <button type="button" :disabled="!numberInputIsAvailable">
                        Nummer Eingabe
                    </button>
                </div>
            </nav>
            <div class="row">
                <LocalStorageClient :numberToSave="false"></LocalStorageClient>
            </div>
            <div class="row">
                <NumberInput v-on:newNumber="onNewNumber"></NumberInput>
            </div>
            <div class="row">
                <BarcodeGenerator :newNumber="newNumber"></BarcodeGenerator>
            </div>
        </main>
        <footer class="footer">
            Footer
        </footer>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NumberInput from './components/NumberInput.vue';
import BarcodeGenerator from './components/BarcodeGenerator.vue';
import LocalStorageClient from './components/LocalStorageClient.vue';

@Component({
  components: {
      NumberInput, BarcodeGenerator, LocalStorageClient,
  },
})
export default class App extends Vue {
    public cardInputIsAvailable: boolean = false;
    public localStorageIsAvailable: boolean = false;
    public numberInputIsAvailable: boolean = true;
    public activeComponent: Vue | boolean = false;
    public newNumber: string | boolean = false;

    constructor() {
        super();
    }

    public onNewNumber(newNumber: string | boolean) {
        this.newNumber = newNumber;
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
