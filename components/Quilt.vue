<template>
  <section class="max-width logo-quilt">
    <aol />
    <att />
    <google />
    <hasbro />
    <moma />
    <prada />
  </section>
</template>

<style lang="scss">
@import '~assets/scss/main.scss';

.logo-quilt {
  padding: 0 var(--spacing-desktop);
  width: 100%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: var(--spacing-desktop) !important;
  svg {
    width: 80%;
    margin: 0 20px;
    path {
      fill: $lighter-gray;
    }
  }
  @media (max-width: $breakpoint-l) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: $breakpoint-s) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
