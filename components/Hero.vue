<template>
  <section class="hero max-width" :class="{color, missing}">
    <div class="background">
      <div class="info">
        <h4 id="hero-title" :class="color">{{category}}</h4>
        <h3>{{title}}</h3>
        <h6>{{subtitle}}</h6>
        <a :href="url" :target="target" class="button" :class="color">{{cta}}</a>
      </div>
      <img :src="image">
    </div>
  </section>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'blue'
    },
    category: {
      type: String,
      default: 'Welcome'
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    cta: {
      type: String,
      default: 'Let\'s Talk'
    },
    url: {
      type: String,
      default: 'mailto:info@rangerstudio.com'
    },
    target: {
      type: String,
      default: '_blank'
    },
    image: {
      type: String,
      default: '/images/nature-1.svg'
    },
    missing: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/main.scss';

.hero {
  position: relative;
  height: calc(100vh - 120px);
  padding: 0 var(--spacing-desktop);
  margin-bottom: var(--spacing-desktop);
  overflow: hidden;
  .background {
    display: flex;
    align-items: center;
    height: 100%;
    padding: var(--spacing-desktop);
    background-color: $darkest-gray;
    overflow: hidden;
    .info {
      max-width: 800px;
      z-index: 2;
      h4 {
        margin-bottom: 20px;
      }
      h3 {
        color: $white;
      }
      h6 {
        margin-top: var(--spacing-desktop-s);
        max-width: 600px;
      }
      a.button {
        display: block;
        margin-top: var(--spacing-desktop-s);
        width: 240px;
      }
    }
    & > img {
      position: absolute;
      right: 25%;
      top: 10%;
      height: 80%;
      z-index: 1;
      opacity: 0.5;
    }
  }
  &.missing {
    .background {
      & > img {
        position: absolute;
        right: 50%;
        transform: translateX(50%);
      }
    }
  }
  @media (max-width: $breakpoint-m) {
    padding: 0 !important;
    height: calc(100vh - 80px);
    .background {
      .info {
        h6 {
          max-width: auto;
        }
      }
    }
  }
}
</style>
