<template>
  <div class="module" :class="{ large: large }">
    <a :href="url" :target="target">
      <div class="image" :style="{ backgroundImage: 'url(' + image + ')' }">
        <slot v-if="!image">
          <svg width="170" height="53" viewBox="0 0 170 53" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.33 18.86h19.35c.2 1.02.3 2.24.3 3.55 0 4.24-1.19 9.52-4.97 13.25-3.7 3.77-8.42 5.8-14.68 5.8C9.74 41.46 0 32.16 0 20.73 0 9.31 9.74 0 21.33 0c6.4 0 10.98 2.49 14.4 5.76l-4.05 3.98A14.72 14.72 0 0 0 21.33 5.7 14.97 14.97 0 0 0 6.26 20.75c0 8.34 6.61 15.07 15.07 15.07 5.47 0 8.6-2.17 10.61-4.15 1.64-1.63 2.71-3.96 3.13-7.14H21.33v-5.67zm36.35-4.54c7.52 0 13.66 5.54 13.66 13.2 0 7.6-6.14 13.19-13.66 13.19-7.52 0-13.66-5.61-13.66-13.2 0-7.65 6.14-13.19 13.66-13.19zm0 21.11c4.07 0 7.59-3.26 7.59-7.91 0-4.7-3.52-7.92-7.6-7.92-4.06 0-7.58 3.22-7.58 7.92 0 4.65 3.52 7.91 7.59 7.91zM124.1 17.3V15h5.68v23.91c0 9.82-5.94 13.85-12.95 13.85a12.97 12.97 0 0 1-12.08-7.85l5.2-2.1c.94 2.17 3.22 4.73 6.88 4.73 4.48 0 7.27-2.72 7.27-7.8v-1.86h-.21c-1.34 1.6-3.92 3.02-7.18 3.02-6.8 0-12.74-5.83-12.74-13.3 0-7.5 5.94-13.29 12.74-13.29 3.26 0 5.84 1.42 7.18 2.98h.21zm-6.85 18.13c4.05 0 7.24-3.3 7.21-7.87 0-4.59-3.16-7.96-7.2-7.96-4.1 0-7.22 3.3-7.22 7.92 0 4.54 3.12 7.91 7.21 7.91zm-29.21-21.1c7.52 0 13.66 5.53 13.66 13.19 0 7.6-6.14 13.19-13.66 13.19-7.53 0-13.67-5.61-13.67-13.2 0-7.65 6.14-13.19 13.67-13.19zm0 21.1c4.07 0 7.58-3.26 7.58-7.91 0-4.7-3.51-7.92-7.58-7.92-4.08 0-7.6 3.22-7.6 7.92 0 4.65 3.52 7.91 7.6 7.91zM134.33.75h6.07v39.96h-6.07V.75zm24.1 34.76c3.03 0 5.14-1.46 6.68-3.64l4.63 3a13.64 13.64 0 0 1-11.32 5.84c-7.71 0-13.46-5.8-13.46-13.2 0-7.85 5.82-13.19 12.81-13.19 7.04 0 10.5 5.45 11.62 8.4l.61 1.5-18.17 7.3c1.4 2.65 3.55 3.99 6.6 3.99zm-.35-16.66c-3.05 0-7.05 2.42-7.05 8.29l12.14-5.22c-.67-1.8-2.7-3.07-5.09-3.07z" fill="#90A4AE" fill-rule="evenodd"/>
          </svg>
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

<style lang="scss" scoped>
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
  }
  &:hover {
    .image {
      svg {
        path {
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
}
</style>
