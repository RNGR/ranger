<template>
  <div class="device-container" :class="{reverse:reverse}">
    <div class="device laptop" v-if="!reverse">
      <slot></slot>
      <svg width="1120" height="633" viewBox="0 0 1120 633" preserveAspectRatio="xMaxYMid meet" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path d="M132.08 0h854.64a26.3 26.3 0 0 1 26.3 26.31v571.73a26.3 26.3 0 0 1-26.3 26.31H132.08a26.3 26.3 0 0 1-26.3-26.31V26.3A26.3 26.3 0 0 1 132.08 0z" fill="#CFD8DC"/>
          <path d="M132.08 2.4h854.64c13.2 0 23.91 10.7 23.91 23.91v571.73a23.91 23.91 0 0 1-23.9 23.92H132.07a23.91 23.91 0 0 1-23.9-23.92V26.3a23.91 23.91 0 0 1 23.9-23.92z" fill="#F9FAFA"/>
          <path d="M0 622.83h1120l-4.75 2.53a59.73 59.73 0 0 1-28.12 7.04H32.87a59.73 59.73 0 0 1-28.12-7.04L0 622.83z" fill="#CFD8DC"/>
          <path d="M3.59 622.83H1116.4l-5.45 2.34a59.73 59.73 0 0 1-23.55 4.84H32.6c-8.1 0-16.1-1.65-23.55-4.84l-5.45-2.34z" fill="#CFD8DC"/>
          <path d="M4.78 607.2h1110.44a3.4 3.4 0 0 1 3.39 3.4v11.76H1.39V610.6a3.4 3.4 0 0 1 3.4-3.4z" stroke="#CFD8DC" stroke-width="2" fill="#F9FAFA"/>
          <path d="M479.91 606.81h160.77v.48c0 5.26-5.35 9.52-11.95 9.52H491.87c-6.6 0-11.96-4.26-11.96-9.52v-.48z" fill="#CFD8DC"/>
          <path fill="#263238" d="M129 38h860.62v538.23H129z"/>
        </g>
      </svg>
      <!-- <div class="screen"></div> -->
    </div>
    <div class="device mobile" v-if="reverse">
      <slot></slot>
      <svg width="370" height="668" viewBox="0 0 370 668" preserveAspectRatio="xMaxYMid meet" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-4 -4)" fill="none" fill-rule="evenodd">
          <path d="M43.15 134.82a1 1 0 0 1 1.08-.9l2.5.21-4.15 47.36-2.49-.22a1 1 0 0 1-.9-1.08l3.96-45.37z" stroke="#CFD8DC" fill="#CFD8DC"/>
          <path d="M37.96 194.14a1 1 0 0 1 1.08-.9l2.5.21-4.15 47.36-2.49-.22a1 1 0 0 1-.9-1.08l3.96-45.37z" stroke="#CFD8DC" fill="#CFD8DC"/>
          <path d="M47.2 88.47a1 1 0 0 1 1.09-.91l2.5.22-2.27 25.92-2.5-.22a1 1 0 0 1-.9-1.09l2.09-23.92z" stroke="#CFD8DC" fill="#CFD8DC"/>
          <path d="M363.7 176.93l2.24.2c.7.06 1.2.67 1.14 1.35l-6.54 74.78c-.06.69-.67 1.2-1.36 1.14l-2.24-.2 6.76-77.27z" stroke="#CFD8DC" fill="#CFD8DC"/>
          <path d="M54.08 50.14L6.15 597.97a49.04 49.04 0 0 0 44.58 53.13l220.57 19.3a49.04 49.04 0 0 0 53.13-44.58l47.93-547.83a49.04 49.04 0 0 0-44.58-53.13L107.2 5.56a49.04 49.04 0 0 0-53.12 44.58z" stroke="#CFD8DC" stroke-width="2" fill="#F9FAFA"/>
          <path d="M58.52 51.03A45.04 45.04 0 0 1 107.3 10.1L326.89 29.3a45.03 45.03 0 0 1 40.94 48.8l-47.85 546.82a45.04 45.04 0 0 1-48.78 40.94L51.6 646.66a45.03 45.03 0 0 1-40.93-48.8L58.52 51.03z" fill="#F9FAFA" fill-rule="nonzero"/>
          <circle fill="#ECEFF1" transform="rotate(5 182.2 38.24)" cx="182.2" cy="38.24" r="3"/>
          <circle fill="#CFD8DC" transform="rotate(5 182.2 38.24)" cx="182.2" cy="38.24" r="2"/>
          <circle fill="#ECEFF1" transform="rotate(5 251.49 44.3)" cx="251.49" cy="44.31" r="5"/>
          <circle fill="#CFD8DC" transform="rotate(5 251.49 44.3)" cx="251.49" cy="44.31" r="4"/>
          <path d="M198.82 37.69l33.4 2.92a2 2 0 0 1-.35 3.99l-33.4-2.92a2 2 0 0 1 .35-4" fill="#ECEFF1"/>
          <path d="M198.73 38.69l33.4 2.92a1 1 0 1 1-.17 2l-33.4-2.93a1 1 0 1 1 .17-2z" fill="#CFD8DC"/>
          <path d="M133.19 27.17v.02h.25a3 3 0 0 1 2.73 3.26l-.13 1.5a18.03 18.03 0 0 0 16.4 19.51l122.82 10.75a18.03 18.03 0 0 0 19.54-16.38l.4-4.48 33.4 2.92A27.52 27.52 0 0 1 353.6 74.1L305.29 626.4a27.52 27.52 0 0 1-29.82 25.02L49.91 631.69a27.52 27.52 0 0 1-25.02-29.82L73.21 49.55a27.52 27.52 0 0 1 29.82-25.01l30.16 2.63z" fill="#263238"/>
        </g>
      </svg>
    </div>
    <div class="description">
      <div class="max-width">
        <h4>{{category}}</h4>
        <h2>{{title}}</h2>
        <p>{{subtitle}}</p>
        <div class="buttons full">
          <a :href="button1url" target="_blank" class="button" :class="color">{{button1title}}</a>
          <a :href="button2url" target="_blank" class="button outline" :class="color">{{button2title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: 'PRODUCT & SERVICE'
    },
    title: {
      type: String,
      default: 'Directus Suite'
    },
    subtitle: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper imperdiet magna vitae blandit. Mauris vestibulum felis eget leo efficitur dignissim. Ut bibendum sit amet mi a fermentum.'
    },
    button1title: {
      type: String,
      default: ''
    },
    button1url: {
      type: String,
      default: ''
    },
    button2title: {
      type: String,
      default: ''
    },
    button2url: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'blue'
    },
    reverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';

.device-container {
  display: flex;
  align-items: center;
  height: 50vw;
  max-height: 680px;
  margin: ($spacing-desktop * 2) 0 ($spacing-desktop * 3);
  &.reverse {
    flex-direction: row-reverse;
    .device {
      img {
        right: 25%;
      }
      svg {
        right: 25%;
      }
    }
  }
  .description {
    width: 50%;
    padding: $spacing-desktop;
    p {
      margin: $spacing-desktop 0;
    }
    .max-width {
      max-width: 600px;
    }
  }
  .device {
    position: relative;
    width: 50%;
    height: 100%;
    img {
      position: absolute;
      right: -5%;
      top: 0;
      height: 100%;
      z-index: 2;
    }
    svg {
      position: absolute;
      right: -5%;
      top: 0;
      height: 100%;
      z-index: 1;
    }
  }
}
</style>
