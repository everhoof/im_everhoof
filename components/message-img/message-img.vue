<template>
  <!-- begin .message-img-->
  <img
    class="message-img"
    :src="picture.m.link"
    alt=""
    :height="displayDimensions.height"
    :width="displayDimensions.width"
    @click="openPicture"
  />
  <!-- end .message-img-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Picture } from '~/graphql/schema';
import { Dimensions } from '~/types/dimensions';

@Component({
  name: 'b-message-img',
})
export default class MessageImg extends Vue {
  @Prop({
    required: true,
    type: Object,
  })
  readonly picture!: Picture;

  displayDimensions: Dimensions = { width: 0, height: 0 };

  get style(): Record<string, string> {
    const style: Record<string, string> = {};
    style['max-width'] = `${this.picture.m.width}px`;
    style['max-height'] = `${this.picture.m.height}px`;
    return style;
  }

  created(): void {
    const limits = {
      width: Math.min(window.innerWidth, 500),
      height: Math.min(window.innerWidth, 400),
    };

    this.displayDimensions = this.transformDimensions(
      { width: this.picture.m.width, height: this.picture.m.height },
      limits,
    );
  }

  openPicture(): void {
    const dimensions = this.transformDimensions(
      { width: this.picture.o.width, height: this.picture.o.height },
      { width: 1000, height: 1000 },
    );
    window.open(
      this.picture.o.link,
      this.picture.o.link,
      `height=${dimensions.height}px,width=${dimensions.width}px,resizable=1`,
    );
  }

  transformDimensions(dimensions: Dimensions, limits: Dimensions): Dimensions {
    if (this.picture.o.width > limits.width || this.picture.o.height > limits.height) {
      if (this.picture.o.width > this.picture.o.height) {
        dimensions.width = limits.width;
        dimensions.height = this.picture.o.height * (limits.width / this.picture.o.width);
      } else {
        dimensions.height = limits.height;
        dimensions.width = this.picture.o.width * (limits.height / this.picture.o.height);
      }
    }

    return dimensions;
  }
}
</script>

<style lang="stylus" src="./message-img.styl" />
