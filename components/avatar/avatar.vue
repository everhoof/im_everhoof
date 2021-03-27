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
    <label v-if="isOwner" for="avatar-upload" class="avatar__upload">
      <svg-icon class="avatar__upload-icon" name="upload" />
      <input id="avatar-upload" class="avatar__upload-input" type="file" @change="onFileChanged" />
    </label>
  </div>
  <!-- end .avatar-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { UpdateAvatarMutation, UpdateAvatarMutationVariables, User } from '~/graphql/schema';
import { getUserColor } from '~/tools/util';
import UpdateAvatar from '~/graphql/mutations/update-avatar.graphql';
import { HttpClient } from '~/tools/http-client';

@Component({
  name: 'b-avatar',
})
export default class Avatar extends Vue {
  @Prop({ required: true }) user?: User;
  @Prop({ required: false, type: Boolean, default: false }) tiny!: boolean;
  @Prop({ required: false, type: Boolean, default: false }) medium!: boolean;
  @Prop({ required: false, type: Boolean, default: false }) large!: boolean;
  @Prop({ required: false, type: Boolean, default: false }) stretch!: boolean;

  get avatar(): string {
    return this.user?.avatar?.s.link || '';
  }

  get letter(): string {
    return (this.user?.username && this.user?.username[0]) || '';
  }

  get color(): string {
    return this.avatar ? 'transparent' : getUserColor(this.user?.id);
  }

  get isOwner(): boolean {
    return !!this.$accessor.auth.user && this.$accessor.auth.user?.id === this.user?.id;
  }

  async onFileChanged(e: Event & { target: { files: File[] } }) {
    const file = e.target.files[0];
    const id = await HttpClient.uploadPicture(file);
    if (id) await this.updateAvatar(id);
  }

  async updateAvatar(pictureId: number): Promise<void> {
    const { errors, data } = await this.$apollo.mutate<UpdateAvatarMutation, UpdateAvatarMutationVariables>({
      mutation: UpdateAvatar,
      variables: { pictureId },
    });
    if (errors || !data?.updateAvatar) return;

    const user = this.$accessor.auth.user;
    if (user) {
      user.avatar = data?.updateAvatar.avatar;
      this.$accessor.auth.SET_USER(user);
    }
  }
}
</script>

<style lang="stylus" src="./avatar.styl" />
