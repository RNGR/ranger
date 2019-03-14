<template>
  <div class="container">
    <AppHeader
      category="Page Missing"
      color="gray" />
    <hero
      color="gray"
      image="/images/404.png"
      category="Error 404"
      title="Page Missing"
      subtitle="The page you are looking for has moved or does not exist. Click the button below to head back to our homepage."
      cta="Return Home"
      url="/"
      target="_self"
      :missing="true" />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import Hero from '~/components/Hero.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    Hero,
    Logo
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';
</style>
