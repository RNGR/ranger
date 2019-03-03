<template>
  <div class="module" :class="{ large: large }">
    <a :href="url" :target="target">
      <div class="image" :style="{ backgroundImage: 'url(' + image + ')' }">
        <slot v-if="!image">
          <google />
        </slot>
        <div class="hover" :class="{overlay:image}" :style="{'background-color':color}"></div>
      </div>
      <div class="description">
        <div class="title" :title="title">{{title}}</div>
        <div class="subtitle" :title="subtitle">{{subtitle}}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#039BE5'
    },
    title: {
      type: String,
      default: 'Google Search App'
    },
    subtitle: {
      type: String,
      default: 'Consulting'
    },
    url: {
      type: String
    },
    target: {
      type: String,
      default: '_self'
    },
    image: {
      type: String,
    },
    large: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';

.module {
  position: relative;
  cursor: pointer;
  &:after {
    content: '';
    display: block;
    padding-bottom: calc(100% + 50px);
  }
  &.large {
    grid-column: span 2;
    grid-row: span 2;
    .image {
      svg {
        width: calc(100% - 20%);
        height: calc(100% - 20%);
      }
    }
  }
  &:hover {
    .image {
      svg {
        path,
        circle {
          fill: $white;
        }
      }
      .hover {
        opacity: 1;
        &.overlay {
          opacity: 0.3;
        }
      }
    }
    .description {
      .title {
        color: $dark-gray;
      }
      .subtitle {
        color: $light-gray;
      }
    }
  }
  .image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 50px; // 100px (details @ 16px text) + 16px (padding)
    left: 0;
    width: 100%;
    background-color: $off-white;
    background-size: cover;
    background-repeat: no-repeat;
    svg {
      position: relative;
      width: calc(100% - 30%);
      height: calc(100% - 30%);
      top: 50%;
      left: 50%;
      z-index: 2;
      transform: translate(-50%, -50%);
    }
    .image {

    }
    .hover {
      transition: all $fast $transition;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      opacity: 0;
    }
  }
  .description {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    z-index: 0;
    .title {
      transition: all $fast $transition;
      font-weight: 500;
      line-height: 16px;
      color: $light-gray;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .subtitle {
      transition: all $fast $transition;
      font-size: 14px;
      font-weight: 500;
      color: $lighter-gray;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  @media (max-width: $breakpoint-m) {
    &:after {
      padding-bottom: calc(100% + 45px);
    }
    .image {
      bottom: 45px;
    }
  }
}
</style>
