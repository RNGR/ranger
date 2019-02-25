<template>
  <div class="container">
    <AppHeader
      category="Our Ideas"
      color="yellow" />
    <hero
      color="yellow"
      category="Our Ideas"
      image="/images/nature-5.svg"
      title="Innovation is a mindset that arises from truly divergent thinking. Often captured as scribbled diagrams on sticky-notes and experimental code prototypes, this page is a collection of more formalized articles our staff has written on various publishing platforms."
      subtitle="This is also an annex for agency press, product release announcements, and even some helpful design and development tutorials. In short, it's a catch-all for relevant information we've created here or elsewhere." />
    <section class="max-width">
      <h2 class="heading">Articles &amp; News</h2>
      <idea color="yellow" />
      <idea color="yellow" />
      <idea color="yellow" />
      <idea color="yellow" />
      <idea color="yellow" />
      <idea color="yellow" />
      <idea color="yellow" />
      <idea color="yellow" />
    </section>
    <hr>
    <quote />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import Hero from '~/components/Hero.vue'
import Logo from '~/components/Logo.vue'
import Quilt from '~/components/Quilt.vue'
import More from '~/components/More.vue'
import Device from '~/components/Device.vue'
import Module from '~/components/Module.vue'
import Break from '~/components/Break.vue'
import Idea from '~/components/Idea.vue'
import Quote from '~/components/Quote.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    Hero,
    Logo,
    Quilt,
    More,
    Device,
    Module,
    Break,
    Idea,
    Quote
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';
</style>
