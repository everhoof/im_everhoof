<template>
  <!-- begin .snow-->
  <div ref="root" class="snow" />
  <!-- end .snow-->
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'nuxt-property-decorator';
import gsap from 'gsap';

@Component({
  name: 'b-snow',
})
export default class Snow extends Vue {
  @Ref()
  readonly root!: HTMLDivElement;

  snowflakes: HTMLDivElement[] = [];

  mounted(): void {
    this.createSnowflakes();
    this.createSnow();
  }

  beforeDestroy(): void {
    this.destroySnowflakes();
  }

  createSnowflakes(): void {
    const snowflakesCount = Math.ceil(window.innerWidth / 8);

    for (let i = 0; i < snowflakesCount; ++i) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snow__snowflake');

      this.root.append(snowflake);
      this.snowflakes.push(snowflake);
    }
  }

  destroySnowflakes(): void {
    this.snowflakes.forEach((snowflake) => {
      snowflake.remove();
    });
    this.snowflakes = [];
  }

  createSnow(): void {
    this.snowflakes.forEach((snowflake) => {
      const baseX = gsap.utils.random(-10, 110);

      gsap.set(snowflake, {
        x: baseX + 'vw',
        y: -10,
        opacity: gsap.utils.random(0, 1),
        scale: gsap.utils.random(0, 1),
      });

      gsap.to(snowflake, {
        duration: gsap.utils.random(10, 30),
        y: '100vh',
        delay: gsap.utils.random(0, -30),
        repeat: -1,
        ease: 'none',
      });

      gsap.to(snowflake, {
        duration: gsap.utils.random(5, 15),
        x: baseX + gsap.utils.random(-12, 12) + 'vw',
        yoyo: true,
        repeat: -1,
        delay: gsap.utils.random(-20, -10),
        ease: 'power1.inOut',
      });
    });
  }
}
</script>

<style lang="stylus" src="./snow.styl" />
