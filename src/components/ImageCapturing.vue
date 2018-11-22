<template>
  <section class="section image-capture">
    <div class="responsive-embed" v-if="cameraIsAvailable">
      <video class="video" ref="scanner" autoplay></video>
      <div class="overlay">
        <button type="button" class="button" @click.prevent="toggleVideoState">
          <span class="text" v-if="videoIsPlaying">Stop</span>
          <span class="text" v-else>Start</span>
        </button>
        <button type="button" class="button" @click.prevent="captureVideo" disabled>
          Capture
        </button>
      </div>
    </div>
    <div class="error" v-else>
      Leider konnte auf die Kamera nicht zugegriffen werden.
    </div>
  </section>
</template>

<script lang="ts">
  import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

  @Component
  export default class ImageCapturing extends Vue {
    private cameraIsAvailable: boolean = true;
    private videoElement!: HTMLVideoElement;
    private videoIsPlaying: boolean = false;

    private mounted() {
      this.videoElement = this.$refs.scanner as HTMLVideoElement;

      this.startVideo();
    }

    private startVideo() {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((mediaStream: MediaStream) => {
            this.videoElement.srcObject = mediaStream;
            this.videoElement.play()
              .then(() => {
                  this.videoIsPlaying = true;
              })
              .catch((error) => {
                  this.videoIsPlaying = false;
                  console.log(error);
              });
        })
        .catch((error) => {
            this.cameraIsAvailable = false;
            console.log(error);
        });
    }

    private toggleVideoState() {
      if (this.videoElement.paused) {
        this.videoElement.play()
          .then(() => {
            this.videoIsPlaying = true;
          })
          .catch((error) => {
              this.videoIsPlaying = false;
              console.log(error);
          });
      } else {
          this.videoElement.pause();
          this.videoIsPlaying = false;
      }
    }

    // private captureVideo(){}
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

  .video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .overlay {
    position: absolute;
    left: 50%;
    padding: 0.5rem;
    transform: translateX(-50%);
    color: var(--color-zeta) var(--color-alpha);
  }

  .button {
    padding: 0.5rem;
  }
</style>
