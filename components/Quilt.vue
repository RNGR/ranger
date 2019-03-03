<template>
  <section class="logo-quilt max-width">
    <img src="/images/aol.svg" alt="Aol">
    <img src="/images/att.svg" alt="AT&T">
    <img src="/images/google.svg" alt="Google">
    <img src="/images/hasbro.svg" alt="Hasbro">
    <img src="/images/hp.svg" alt="HP">
    <img src="/images/prada.svg" alt="Prada">
  </section>
</template>

<style lang="scss">
@import '~assets/scss/main.scss';

.logo-quilt {
  padding: 0 var(--spacing-desktop);
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  img {
    margin: 0 10px var(--spacing-desktop);
  }
  @media (max-width: $breakpoint-l) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: $breakpoint-s) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
