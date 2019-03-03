<template>
  <div class="break" :class="{ reverse: reverse }">
    <div class="description">
      <div class="max-width-half">
        <h2>{{title}}</h2>
        <h3>{{subtitle}}</h3>
        <p>{{text}}</p>
        <a :href="url" :target="target" class="h4" :class="color">{{link}}</a>
      </div>
    </div>
    <div class="image" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    text: {
      type: String,
    },
    link: {
      type: String,
    },
    url: {
      type: String,
      default: '/'
    },
    target: {
      type: String,
      default: '_self'
    },
    image: {
      type: String,
      default: '/images/office-survival-optimized.jpg'
    },
    reverse: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'blue'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/main.scss';

.break {
  position: relative;
  display: flex;
  background-color: $darkest-gray;
  color: $white;
  align-items: center;
  margin-top: var(--spacing-desktop-2);
  &.reverse {
    flex-direction: row-reverse;
    .description {
      justify-content: flex-start;
    }
  }
  .image {
    width: 50%;
    height: 50vw;
    max-height: 800px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 10%;
  }
  .description {
    width: 50%;
    padding: var(--spacing-desktop-s) var(--spacing-desktop);
    display: flex;
    justify-content: flex-end;
    .max-width-half {
      max-width: 620px;
      h2 {
        //
      }
      h3 {
        margin: 4px 0 var(--spacing-desktop-s);
        color: $light-gray;
        line-height: 36px;
      }
      p {
        margin-bottom: var(--spacing-desktop-s);
      }
      a {
        text-decoration: none;
      }
    }
  }
  @media (max-width: $breakpoint-m) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    &.reverse {
      flex-direction: column-reverse;
    }
    .image {
      width: 100%;
      height: 100vw;
    }
    .description {
      width: 100%;
      .max-width-half {
        h3 {
          margin-top: 20px;
          line-height: 32px;
        }
      }
    }
  }
}
</style>
