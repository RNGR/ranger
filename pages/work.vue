<template>
  <div class="container">
    <AppHeader
      category="Our Work"
      color="green" />
    <hero
      color="green"
      category="Our Work"
      image="/images/nature-2.svg"
      title="Partnering with innovative startups, niche boutiques, and industry-leading enterprises alike, our clients share one common trait — vision. Driven by their inspiration, we transform that vision into reality."
      subtitle="At RANGER, we build more than just great websites. Our broad range of work includes interactive media installations, divergent contepting for digital campaigns, rapid application prototyping, complete enterprise eco-systems, and more." />
    <section class="max-width">
      <a name="software" />
      <h2 class="heading">Products &amp; Services</h2>
      <device color="green" category="Headless CMS &amp; API" title="Directus Suite" subtitle="Directus is an open-source suite of software that instantly provides an API wrapper for SQL databases, as well as an intuitive Admin App for non-technical users to manage content. Our innovative platform powers the content behind millions of websites, native apps, IoT devices, and enterprise ecosystems around the world." button1title="Website" button1url="https://directus.io" button2title="Documentation" button2url="https://docs.directus.io">
        <img src="/images/device-directus.svg">
      </device>
      <hr />
      <device color="green" category="Content-as-a-Service" title="Directus Cloud" subtitle="Powered by the all new Directus 7, we’ve completely reimagined our database on-demand platform. Spin up new projects in seconds, model your data however you'd like, and then connect it to your projects through our dynamic REST API. Pre-register now to join our private beta group — public release coming in Q2 2019." button1title="Pre-Register" button1url="https://directus.cloud/sign-up" button2title="Beta Login" button2url="https://directus.cloud/login" reverse="true">
        <img src="/images/device-directus-cloud.svg">
      </device>
    </section>
    <hr>
    <section class="max-width">
      <a name="projects" />
      <h2 class="heading">Select Projects</h2>
      <div class="grid">
        <module color="#039be5" />
        <module color="#4caf50">
          <svg width="170" height="27" viewBox="0 0 170 27" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
            <path d="M149.28 8.47l-4.3 8.47h9.1l-4.8-8.47zm7 18.07v-.46c1.41 0 2.01-.41 2.01-1.33 0-.42-.17-.96-.47-1.5l-2.56-4.51h-11.11l-1.97 3.96a4.33 4.33 0 0 0-.47 1.8c0 .96.43 1.58 1.62 1.58v.46h-6.88v-.46c1.63 0 2.65-1.08 3.64-3.04l8.24-16.4-2.3-3.8c-1.2-1.96-2.44-2.38-3.68-2.38V0h10.81l13.34 23.25c.8 1.41 1.7 2.83 3.5 2.83v.46h-13.72zm-29.5-18.36c0-4.72-3.09-6.49-6.53-6.49h-3.7v22.6h3.7c3.44 0 6.54-1.77 6.54-6.5V8.2zm-5.3 18.36h-15.73v-.46c.34 0 3.38-.16 3.38-3.21V3.67c0-3.05-3.04-3.21-3.38-3.21V0h15.73c7.06 0 14.4 4.5 14.4 13.27 0 8.8-7.34 13.27-14.4 13.27zM82.18 8.47l-4.29 8.47H87l-4.8-8.47zm7.01 18.07v-.46c1.41 0 2.01-.41 2.01-1.33 0-.42-.17-.96-.47-1.5l-2.56-4.51H77.06l-1.97 3.96a4.33 4.33 0 0 0-.47 1.8c0 .96.43 1.58 1.62 1.58v.46h-6.88v-.46c1.63 0 2.65-1.08 3.64-3.04l8.24-16.4-2.3-3.8C77.73.88 76.5.46 75.25.46V0h10.81L99.4 23.25c.82 1.41 1.72 2.83 3.51 2.83v.46H89.19zM49.26 1.7h-5.48v13h5.48c3.97 0 5.9-3.03 5.9-6.48 0-3.45-1.93-6.52-5.9-6.52zm7.07 24.85L43.86 16.48v6.39c0 3.05 3.04 3.21 3.39 3.21v.46H32.98v-.46c.34 0 3.38-.16 3.38-3.21V3.67c0-3.05-3.04-3.21-3.38-3.21V0h20.05c6.39 0 9.39 4.13 9.39 8.26 0 4.1-3 8.22-9.39 8.22h-6.25c1.37 1.42 4.24 2 6.85 2 1.16 0 2.32-.16 3.3-.4l10.16 8.09v.37H56.33zM16.26 1.7H10.8v13h5.46c4.03 0 5.91-3.03 5.91-6.48 0-3.45-1.88-6.52-5.91-6.52zm3.85 14.8h-9.15v6.38c0 3.05 3.05 3.21 3.4 3.21v.46H0v-.46c.34 0 3.4-.16 3.4-3.21V3.67C3.4.62.34.46 0 .46V0h20.11c6.4 0 9.46 4.13 9.46 8.26 0 4.1-3.05 8.22-9.46 8.22z" fill="#90A4AE" fill-rule="evenodd"/>
          </svg>
        </module>
        <module color="#ff9800" :large="true">
          <svg width="459" height="91" viewBox="0 0 459 91" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
            <path d="M184.79 13.76V0h90.42v13.76h-37.35v62.9h37.35v13.77H184.8V76.67h37.35v-62.9h-37.35zm151.36 76.67h-15.72V45.79L281.92 0h17.48l29.23 34.72L357.78 0h16.77l.41.34-38.82 46.23.01 43.86zM160.13 0h13.05v90.4h-13.05V76.9a44.74 44.74 0 0 1-32.06 13.53c-24.8 0-44.98-20.28-44.98-45.22C83.09 20.28 103.26 0 128.07 0c12.02 0 23.32 4.7 31.81 13.24l.25.26V0zm-32.06 77.31a32.05 32.05 0 0 0 31.94-32.1 31.97 31.97 0 0 0-9.35-22.7 31.65 31.65 0 0 0-22.59-9.4 32.05 32.05 0 0 0-31.93 32.1c0 17.7 14.32 32.1 31.93 32.1zM445.5 13.24a45.03 45.03 0 0 1 13.17 31.97c0 24.93-20.18 45.22-44.98 45.22-24.8 0-44.99-20.28-44.99-45.22C368.69 20.28 388.87 0 413.68 0c12.01 0 23.31 4.7 31.8 13.24zm-31.81 64.07a32.05 32.05 0 0 0 31.93-32.1 31.97 31.97 0 0 0-9.35-22.7 31.64 31.64 0 0 0-22.58-9.4 32.05 32.05 0 0 0-31.94 32.1c0 17.7 14.33 32.1 31.94 32.1zM71.75 0h18.38l.3.3L45.4 45.37l44.43 44.5-.55.55H71.4L32.84 51.8H13.76v38.63H0V0h13.76v38.37h19.67L71.75 0z" fill="#90A4AE" fill-rule="nonzero"/>
          </svg>
        </module>
        <module color="#039be5" />
        <module color="#f44336" />
        <module color="#4caf50" />
        <module color="#039be5" />
        <module color="#ff9800" />
        <module color="#039be5" />
        <module color="#4caf50" :large="true" />
        <module color="#039be5" />
        <module color="#4caf50" />
        <module color="#039be5" />
        <module color="#4caf50" />
        <module color="#039be5" />
        <module color="#f44336" />
        <module color="#039be5" />
        <module color="#4caf50" />
        <module color="#ff9800" />
        <module color="#4caf50" />
        <module color="#039be5" :large="true" />
        <module color="#f44336" />
        <module color="#039be5" />
        <module color="#4caf50" />
        <module color="#ff9800" />
        <module color="#f44336" />
        <module color="#4caf50" />
      </div>
    </section>
    <quote />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import Hero from '~/components/Hero.vue'
import Logo from '~/components/Logo.vue'
import Quilt from '~/components/Quilt.vue'
import More from '~/components/More.vue'
import Device from '~/components/Device.vue'
import Module from '~/components/Module.vue'
import Break from '~/components/Break.vue'
import Idea from '~/components/Idea.vue'
import Quote from '~/components/Quote.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    Hero,
    Logo,
    Quilt,
    More,
    Device,
    Module,
    Break,
    Idea,
    Quote
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';
</style>
