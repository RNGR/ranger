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
    <section class="max-width-small">
      <h2 class="heading">Articles &amp; News</h2>
      <idea v-for="post in posts" :key="post.id"
        :id="post.id"
        :category="post.category"
        :title="post.title"
        :subtitle="subtitle(post.author,post.source)"
        :summary="post.summary"
        :image="post.hero.filename"
        color="yellow"
         />
    </section>
    <hr>
    <quote />
    <AppFooter />
  </div>
</template>

<script>
import axios from 'axios'
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
  },
  async asyncData() {
    const { data } = await axios.get('https://api.directus.cloud/dcdBrg_0chy/items/posts?filter[status][eq]=published&fields=*.*.*&sort=-publish_date')
    return { posts: data.data }
  },
  methods: {
    subtitle: function (author, source) {
      if (source){
        return 'By '+author+' — via '+source
      } else {
        return 'By '+author+''
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';
</style>
