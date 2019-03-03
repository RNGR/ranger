<template>
  <section class="quote">
    <h3>“{{quoteRandom.quote}}”</h3>
    <div class="title">{{quoteRandom.title}}</div>
    <div class="subtitle">{{quoteRandom.subtitle}}</div>
  </section>
</template>

<script>
export default {
  name: "Quote",
  data() {
    return {
      quoteList: [
        {
          quote: "2×4 has collaborated with RANGER on multiple projects for several years. They are great at all interactive work, but we usually turn to them for more unusual/challenging work. RANGER approaches each project with a collaborative and open mind and are motivated by the challenges presented, both initially and along the way.",
          title: "Milena Sadee",
          subtitle: "2×4 — Director of Interactive Media"
        },
        {
          quote: "RANGER has been excellent to work with. They are communicative, flexible, and always keep to the schedule and budget. We look forward to more collaborations with them down the road.",
          title: "Rod DeWeese",
          subtitle: "Celery Design — Founding Partner"
        },
        {
          quote: "As a studio of designer’s designers who incidentally focus on the digital realm, RANGER is both a fluid and reassuring team to work with… know-how and craft alike.",
          title: "John Paul Chirdon",
          subtitle: "Wolff Olins — Design Director"
        },
        {
          quote: "We have a longstanding collaboration with RANGER, and they have helped us with many interactive projects including some with quite a bit of complexity and nuance. In every case, they have been thoughtful, engaged, and detailed in their work. RANGER is fantastic.",
          title: "Rob Giampietro",
          subtitle: "Project Projects — Principal"
        },
        {
          quote: "We couldn't be happier with RANGER. The precision, professionalism, and quality of work is far beyond any other digital studios we've worked with. We feel so lucky to have you as our partner.",
          title: "Natasha Jen",
          subtitle: "Pentagram — Partner"
        }
      ],
      quoteRandom: {}
    }
  },
  created () {
    var random = Math.floor(Math.random() * this.quoteList.length);
    this.quoteRandom = this.quoteList[random];
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';

.quote {
  margin: var(--spacing-desktop-4) auto;
  padding: var(--spacing-desktop);
  max-width: 840px;
  h3 {
    text-indent: -0.4em;
  }
  .title {
    font-weight: 500;
    margin-top: var(--spacing-desktop);
  }
  .subtitle {
    color: $light-gray;
  }
}
</style>
