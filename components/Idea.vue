<template>
  <a :href="'/posts/'+id">
    <div class="idea">
      <div class="background-container">
        <div class="background" :style="{ 'background-image': 'url(https://api.directus.cloud/dcKFa5YXThieN2Sl/assets/' + image + '?key=listing)' }"></div>
      </div>
      <div class="description">
        <h4>{{category}}</h4>
        <h2>{{title}}</h2>
        <h6>{{subtitle}}</h6>
        <p>{{summary}}</p>
        <span class="h4 read-more" :class="color">Read More</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null
    },
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

a:hover {
  .idea {
    .background-container {
      .background {
        opacity: 0.8;
      }
    }
    .description .read-more {
      &.blue {
        border-bottom: 2px solid $blue;
      }
      &.yellow {
        border-bottom: 2px solid $yellow;
      }
    }
  }
}
.idea {
  position: relative;
  margin: var(--spacing-desktop);
  .background-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: calc((100% - 120px) / 4);
    background-color: $darkest-gray;
    .background {
      transition: all $fast $transition;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      opacity: 0.5;
    }
  }
  .description {
    padding: var(--spacing-desktop);
    margin-left: calc((100% - 120px) / 4);
    max-width: 800px;
    h2 {
      display: inline-block;
      padding-bottom: 6px;
    }
    p {
      margin: var(--spacing-desktop) 0;
    }
    .read-more {
      transition: all $fast $transition;
      border-bottom: 2px solid $white;
    }
  }
  @media (max-width: $breakpoint-m) {
    margin: var(--spacing-desktop-s) 0;
    .background-container {
      display: none;
    }
    .description {
      padding: var(--spacing-desktop);
      margin-left: 0;
      max-width: auto;
    }
  }
}
</style>
