<template>
  <section class="section image-capture">
    <div class="responsive-embed" v-if="cameraIsAvailable">
      <video class="responsive-content" ref="scanner" autoplay></video>
    </div>
    <div class="error" v-else>
      Leider konnte auf die Kamera nicht zugeriffen werden.
    </div>
  </section>
</template>

<script lang="ts">
  import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

  @Component
  export default class ImageCapturing extends Vue {
    private cameraIsAvailable: boolean = true;

    private mounted() {
      const videoElement: HTMLVideoElement = this.$refs.scanner as HTMLVideoElement;

      navigator.mediaDevices.getUserMedia({ video: true })
        .then((mediaStream: MediaStream) => {
          videoElement.srcObject = mediaStream;
          videoElement.play();
        })
        .catch((error) => {
          this.cameraIsAvailable = false;
          console.log(error);
        });
    }
  }
</script>

<style scoped>
  .image-capture {
    text-align: left;
  }

  .responsive-embed {
    position: relative;
    width: 100%;
    padding-bottom: 56%;
    overflow: hidden;
  }

  .responsive-content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
