<template>
  <!-- begin .message-img-->
  <div class="message-img" :style="style">
    <div class="message-img__responsive" :style="{ paddingBottom: `${aspectRatio}%` }">
      <img :src="picture.m.link" class="message-img__image" alt="" @click="openPicture" />
    </div>
  </div>
  <!-- end .message-img-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Picture } from '~/graphql/schema';

@Component({
  name: 'b-message-img',
})
export default class MessageImg extends Vue {
  @Prop({
    required: true,
    type: Object,
  })
  readonly picture!: Picture;

  get style(): Record<string, string> {
    const style: Record<string, string> = {};
    style['max-width'] = `${this.picture.m.width}px`;
    style['max-height'] = `${this.picture.m.height}px`;
    return style;
  }

  get aspectRatio(): number {
    return Math.round((this.picture.m.height / this.picture.m.width) * 10000) / 100;
  }

  openPicture(): void {
    const limits = { width: 1000, height: 1000 };
    const dimensions = { width: this.picture.o.width, height: this.picture.o.height };
    if (this.picture.o.width > limits.width || this.picture.o.height > limits.height) {
      if (this.picture.o.width > this.picture.o.height) {
        dimensions.width = limits.width;
        dimensions.height = this.picture.o.height * (limits.width / this.picture.o.width);
      } else {
        dimensions.height = limits.height;
        dimensions.width = this.picture.o.width * (limits.height / this.picture.o.height);
      }
    }
    window.open(
      this.picture.o.link,
      this.picture.o.link,
      `height=${dimensions.height}px,width=${dimensions.width}px,resizable=1`,
    );
  }
}
</script>

<style lang="stylus" src="./message-img.styl" />
