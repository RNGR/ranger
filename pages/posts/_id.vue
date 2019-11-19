<template>
  <div class="container">
    <AppHeader
      :category="title"
      color="gray" />
    <section class="hero max-width">
      <div class="background-container">
        <div class="background" :style="{ 'background-image': 'url(https://api.directus.cloud/thumbnail/dcKFa5YXThieN2Sl/1500/400/crop/better/' + hero.filename + ')' }"></div>
      </div>
    </section>
    <section class="post max-width-article">
      <div class="header">
        <h4 id="hero-title">{{category}}</h4>
        <h2>{{title}}</h2>
        <h6>By {{author}}<span v-if="source"> — via <a :href="source_url">{{source}}</a></span></h6>
      </div>
      <article v-html="body"></article>
      <aside>
        <div class="social">
          <a href="https://twitter.com/home?status=Check%20out%20this%20article%20by%20RANGER%20Studio%3A%0A%0Ahttps%3A//rangerstudio.com/posts/test" title="Share via Twitter" target="_blank">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 40a20 20 0 1 1 0-40 20 20 0 0 1 0 40zm0-2.4a17.6 17.6 0 1 0 0-35.2 17.6 17.6 0 0 0 0 35.2zm-.3-21.2c0-1.7 0 0 0 0 0-1.7 1-3.2 2.5-3.8.6-.2 1.6-.3 2.3 0l1 .5.7.5.6-.3A7 7 0 0 0 28 13l.4-.2c0 .3-.5 1-.9 1.5-.5.6-.4.6.7.2.7-.2.7-.2.5 0 0 .2-.4.6-.9 1-.7.8-.7.9-.7 1.5a11.5 11.5 0 0 1-5.1 9.2 10.3 10.3 0 0 1-10.8-.1l1-.2a7 7 0 0 0 3.5-1l.6-.4-.8-.3c-1-.4-2-1.3-2.3-2.2-.1-.2 0-.3.6-.3h.8l-.7-.3c-.7-.4-1.4-1-1.7-1.7a5 5 0 0 1-.5-1.8l.6.2c1 .3 1 .2.5-.3a4 4 0 0 1-.8-4l.3-.7.8 1c1.7 1.7 3.7 2.7 6 3l.7.1v-.7z" fill="#CFD8DC" fill-rule="evenodd"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//rangerstudio.com/posts/test&title=Test%20Title&summary=&source=" title="Share via LinkedIn" target="_blank">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 40a20 20 0 1 0 0-40 20 20 0 0 0 0 40zm0-2.4a17.6 17.6 0 1 0 0-35.2 17.6 17.6 0 0 0 0 35.2zm-8.8-21.5v11.6H15V16.1h-3.8zm2.1-5.7c-1.3 0-2.1.9-2.1 2s.8 2 2 2h.1c1.3 0 2.1-.9 2.1-2s-.8-2-2-2zm11.2 5.7c-2 0-3 1.1-3.4 2v-1.7h-3.8V28h3.8v-6.5-1c.4-.6 1-1.4 2-1.4 1.4 0 2 1.1 2 2.7V28h3.7v-6.7c0-3.5-1.9-5.2-4.3-5.2z" fill="#CFD8DC" fill-rule="evenodd"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//rangerstudio.com/posts/test" title="Share via Facebook" target="_blank">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 40a20 20 0 1 1 0-40 20 20 0 0 1 0 40zm0-2.4a17.6 17.6 0 1 0 0-35.2 17.6 17.6 0 0 0 0 35.2zm1.5-8.8h-4V20h-1.9v-3h2V15c0-2.4 1-3.9 4.2-3.9h2.6v3h-1.6c-1.3 0-1.3.5-1.3 1.2V17h2.9l-.3 3h-2.6v8.8z" fill="#CFD8DC" fill-rule="evenodd"/>
            </svg>
          </a>
          <a href="mailto:?&subject=Check out this RANGER Article...&body=https%3A//rangerstudio.com/posts/test" title="Share via Email" target="_blank">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 40a20 20 0 1 1 0-40 20 20 0 0 1 0 40zm0-2.4a17.6 17.6 0 1 0 0-35.2 17.6 17.6 0 0 0 0 35.2zm6.4-24c.9 0 1.6.7 1.6 1.6v9.6c0 .9-.7 1.6-1.6 1.6H13.6c-.9 0-1.6-.7-1.6-1.6v-9.6c0-.9.7-1.6 1.6-1.6h12.8zm0 3.2v-1.6l-6.4 4-6.4-4v1.6l6.4 4 6.4-4z" fill="#CFD8DC" fill-rule="evenodd"/>
            </svg>
          </a>
        </div>
        <hr v-if="buttons.length">
        <div class="buttons">
          <a v-for="button in buttons" :key="button.id" :href="button.button_id.url" target="_blank" class="buttonLink">
            <button :class="{outline: button.button_id.outline}" class="gray full">{{button.button_id.title}}</button>
          </a>
        </div>
        <hr v-if="details.length">
        <div v-for="detail in details" :key="detail.id">
          <h4>{{detail.detail_id.title}}</h4>{{detail.detail_id.value}}
        </div>
      </aside>
    </section>
    <hr v-if="related_posts.length > 0">
    <section v-if="related_posts.length > 0" class="related-articles max-width">
      <h2 class="heading">Related Articles</h2>
      <idea v-for="related in related_posts" :key="related.related_id.id"
        :id="related.related_id.id"
        :category="related.related_id.category"
        :title="related.related_id.title"
        :subtitle="'By '+related.related_id.author+' — via '+related.related_id.source"
        :summary="related.related_id.summary"
        :image="related.related_id.hero.filename"
        color="blue"
         />
    </section>
    <hr>
    <quote />
    <AppFooter />
  </div>
</template>

<script>
import axios from 'axios'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import Logo from '~/components/Logo.vue'
import More from '~/components/More.vue'
import Module from '~/components/Module.vue'
import Break from '~/components/Break.vue'
import Idea from '~/components/Idea.vue'
import Quote from '~/components/Quote.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    Logo,
    More,
    Module,
    Break,
    Idea,
    Quote
  },
  validate({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(`https://api.directus.cloud/dcKFa5YXThieN2Sl/items/posts/${+params.id}?fields=related_posts.related_id.*.*,*.*.*`)
      return data.data
    } catch (e) {
      error({ message: 'Post not found', statusCode: 404 })
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';

.hero {
  position: relative;
  height: calc(400px);
  padding: 0 var(--spacing-desktop);
  margin-bottom: var(--spacing-desktop);
  overflow: hidden;
  .background-container {
    display: flex;
    align-items: center;
    height: 100%;
    background-color: $darkest-gray;
    .background {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      opacity: 0.5;
    }
  }
}

.post {
  padding: var(--spacing-desktop) var(--spacing-desktop) 140px var(--spacing-desktop);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .header {
    width: 100%;
    margin-bottom: var(--spacing-desktop-s);
    h2 {
      padding-bottom: 6px;
    }
    a {
      color: $dark-gray;
      border-bottom: 1px solid $lightest-gray;
      &:hover {
        border-bottom: 1px solid $light-gray;
      }
    }
  }
  article {
    width: calc(100% - 340px);
    font-family: 'Neuton', serif;
    font-size: 24px;
    line-height: 34px;
    font-weight: 300;
    h3 {
      font-family: 'Gotham HTF';
      font-size: 28px;
      line-height: 34px;
      font-weight: 600;
      margin: 60px 0 0;
    }
    h4 {
      font-family: 'Gotham HTF';
      font-size: 20px;
      line-height: 26px;
      margin: 30px 0 0;
      text-transform: none;
    }
    p {
      margin: 10px 0 20px;
      &:first-of-type {
        margin-top: 0;
      };
    }
    strong {
      font-weight: 400;
    }
    code {
      font-family: Menlo,Monaco,"Courier New",Courier,monospace;
      font-size: 17px;
      background: rgba(0,0,0,.05);
      padding: 3px 4px;
      margin: 0 2px;
    }
    hr {
      margin: 30px 0;
      padding: 0;
      border: none;
      &:after {
        content:"...";
        display: block;
        text-align: center;
        font-size: 30px;
        line-height: 60px;
        color: $dark-gray;
        letter-spacing: 20px;
      }
    }
    a {
      // color: $gray;
      border-bottom: 1px solid $light-gray;
      &:hover {
        border-bottom: 1px solid $darker-gray;
      }
    }
    blockquote {
      margin: 30px 0 30px -20px;
      padding: 0 0 10px 20px;
      border-left: 2px solid $lighter-gray;
      color: $light-gray;
      // text-indent: -0.4em;
    }
    .video-container {
      position: relative;
      overflow: hidden;
      height: 0;
      padding-bottom: 56.25%;
      margin: var(--spacing-desktop) 0;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  aside {
    margin-left: var(--spacing-desktop-s);
    width: 300px;
    color: $light-gray;
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
    h4 {
      margin-top: 20px;
      &:first-of-type {
        margin-top: 0;
      }
    }
    hr {
      margin-left: 0;
      margin-right: 0;
    }
    .social {
      display: flex;
      justify-content: space-around;
      height: 40px;
    }
    .buttonLink {
      display: block;
      margin-bottom: 20px;
      &:last-of-type {
        margin-bottom: 0;
      };
    }
  }
  @media (max-width: $breakpoint-xl) {
    article {
      width: calc(100% - 300px);
    }
    aside {
      width: 260px;
    }
  }
  @media (max-width: $breakpoint-l) {
    article {
      width: calc(100% - 240px);
    }
    aside {
      width: 200px;
    }
  }
  @media (max-width: $breakpoint-m) {
    padding-bottom: 80px;
    article {
      width: 100%;
      font-size: 16px;
      line-height: 28px;
      p {
        margin: 20px 0;
      }
    }
    aside {
      width: 100%;
      margin-top: var(--spacing-desktop-2);
      margin-left: 0;
    }
  }
}
.related-articles {
  margin-bottom: var(--spacing-desktop-2);
}
</style>

<!--
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/qQZIHrMnDdE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
 -->
