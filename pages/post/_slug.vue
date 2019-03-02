<template>
  <div class="container">
    <AppHeader
      category="The Future of Agnostic Data"
      color="gray" />
    <section class="hero max-width">
      <div class="background">
        <img :src="image">
      </div>
    </section>
    <section class="post max-width-small">
      <div class="header">
        <h4 id="hero-title">Article</h4>
        <h2>The Future of Agnostic Data</h2>
        <h6>By Ben Haynes — via <a href="#">Forbes</a></h6>
      </div>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget venenatis neque, euismod fermentum velit. Nulla tincidunt enim nisl, ac lacinia leo euismod eget. Proin at lacinia tellus. <a href="#">Vestibulum</a> id nibh pulvinar, blandit metus a, pulvinar leo. Pellentesque nibh libero, suscipit sed felis eu, euismod ornare purus. Phasellus at euismod ex. Maecenas sollicitudin, diam vitae sodales vulputate, nunc risus mattis augue, malesuada bibendum purus eros at leo. Duis elit eros, condimentum id commodo ut, iaculis id nisl. Quisque quis tortor magna. In hac habitasse platea dictumst.
        </p>
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/qQZIHrMnDdE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p>
          Proin at lacinia tellus. Vestibulum id nibh pulvinar, blandit metus a, pulvinar leo. Pellentesque nibh libero, suscipit sed felis eu, euismod ornare purus. Phasellus at euismod ex. Maecenas sollicitudin, diam vitae sodales vulputate, nunc risus mattis augue, malesuada bibendum purus eros at leo. Duis elit eros, condimentum id commodo ut, iaculis id nisl. Quisque quis tortor magna. In hac habitasse platea dictumst. Etiam consectetur enim vitae placerat dictum.
        </p>
        <blockquote>
          Phasellus at euismod ex. Nulla tincidunt enim nisl, ac lacinia leo euismod eget. Maecenas sollicitudin, diam vitae sodales vulputate, nunc risus mattis augue, malesuada at leo.
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget venenatis neque, euismod fermentum velit. Nulla tincidunt enim nisl, ac lacinia leo euismod eget. Proin at lacinia tellus. Vestibulum id nibh pulvinar, blandit metus a, pulvinar leo. Pellentesque nibh libero, suscipit sed felis eu, euismod ornare purus. Phasellus at euismod ex. Maecenas sollicitudin, diam vitae sodales vulputate, nunc risus mattis augue, malesuada bibendum purus eros at leo. Duis elit eros, condimentum id commodo ut, iaculis id nisl. Quisque quis tortor magna. In hac habitasse platea dictumst.
        </p>
        <p>
          Proin at lacinia tellus. Vestibulum id nibh pulvinar, blandit metus a, pulvinar leo. Pellentesque nibh libero, suscipit sed felis eu, euismod ornare purus. Phasellus at euismod ex. Maecenas sollicitudin, diam vitae sodales vulputate, nunc risus mattis augue, malesuada bibendum purus eros at leo. Duis elit eros, condimentum id commodo ut, iaculis id nisl. Quisque quis tortor magna. In hac habitasse platea dictumst. Etiam consectetur enim vitae placerat dictum.
        </p>
      </article>
      <aside>
        <div class="social">
          <a href="https://twitter.com/home?status=Check%20out%20this%20article%20by%20RANGER%20Studio%3A%0A%0Ahttps%3A//rangerstudio.com/post/test" title="Share via Twitter" target="_blank">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 40a20 20 0 1 1 0-40 20 20 0 0 1 0 40zm0-2.4a17.6 17.6 0 1 0 0-35.2 17.6 17.6 0 0 0 0 35.2zm-.3-21.2c0-1.7 0 0 0 0 0-1.7 1-3.2 2.5-3.8.6-.2 1.6-.3 2.3 0l1 .5.7.5.6-.3A7 7 0 0 0 28 13l.4-.2c0 .3-.5 1-.9 1.5-.5.6-.4.6.7.2.7-.2.7-.2.5 0 0 .2-.4.6-.9 1-.7.8-.7.9-.7 1.5a11.5 11.5 0 0 1-5.1 9.2 10.3 10.3 0 0 1-10.8-.1l1-.2a7 7 0 0 0 3.5-1l.6-.4-.8-.3c-1-.4-2-1.3-2.3-2.2-.1-.2 0-.3.6-.3h.8l-.7-.3c-.7-.4-1.4-1-1.7-1.7a5 5 0 0 1-.5-1.8l.6.2c1 .3 1 .2.5-.3a4 4 0 0 1-.8-4l.3-.7.8 1c1.7 1.7 3.7 2.7 6 3l.7.1v-.7z" fill="#CFD8DC" fill-rule="evenodd"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//rangerstudio.com/post/test&title=Test%20Title&summary=&source=" title="Share via LinkedIn" target="_blank">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 40a20 20 0 1 0 0-40 20 20 0 0 0 0 40zm0-2.4a17.6 17.6 0 1 0 0-35.2 17.6 17.6 0 0 0 0 35.2zm-8.8-21.5v11.6H15V16.1h-3.8zm2.1-5.7c-1.3 0-2.1.9-2.1 2s.8 2 2 2h.1c1.3 0 2.1-.9 2.1-2s-.8-2-2-2zm11.2 5.7c-2 0-3 1.1-3.4 2v-1.7h-3.8V28h3.8v-6.5-1c.4-.6 1-1.4 2-1.4 1.4 0 2 1.1 2 2.7V28h3.7v-6.7c0-3.5-1.9-5.2-4.3-5.2z" fill="#CFD8DC" fill-rule="evenodd"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//rangerstudio.com/post/test" title="Share via Facebook" target="_blank">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 40a20 20 0 1 1 0-40 20 20 0 0 1 0 40zm0-2.4a17.6 17.6 0 1 0 0-35.2 17.6 17.6 0 0 0 0 35.2zm1.5-8.8h-4V20h-1.9v-3h2V15c0-2.4 1-3.9 4.2-3.9h2.6v3h-1.6c-1.3 0-1.3.5-1.3 1.2V17h2.9l-.3 3h-2.6v8.8z" fill="#CFD8DC" fill-rule="evenodd"/>
            </svg>
          </a>
          <a href="mailto:?&subject=Check out this RANGER Article...&body=https%3A//rangerstudio.com/post/test" title="Share via Email" target="_blank">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 40a20 20 0 1 1 0-40 20 20 0 0 1 0 40zm0-2.4a17.6 17.6 0 1 0 0-35.2 17.6 17.6 0 0 0 0 35.2zm6.4-24c.9 0 1.6.7 1.6 1.6v9.6c0 .9-.7 1.6-1.6 1.6H13.6c-.9 0-1.6-.7-1.6-1.6v-9.6c0-.9.7-1.6 1.6-1.6h12.8zm0 3.2v-1.6l-6.4 4-6.4-4v1.6l6.4 4 6.4-4z" fill="#CFD8DC" fill-rule="evenodd"/>
            </svg>
          </a>
        </div>
        <hr>
        <div class="buttons">
          <button class="gray full">Website</button>
          <button class="gray full outline">Documentation</button>
        </div>
        <hr>
        <h4 id="hero-title">Completed</h4>
        2018
        <h4 id="hero-title">Duration</h4>
        2 Years
        <h4 id="hero-title">Scope</h4>
        Concept, Branding, Design, Development, Infrastructure, Cloud Service, and Marketing
        <h4 id="hero-title">Partner</h4>
        Pentagram
      </aside>
    </section>
    <hr>
    <section class="max-width">
      <h2 class="heading">Related Articles</h2>
      <idea color="blue" />
      <idea color="blue" />
    </section>
    <hr>
    <quote />
    <AppFooter />
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';

.hero {
  position: relative;
  height: calc(400px);
  padding: 0 $spacing-desktop;
  margin-bottom: $spacing-desktop;
  overflow: hidden;
  .background {
    display: flex;
    align-items: center;
    height: 100%;
    background-color: $darkest-gray;
    & > img {
      position: absolute;
      right: 25%;
      top: 10%;
      height: 80%;
      z-index: 1;
      opacity: 0.5;
    }
  }
}

.post {
  padding: $spacing-desktop $spacing-desktop 140px $spacing-desktop;
  display: flex;
  flex-wrap: wrap;
  .header {
    width: 100%;
    margin-bottom: $spacing-desktop;
  }
  article {
    width: calc(100% - 340px);
    font-size: 18px;
    line-height: 34px;
    p {
      margin: 20px 0;
      &:first-of-type {
        margin-top: 0;
      };
    }
    a {
      color: $gray;
      border-bottom: 1px solid $lightest-gray;
      &:hover {
        border-bottom: 1px solid $light-gray;
      }
    }
    blockquote {
      margin: $spacing-desktop 0 $spacing-desktop $spacing-desktop;
      color: $light-gray;
    }
    .video-container {
      position: relative;
      overflow: hidden;
      height: 0;
      padding-bottom: 56.25%;
      margin: $spacing-desktop 0;
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
    margin-left: $spacing-desktop;
    width: 300px;
    color: $light-gray;
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
    button {
      margin-bottom: 20px;
      &:last-of-type {
        margin-bottom: 0;
      };
    }
  }
}
</style>
