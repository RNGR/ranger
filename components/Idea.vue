<template>
  <div class="idea">
    <div class="image"></div>
    <div class="description">
      <h4>{{category}}</h4>
      <h2>{{title}}</h2>
      <h6>{{subtitle}}</h6>
      <p>{{summary}}</p>
      <a href="/post/test" class="h4" :class="color">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: 'Category'
    },
    title: {
      type: String,
      default: 'The Future of Agnostic Data'
    },
    subtitle: {
      type: String,
      default: 'By Ben Haynes (via Medium) — January 15th, 2019'
    },
    summary: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper imperdiet magna vitae blandit. Mauris vestibulum felis eget leo efficitur dignissim. Ut bibendum sit amet mi a fermentum.'
    },
    image: {
      type: String,
      default: ''
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

.idea {
  position: relative;
  margin: var(--spacing-desktop);
  .image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: calc((100% - 120px) / 4);
    background-color: $lightest-gray;
  }
  .description {
    padding: var(--spacing-desktop);
    margin-left: calc((100% - 120px) / 4);
    max-width: 800px;
    p {
      margin: var(--spacing-desktop) 0;
    }
    a {
      text-decoration: none;
    }
  }
  @media (max-width: $breakpoint-m) {
    margin: var(--spacing-desktop-s) 0;
    .image {
      position: relative;
      top: auto;
      left: auto;
      bottom: auto;
      width: 100%;
      padding-bottom: 50%;
    }
    .description {
      padding: var(--spacing-desktop);
      margin-left: 0;
      max-width: auto;
    }
  }
}
</style>
