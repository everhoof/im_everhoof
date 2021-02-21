<template>
  <!-- begin .avatar-->
  <div
    class="avatar"
    :class="{
      avatar_size_tiny: tiny,
      avatar_size_medium: medium,
      avatar_size_large: large,
      avatar_size_stretch: stretch,
    }"
    :style="{ backgroundColor: color ? color : 'var(--input-background)' }"
  >
    <img v-if="avatar" :src="avatar" alt="avatar" class="avatar__image" />
    <span v-else class="avatar__content">{{ letter }}</span>
    <label for="avatar-upload" class="avatar__upload">
      <svg-icon class="avatar__upload-icon" name="upload" />
      <input id="avatar-upload" class="avatar__upload-input" type="file" />
    </label>
  </div>
  <!-- end .avatar-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { User } from '~/graphql/schema';
import { getUserColor } from '~/tools/util';

@Component({
  name: 'b-avatar',
})
export default class Avatar extends Vue {
  @Prop({ required: true }) user?: User;
  @Prop({ required: false, type: Boolean, default: false }) tiny!: boolean;
  @Prop({ required: false, type: Boolean, default: false }) medium!: boolean;
  @Prop({ required: false, type: Boolean, default: false }) large!: boolean;
  @Prop({ required: false, type: Boolean, default: false }) stretch!: boolean;

  get avatar(): string | undefined {
    return this.user?.avatar?.s.link;
  }

  get letter(): string {
    return (this.user?.username && this.user?.username[0]) || '';
  }

  get color(): string {
    return getUserColor(this.user?.id);
  }
}
</script>

<style lang="stylus" src="./avatar.styl" />
