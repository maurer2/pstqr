<template>
  <div class="card-view">
    <h2 class="section-headline">Nummer eingeben</h2>
    <number-input />

    <h2 class="section-headline">Scan Card</h2>
    <video ref="scanner" id="scanner" autoplay></video>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  import NumberInput from '@/components/NumberInput.vue';

  @Component({
    name: 'InputView',
    components: {
        NumberInput,
    },
  })
  export default class InputView extends Vue {
    private mounted() {
      const videoElement: any = this.$refs.scanner;

      navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        .then((mediaStream) => {
          videoElement.srcObject = mediaStream;
          videoElement.onloadedmetadata = (e: any) => {
            videoElement.play();
          };
        })
        .catch((error) => {
           console.log(error);
        });
    }
  }
</script>

<style scoped>
  #scanner {
    width: 100%;
    height: auto;
  }
</style>

