<template>
  <footer>
    <div class="pages max-width">
      <a href="/">
        <h4>
          Welcome
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path fill="#039BE5" d="M8 0l8 8-8 8-1.4-1.4L12.2 9H0V7h12.2L6.6 1.4z" fill-rule="evenodd"/>
          </svg>
        </h4>
        <p>We're a full-service digital agency based out of Brooklyn. This page gives an overview of what's going on at RANGER.</p>
      </a>
      <a href="/work">
        <h4>
          Our Work
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4caf50" d="M8 0l8 8-8 8-1.4-1.4L12.2 9H0V7h12.2L6.6 1.4z" fill-rule="evenodd"/>
          </svg>
        </h4>
        <p>Our clients and case-studies are extremely diverse, however many are confidential and can not be displayed on this site.</p>
      </a>
      <a href="/ideas">
        <h4>
          Our Ideas
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ff9800" d="M8 0l8 8-8 8-1.4-1.4L12.2 9H0V7h12.2L6.6 1.4z" fill-rule="evenodd"/>
          </svg>
        </h4>
        <p>Creative agencies should always be generating. This page is a collection of our various articles, ideation, and press.</p>
      </a>
      <a href="/agency">
        <h4>
          Our Agency
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path fill="#f44336" d="M8 0l8 8-8 8-1.4-1.4L12.2 9H0V7h12.2L6.6 1.4z" fill-rule="evenodd"/>
          </svg>
        </h4>
        <p>We specialize in projects requiring innovative design, bleeding-edge technologies, and complex data modeling.</p>
      </a>
    </div>
    <section>
      <div class="max-width">
        <a href="/"><logo color="lighter-gray" /></a>
        <div>©2019<span class="legal-name"> RANGER Studio LLC</span></div>
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
  margin-top: var(--spacing-desktop-4);
  .pages {
    display: flex;
    justify-content: space-between;
    padding: 0 var(--spacing-desktop);
    & > a {
      border-top: 2px solid $blue;
      width: calc((100% - 120px) / 4);
      padding: 40px 0 80px;
      cursor: pointer;
      h4 {
        svg {
          transition: all $fast $transition;
          display: inline-block;
          line-height: 20px;
          vertical-align: middle;
          margin-top: -3px;
          opacity: 0;
        }
      }
      &:hover {
        svg {
          opacity: 1;
          margin-left: 6px;
        }
      }
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
    @media (max-width: $breakpoint-m) {
      flex-wrap: wrap;
      & > a {
        width: calc((100% - 20px) / 2);
      }
    }
  }
  section {
    background-color: $off-white;
    color: $lighter-gray;
    & > div {
      height: 60px;
      padding: 0 var(--spacing-desktop);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    @media (max-width: $breakpoint-s) {
      .legal-name {
        display: none;
      }
    }
  }
}
</style>
