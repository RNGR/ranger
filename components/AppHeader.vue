<template>
  <header class="main" :class="{ open: menu, shrink: shrink }">
    <div class="max-width">
      <div class="menu-toggle" @click="toggleMenu">
        <svg class="hamburger" width="40" height="26" xmlns="http://www.w3.org/2000/svg">
          <path fill="#263238" d="M0 0h30v2H0z" class="welcome" />
          <path fill="#263238" d="M0 8h40v2H0z" class="work" />
          <path fill="#263238" d="M0 16h20v2H0z" class="ideas" />
          <path fill="#263238" d="M0 24h30v2H0z" class="agency" />
        </svg>
        <div class="breadcrumb h4" :class="color">
          {{category}}
        </div>
      </div>
      <a class="logo-toggle" href="/"><logo /></a>
    </div>
    <div class="fade" :style="{ opacity: opacity }"></div>
    <div class="menu">
      <div>
        <div class="close">
          <svg @click="toggleMenu" width="27" height="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.44 12.59L25.46.56l1.41 1.42L14.85 14l12.02 12.02-1.41 1.42L13.44 15.4 1.4 27.44 0 26.02 12.02 14 0 1.98 1.41.56 13.44 12.6z" fill="#FFF" fill-rule="evenodd"/>
          </svg>
          <div class="esc">ESC</div>
        </div>
        <a class="h2 welcome" href="/" :class="{'active': color == 'blue'}">Welcome</a><br>
        <a class="h2 work" href="/work" :class="{'active': color == 'green'}">Our Work</a><br>
        <a class="h2 ideas" href="/ideas" :class="{'active': color == 'yellow'}">Our Ideas</a><br>
        <a class="h2 agency" href="/agency" :class="{'active': color == 'red'}">Our Agency</a><br>
        <a class="h4" href="mailto:info@rangerstudio.com" target="_blank">info@rangerstudio.com</a><br>
        <a class="h4" href="https://twitter.com/ranger" target="_blank">
          <svg width="24" height="21" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.65 5.51l.06.9-.87-.1a13.88 13.88 0 0 1-8.26-4.25L1.44.86l-.3.88a5.46 5.46 0 0 0 1.08 5.42c.7.77.54.88-.66.42-.42-.15-.78-.25-.81-.2-.13.13.29 1.8.62 2.45a5.71 5.71 0 0 0 2.38 2.34l.85.42-1.01.02c-.97 0-1 .02-.9.4.34 1.2 1.71 2.46 3.24 3l1.08.39-.94.59a9.45 9.45 0 0 1-4.65 1.35c-.78.02-1.42.1-1.42.15 0 .18 2.12 1.2 3.35 1.6a14.1 14.1 0 0 0 11.37-1.35 15.74 15.74 0 0 0 5.78-7.1 19.6 19.6 0 0 0 1.18-5.49c0-.84.05-.95 1.02-1.95a11.8 11.8 0 0 0 1.21-1.41c.18-.35.16-.35-.72-.04-1.48.55-1.69.48-.96-.35A5.37 5.37 0 0 0 23.41.45c0-.06-.26.03-.55.2-.32.18-1.01.45-1.53.62l-.94.31-.85-.6a6.95 6.95 0 0 0-1.47-.8 5.68 5.68 0 0 0-3.04.06 5.24 5.24 0 0 0-3.38 5.27s-.15-2.32 0 0z" fill="#FFF" fill-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  props: {
    category: {
      type: String,
      default: 'Welcome'
    },
    color: {
      type: String,
      default: 'blue'
    }
  },
  components: {
    Logo
  },
  name: "Header",
  data() {
    return {
      menu: false,
      opacity: false,
      shrink: false
    }
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
    onKeyUp(event) {
      if (event.key === "Escape") {
        this.menu = !this.menu;
      }
    },
    onScroll() {
      var offset = document.querySelector('#hero-title').getBoundingClientRect();
      this.opacity = (window.scrollY > 100)? 1 : (window.scrollY / 100);
      if (offset.y < 40) { // window.scrollY > (innerHeight / 2) - 200
        this.shrink = true;
      } else {
        this.shrink = false;
      }
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener("scroll", this.onScroll);
      window.addEventListener("keyup", this.onKeyUp);
    }
  },
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener("scroll", this.onScroll);
      window.removeEventListener("keypu", this.onKeyUp);
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';

header {
  transition: height $slow $transition;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: $white;
  z-index: 10;
  &.shrink {
    height: 60px;
    .max-width {
      height: 60px;
    }
    .fade {
      top: 60px;
    }
    .max-width .menu-toggle .breadcrumb {
      opacity: 1;
    }
    .menu {
      .close {
        top: 0;
      }
    }
  }
  &.open {
    .menu {
      // opacity: 1;
      left: 0;
      right: 0;
    }
    .hamburger {
      path {
        fill: $white !important;
      }
    }
  }
  .max-width {
    transition: height $slow $transition;
    height: 80px;
    padding: 0 var(--spacing-desktop);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu-toggle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      .hamburger {
        &:hover {
          .welcome,
          .work,
          .agency,
          .ideas {
            animation-iteration-count: 1;
          }
          .welcome {
            animation: blue 700ms linear;
            animation-delay: 0ms;
          }
          .work {
            animation: green 700ms linear;
            animation-delay: 100ms;
          }
          .ideas {
            animation: yellow 700ms linear;
            animation-delay: 200ms;
          }
          .agency {
            animation: red 700ms linear;
            animation-delay: 300ms;
          }
        }
      }
      .breadcrumb {
        transition: opacity $slow $transition;
        margin-left: var(--spacing-desktop);
        opacity: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: calc(100vw - 350px);
        @media (max-width: $breakpoint-m) {
          width: calc(100vw - 297px);
        }
        @media (max-width: $breakpoint-s) {
          width: calc(100vw - 277px);
        }
      }
    }
    .logo-toggle {
      text-align: right;
    }
  }
  .menu {
    transition: all $medium $transition;
    position: fixed;
    top: 0;
    right: 100vw;
    bottom: 0;
    left: -100vw;
    z-index: 11;
    color: $white;
    line-height: 80px;
    padding: 120px var(--spacing-desktop);
    background: -moz-linear-gradient(left, rgba(38,50,56,1) 0%, rgba(38,50,56,1) 1%, rgba(38,50,56,0) 100%);
    background: -webkit-linear-gradient(left, rgba(38,50,56,1) 0%,rgba(38,50,56,1) 1%,rgba(38,50,56,0) 100%);
    background: linear-gradient(to right, rgba(38,50,56,1) 0%,rgba(38,50,56,1) 1%,rgba(38,50,56,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#263238', endColorstr='#00263238',GradientType=1 );
    .close {
      position: absolute;
      top: 10px;
      left: var(--spacing-desktop);
      cursor: pointer;
      svg path {
        transition: all $fast $transition;
      }
      .esc {
        transition: all $fast $transition;
        position: absolute;
        top: 17px;
        left: var(--spacing-desktop);
        color: $white;
        font-weight: 500;
        line-height: 26px;
        opacity: 0.25;
      }
      &:hover {
        // svg path {
        //   fill: $light-gray;
        // }
        .esc {
          opacity: 1;
        }
      }
    }
    a {
      text-decoration: none;
    }
    .welcome {
      &:hover,
      &.active {
        color: $blue;
      }
    }
    .work {
      &:hover,
      &.active {
        color: $green;
      }
    }
    .ideas {
      &:hover,
      &.active {
        color: $yellow;
      }
    }
    .agency {
      &:hover,
      &.active {
        color: $red;
      }
    }
  }
  .fade {
    transition: top $slow $transition;
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    top: 80px;
    left: 0;
    right: 0;
    background: -moz-linear-gradient(top, rgba(38,50,56,0.15) 0%, rgba(38,50,56,0) 100%);
    background: -webkit-linear-gradient(top, rgba(38,50,56,0.15) 0%,rgba(38,50,56,0) 100%);
    background: linear-gradient(to bottom, rgba(38,50,56,0.15) 0%,rgba(38,50,56,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#15263238', endColorstr='#00263238',GradientType=0 );
    opacity: 0;
  }
  @keyframes blue {
    0% {fill: $darkest-gray; }
    33% {fill: $blue; }
    66% {fill: $blue; }
    100% {fill: $darkest-gray; }
  }
  @keyframes green {
    0% {fill: $darkest-gray; }
    33% {fill: $green; }
    66% {fill: $green; }
    100% {fill: $darkest-gray; }
  }
  @keyframes yellow {
    0% {fill: $darkest-gray; }
    33% {fill: $yellow; }
    66% {fill: $yellow; }
    100% {fill: $darkest-gray; }
  }
  @keyframes red {
    0% {fill: $darkest-gray; }
    33% {fill: $red; }
    66% {fill: $red; }
    100% {fill: $darkest-gray; }
  }
}
</style>
