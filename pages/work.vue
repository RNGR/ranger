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
      <device color="green" category="Headless CMS &amp; API" title="Directus Suite" subtitle="Directus is an open-source suite of software that instantly provides an API wrapper for SQL databases, as well as an intuitive Admin App for non-technical users to manage content. Our innovative platform powers the content behind millions of websites, native apps, IoT devices, and enterprise ecosystems around the world." button1title="Website" button1url="https://directus.io" button2title="Docs" button2url="https://docs.directus.io">
        <img src="/images/device-directus.svg">
      </device>
      <hr />
      <device color="green" category="Content-as-a-Service" title="Directus Cloud" subtitle="Powered by the all new Directus 7, we’ve completely reimagined our database on-demand platform. Spin up new projects in seconds, model your data however you'd like, and then connect it to your projects through our dynamic REST API. Pre-register now to join our private beta group — public release coming in Q2 2019." button1title="Pre-Register" button1url="https://directus.cloud/sign-up" button2title="Beta Login" button2url="https://directus.cloud/login" reverse="true">

      </device>
    </section>
    <hr>
    <section class="max-width">
      <a name="projects" />
      <h2 class="heading">Select Projects</h2>
      <div class="grid">

        <module color="#039be5" title="Google Search App" subtitle="Consulting"><google /></module>
        <module color="#FFEB3B" title="Snapchat Spectacles" subtitle="Website"><snapchat /></module>
        <module color="#9C27B0" title="AT&T Performing Arts Center" subtitle="3D Digital Installation" :large="true"><att /></module>
        <module color="#FFEB3B" title="SoulCycle" subtitle="Website & Ecosystem"><soulcycle /></module>
        <module color="#263238" title="Pradasphere" subtitle="Website"><prada /></module>
        <module color="#039be5" title="HP Global Citizenship Report" subtitle="Website"><hp /></module>
        <module color="#E91E63" title="Aol Artists" subtitle="Website"><aol /></module>
        <module color="#3F51B5" title="ACLU Uncovery" subtitle="Website"><aclu /></module>
        <module color="#f44336" title="PS212" subtitle="Website"><ps212 /></module>
        <module color="#4CAF50" title="Chrome Web Lab" subtitle="Experimental Website" :large="true"><google /></module>
        <module color="#009688" title="Hasbro CSR" subtitle="Website"><hasbro /></module>
        <module color="#03A9F4" title="Juilliard Creative Classroom" subtitle="Web Application"><juilliard /></module>
        <module color="#263238" title="2×4" subtitle="Website"><twobyfour /></module>
        <module color="#f44336" title="MoMA Home Delivery" subtitle="Website"><moma /></module>
        <module color="#FFB300" title="Brahma" subtitle="Website"><brahma /></module>
        <module color="#f44336" title="Interbrand" subtitle="Website"><interbrand /></module>
        <module color="#FFEB3B" title="Warner Bros. Scanner Darkly" subtitle="Website"><wb /></module>
        <module color="#039be5" title="Google Maps" subtitle="Digital Ad Campaigns"><google /></module>
        <module color="#00BCD4" title="Pérez Art Museum Miami" subtitle="Digital Installation"><pamm /></module>
        <module color="#8BC34A" title="Quartz" subtitle="Digital Ad Campaigns"><quartz /></module>
        <module color="#f44336" title="Audi Experiments in Motion" subtitle="Website" :large="true"><audi /></module>
        <module color="#263238" title="The Mill" subtitle="Website"><themill /></module>
        <module color="#3F51B5" title="World Performance Project" subtitle="Website"><yale /></module>
        <module color="#f44336" title="Interbrand Health" subtitle="Website"><interbrand /></module>
        <module color="#00BCD4" title="FastFit" subtitle="Website"><fastfit /></module>
        <module color="#9C27B0" title="i2institute" subtitle="Website"><i2 /></module>
        <module color="#FFEB3B" title="Assouline" subtitle="Website"><assouline /></module>
        <module color="#f44336" title="Consumer Financial Protection Bureau" subtitle="Website" :large="true"><usgov /></module>
        <module color="#FF9800" title="FREE" subtitle="Website"><free /></module>
        <module color="#039be5" title="HP SSI" subtitle="Website"><hp /></module>
        <module color="#263238" title="Frank News" subtitle="Website"><frank /></module>
        <module color="#8BC34A" title="The Island House" subtitle="Website"><theislandhouse /></module>
        <module color="#00BCD4" title="NewVue" subtitle="Website"><newvue /></module>
        <module color="#E91E63" title="Sasaki" subtitle="Website"><sasaki /></module>
        <module color="#3F51B5" title="Esto" subtitle="Website"><esto /></module>
        <module color="#4CAF50" title="Architecture Research Office" subtitle="Website"><aro /></module>
        <module color="#263238" title="Force Majeure" subtitle="Website"><forcemajeure /></module>
        <module color="#3949AB" title="Droit Financial Technologies" subtitle="Website"><droit /></module>
        <module color="#c62828" title="Josef and Anni Albers Foundation" subtitle="Website" :large="true"><jaaf /></module>
        <module color="#f44336" title="Apple Tree Partners" subtitle="Website"><atp /></module>
        <module color="#3F51B5" title="Platnum" subtitle="Website"><platnum /></module>
        <module color="#f44336" title="Interbrand Best Global Brands" subtitle="Website"><interbrand /></module>
        <module color="#F48FB1" title="Oribe" subtitle="Website"><oribe /></module>
        <module color="#3F51B5" title="Philips Connect Us" subtitle="Website"><philips /></module>
        <module color="#BDBDBD" title="Artis" subtitle="Website"><artis /></module>
        <module color="#A1887F" title="Eleven Madison Park" subtitle="Website" :large="true"><emp /></module>
        <module color="#f44336" title="Ecko Function" subtitle="Website"><ecko /></module>
        <module color="#212121" title="Bernard Tschumi Architects" subtitle="Website"><bta /></module>
        <module color="#3F51B5" title="365 Days 365 Plays" subtitle="Website"><yale /></module>
        <module color="#8BC34A" title="RedScout" subtitle="Website"><redscout /></module>
        <module color="#FFC107" title="Kaiyo" subtitle="Website"><kaiyo /></module>
        <module color="#FFC107" title="The New School" subtitle="Website"><thenewschool /></module>

        <!--
        Steven Holl Architects
        White Columns
        WORKac
        Tschumi
        The Rachofsky House
        Total Jerkface
        Studios Architecture
        Studio MA
        The Future Perfect
        Steven Holl Architects
        PPOW
        Performa
        NYIT
        North Grant Park
        Lyn Rice Architects
        Jaklitsch
        Hirschl and Adler
        Greenblatt Wexler
        Drew Lang Architecture
        Binkley Garcia Architecture
        Ayla Beauty
        -->

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
