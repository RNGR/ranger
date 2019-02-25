<template>
  <a :href="url" class="more" :class="color">
    <h4>{{text}}</h4>
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8l-1.41-1.41L9 12.17V0H7v12.17L1.42 6.58 0 8l8 8z" fill="#263238" fill-rule="evenodd"/>
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'See All'
    },
    color: {
      type: String,
      default: 'blue'
    },
    url: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';

.more {
  display: block;
  width: 100%;
  text-align: center;
  &:hover {
    svg {
      transform: translateY(4px);
    }
  }
  svg {
    transition: all $fast $transition;
  }
  h4 {
    margin-bottom: 10px;
  }
  &.blue svg path {
    fill: $blue;
  }
  &.green svg path {
    fill: $blue;
  }
  &.yellow svg path {
    fill: $blue;
  }
  &.red svg path {
    fill: $blue;
  }
}
</style>
