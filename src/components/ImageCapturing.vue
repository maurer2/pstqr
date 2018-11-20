<template>
  <section class="section image-capture">
    <div class="responsive-embed" v-if="cameraIsAvailable">
      <video class="responsive-content" ref="scanner" autoplay></video>
      <a href="#" class="responsive-overlay" @click.prevent="stopVideo">
        Capture
      </a>
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
    private videoElement!: HTMLVideoElement;

    private mounted() {
      this.videoElement = this.$refs.scanner as HTMLVideoElement;

      this.startVideo();
    }

    private startVideo() {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((mediaStream: MediaStream) => {
            this.videoElement.srcObject = mediaStream;
            this.videoElement.play();
        })
        .catch((error) => {
            this.cameraIsAvailable = false;
            console.log(error);
        });
    }

    private stopVideo() {
      this.videoElement.pause();
    }

    // private captureImage() {}
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

  .responsive-overlay {
    position: absolute;
    left: 50%;
    padding: 0.5rem;
    transform: translateX(-50%);
    color: var(--color-zeta) var(--color-alpha);
  }
</style>
