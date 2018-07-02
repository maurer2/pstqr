<template>
  <section class="section localstorage">
      <h2>Saved Numbers</h2>
      <ul class="list list-buttons" v-for="number in numberList" :key="number" v-if="numberList.length > 0">
        <li class="list-entry">
            <button type="button">{{ number }}</button>
        </li>
      </ul>
  </section>
</template>

<script lang="ts">
    // https://github.com/vuejs/vue-class-component
    import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

    @Component
    export default class LocalStorageClient extends Vue {
        @Prop({ type: [Boolean, String], default: false, required: false })
        numberToSave: boolean | string;

        numberList: string[] = [];

        constructor() {
            super();

            this.numberList.push('123456');
        }
    }
</script>

<style lang="pcss" scoped>
    .localstorage {
        height: 100%;
        background: navajowhite;
        overflow: hidden;
    }

    .list-buttons {
        list-style: none;
    }
</style>
