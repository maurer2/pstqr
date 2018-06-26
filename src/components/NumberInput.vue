<template>
  <div>
    <h1>Number In</h1>

    <label for="number-old">Alte Nummer</label>
    <input type="text" name="number-old" id="number-old" placeholder="Alte Nummer" />
  </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class NumberInput extends Vue {}
</script>

<style lang="pcss" scoped>
    div {
        background: gray;
    }
</style>import { Component, Prop, Vue } from 'vue-property-decorator';
