<template>
  <footer>
    <div class="contact max-width">
      <div>
        <h4>Welcome</h4>
        <p>We're a full-service digital agency based out of Brooklyn. This page gives an overview of what's going on at RANGER.</p>
      </div>
      <div>
        <h4>Our Work</h4>
        <p>Our clients and case-studies are extremely diverse, however many are confidential and can not be displayed on this site.</p>
      </div>
      <div>
        <h4>Our Ideas</h4>
        <p>Creative agencies should always be generating. This page is a collection of our various articles, ideation, and press.</p>
      </div>
      <div>
        <h4>Our Agency</h4>
        <p>We specialize in projects requiring innovative design, bleeding-edge technologies, and complex data modeling.</p>
      </div>
    </div>
    <section>
      <div class="max-width">
        <a href="/"><logo color="lighter-gray" /></a>
        <div>© 2011-2019 RANGER Studio LLC</div>
      </div>
    </section>
  </footer>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  name: "Footer"
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';

footer {
  margin-top: $spacing-desktop * 4;
  .contact {
    display: flex;
    justify-content: space-between;
    padding: 0 $spacing-desktop;
    & > div {
      border-top: 2px solid $blue;
      width: calc((100% - 120px) / 4);
      padding: 40px 0 80px;
      p {
        color: $gray;
        margin-top: 20px;
      }
      &:nth-child(1) {
        border-color: $blue;
      }
      &:nth-child(2) {
        border-color: $green;
      }
      &:nth-child(3) {
        border-color: $yellow;
      }
      &:nth-child(4) {
        border-color: $red;
      }
    }
  }
  section {
    background-color: $off-white;
    color: $lighter-gray;
    & > div {
      height: 60px;
      padding: 0 $spacing-desktop;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
