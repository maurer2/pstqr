<template>
  <section class="section cardinput">
      <h2>Card input</h2>
  </section>
</template>

<script lang="ts">
    // https://github.com/vuejs/vue-class-component
    import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

    @Component
    export default class CardInput extends Vue {
        @Prop({ type: [Boolean, String], default: false, required: false })

        constructor() {
            super();
        }
    }
</script>

<style lang="pcss" scoped>
    .cardinput {
        height: 100%;
        background: navajowhite;
        overflow: hidden;
    }
</style>
