<template>
  <div class="card-view">
    <h2 class="section-headline">
      Nummer eingeben
    </h2>
    <NumberForm />

    <template v-if="false">
      <h2 class="section-headline">
        Scan Card with Google Mobile Vision
      </h2>
      <ImageCapturing />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NumberForm from '@/components/NumberForm/NumberForm.vue';
import ImageCapturing from '@/components/ImageCapturing/ImageCapturing.vue';

@Component({
  name: 'InputView',
  components: {
    NumberForm,
    ImageCapturing,
  },
})
export default class InputView extends Vue {}
</script>
