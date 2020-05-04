<template>
  <div class="container">
    <AppHeader
      category="Our Agency"
      color="red" />
    <hero
      color="red"
      category="Our Agency"
      image="/images/nature-6.svg"
      title="RANGER is a full-service digital agency working at the intersection of design and engineering. We believe that the best user-experiences come from a balance of experimentation, structure, innovation, prototyping, and exploring the fringe of emergent technology."
      subtitle="Located in New York City and New Haven, our multidisciplinary agency engages with clients around the world. We provide the creative and technical solutions essential to your project’s immediate success and long-term scalability." />

    <div id="mc_embed_signup" v-if="newsletter">
      <form action="https://getdirectus.us2.list-manage.com/subscribe/post?u=a0f804569c706d5fd9bb7281e&amp;id=a62e578439" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <div class="mc-field-group">
            <!-- <label for="mce-EMAIL" class="h3">Enter your email address:</label> -->
            <input type="email" value="" placeholder="Email address..." name="EMAIL" class="required email h3" id="mce-EMAIL">
          </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div><!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a0f804569c706d5fd9bb7281e_a62e578439" tabindex="-1" value=""></div>
          <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button h4"></div>
          <div class="close h4" @click="toggleNewsletter">Close</div>
        </div>
      </form>
    </div>

    <section class="max-width">
      <div class="grid contact">
        <a href="mailto:info@rangerstudio.com" target="_blank">
          <h2>Email</h2>
          <h4>Info@rngr.org</h4>
        </a>
        <a href="tel:1-224-444-9666" target="_blank">
          <h2>Phone</h2>
          <h4>+1 224-444-9666</h4>
        </a>
        <a href="https://twitter.com/ranger" target="_blank">
          <h2>Twitter</h2>
          <h4>@ranger</h4>
        </a>
        <a class="newsletter-button" @click="toggleNewsletter">
          <h2>Newsletter</h2>
          <h4>Subscribe</h4>
        </a>
      </div>
    </section>
    <hr />
    <section class="max-width">
      <h2 class="heading">Brooklyn &amp; New Haven</h2>
      <div class="grid">
        <module color="#607D8B" title="Brooklyn" subtitle="2014" image="/images/office-lounge-optimized.jpg" url="/images/office-lounge-optimized.jpg" target="_blank" :large="true" />
        <module color="#607D8B" title="Brooklyn" subtitle="2013" image="/images/office-mural-optimized.jpg" url="/images/office-mural-optimized.jpg" target="_blank" />
        <module color="#607D8B" title="Brooklyn" subtitle="2012" image="/images/office-survival-optimized.jpg" url="/images/office-survival-optimized.jpg" target="_blank" />
        <module color="#607D8B" title="Brooklyn" subtitle="2018" image="/images/office-greenpoint-desks.jpg" url="/images/office-greenpoint-desks.jpg" target="_blank" />
        <module color="#607D8B" title="Brooklyn" subtitle="2015" image="/images/office-lounge-open-optimized.jpg" url="/images/office-lounge-open-optimized.jpg" target="_blank" />
        <module color="#607D8B" title="Brooklyn" subtitle="2017" image="/images/office-greenpoint-optimized.jpg" url="/images/office-greenpoint-optimized.jpg" target="_blank" />
        <module color="#607D8B" title="Brooklyn" subtitle="2019" image="/images/office-greenpoint-board.jpg" url="/images/office-greenpoint-board.jpg" target="_blank" />
        <module color="#607D8B" title="Brooklyn" subtitle="2018" image="/images/office-greenpoint-lounge.jpg" url="/images/office-greenpoint-lounge.jpg" target="_blank" />
        <module color="#607D8B" title="Brooklyn" subtitle="2018" image="/images/office-greenpoint-shirts.jpg" url="/images/office-greenpoint-shirts.jpg" target="_blank" />
      </div>
    </section>
    <section class="max-width-small">
      <a name="services" />
      <h2 class="heading">Agency Services</h2>
      <div class="text">
        <div>
          <div class="icon">
            <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.26 6.5l-.01-.02a39.5 39.5 0 0 1-5.3 6.47 39.47 39.47 0 0 1-6.47 5.3h.01c-.73.47-3.75 2.2-4.35 1.61-.21-.21-.12-1.61 1.6-4.34.35.55.75 1.07 1.22 1.53.66-.4 1.36-.9 2.07-1.43a6.08 6.08 0 1 1 8.58-8.58c.54-.72 1.03-1.42 1.44-2.08a8.58 8.58 0 0 0-1.53-1.2c2.72-1.74 4.12-1.83 4.34-1.61.59.59-1.14 3.62-1.6 4.34M11.12 17.1a47.9 47.9 0 0 0 5.98-5.97 6.1 6.1 0 0 1-5.98 5.97M21.15.85c-1.57-1.58-4.88.1-7.59 2A8.56 8.56 0 0 0 2.83 13.57c-1.88 2.7-3.56 6-1.98 7.58.4.41.96.62 1.65.62 1.88 0 4.4-1.55 5.95-2.62a8.57 8.57 0 0 0 10.7-10.7c1.4-2.02 3.74-5.87 2-7.61" fill="#F44336" fill-rule="evenodd"/>
            </svg>
          </div>
          <h4>Discovery & Strategy</h4>
          <p>Our technical and creative teams work closely together, developing a granular timeline and systematic approach for the project. Focusing our research on the unique user journey, we determine how features should be prioritized and how the experience should be shaped.</p>
        </div>
        <div>
          <div class="icon">
            <svg width="24" height="19" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.219 16.368l-2.972-5.2L12.414 6h8.172L10.219 16.368zm5.93.633h-3.735l1.66-1.66L16.15 17zM3.082 5L5 2.6v2.4H3.08zm7.599-.093L7 8.587V2h1.5l2.18 2.907zm13.244-.29A.999.999 0 0 0 23 4H12.5L9.8.4A.998.998 0 0 0 9 0H5c-.303 0-.591.139-.78.375l-4 5A.998.998 0 0 0 1 7h4v4c0 .174.046.345.132.496l4 7A1 1 0 0 0 10 19h9a1 1 0 0 0 .625-1.781l-4.128-3.302 8.21-8.211a.996.996 0 0 0 .217-1.09z" fill="#F44336" fill-rule="evenodd"/>
            </svg>
          </div>
          <h4>Brand &amp; Identity</h4>
          <p>Every product or service has a unique personality, purpose, ethos, demographic, and story. We coalesce all these different facets into an identity that effortlessly communicates everything at once. We can help with your brand's logo, design-system, business cards, and more.</p>
        </div>
        <div>
          <div class="icon">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-2.816-2H5.815A2.993 2.993 0 0 0 4 14.185V5.816a2.993 2.993 0 0 0 1.815-1.815h8.37A2.989 2.989 0 0 0 16 5.816v8.368a2.997 2.997 0 0 0-1.816 1.817M3 18A1 1 0 1 1 3 16a1 1 0 0 1 0 2M3 2a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2m14 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1 12.183V5.816a2.995 2.995 0 0 0 2-2.815c0-1.654-1.346-3-3-3a2.996 2.996 0 0 0-2.816 2H5.815A2.993 2.993 0 0 0 3 0C1.346 0 0 1.347 0 3c0 1.301.838 2.402 2 2.815v8.368a2.997 2.997 0 0 0-2 2.817c0 1.654 1.346 3 3 3a2.993 2.993 0 0 0 2.815-2h8.37A2.993 2.993 0 0 0 17 20c1.654 0 3-1.346 3-3a2.997 2.997 0 0 0-2-2.817" fill="#F44336" fill-rule="evenodd"/>
            </svg>
          </div>
          <h4>User Experience</h4>
          <p>Once we have a complete understanding of the project’s requirements, we create an information architecture that will serve as a blueprint for the project’s data model. We also draft wireframes for a natural application flow for users and ensure an ideal user experience.</p>
        </div>
        <div>
          <div class="icon">
            <svg width="18" height="22" xmlns="http://www.w3.org/2000/svg">
            <g fill="#F44336" fill-rule="evenodd">
              <path d="M2 7V6a1 1 0 0 1 2 0v1H2zm2 9.7l-1 1.5-1-1.5V9h2v7.7zM3 3a3 3 0 0 0-3 3v11.3l3 4.5 3-4.5V6a3 3 0 0 0-3-3z"/>
              <path d="M10 20v-3h3v-2h-3v-3h3v-2h-3V7h3V5h-3V2h6v18h-6zm6-20h-6a2 2 0 0 0-2 2v18c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            </g>
            </svg>
          </div>
          <h4>Creative Design</h4>
          <p>We establish a visual design systems specifically tailored to our projects, never starting from existing or pre-made templates. Along the way, our engineers offer insight into progressive enhancements, emergent trends, and limitations of legacy technologies.</p>
        </div>
        <div>
          <div class="icon">
            <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.73 0L9.4 1.69 3.3 7.78l6.11 6.11-1.66 1.64L0 7.75 7.73 0zm6.86 1.69L16.27 0 24 7.75l-7.75 7.78-1.66-1.64 6.11-6.11-6.11-6.1z" fill="#F44336" fill-rule="evenodd"/>
            </svg>
          </div>
          <h4>Development</h4>
          <p>The full spectrum, all done using modern technologies and best-practices. Front-end development, client-side scripting, data scraping, server-side engineering, DevOps, system-administration, and everything else. As needed, prototypes are generated for proof-of-concept.</p>
        </div>
        <div>
          <div class="icon">
            <svg width="16" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.08 10H7a1 1 0 0 1 1 1v5.15L12.92 10H9a1 1 0 0 1-1-1V3.85L3.08 10zM7 20a1 1 0 0 1-1-1v-7H1a1.002 1.002 0 0 1-.78-1.625l8-10A.999.999 0 0 1 10 1v7h5a1.002 1.002 0 0 1 .78 1.625l-8 10A.998.998 0 0 1 7 20z" fill="#F44336" fill-rule="evenodd"/>
            </svg>
          </div>
          <h4>Rapid Prototyping</h4>
          <p>Our hybrid workflow allows us to take on truly expeditious projects that others can not. Our team can combine design and development to deliver digital mockups, click-through presentations, and functional prototypes in just a matter of days or weeks depending on scope.</p>
        </div>
        <div>
          <div class="icon">
            <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 10c-4.55 0-7-1.42-7-2V6.6C3.74 7.52 6.37 8 9 8s5.26-.48 7-1.4V8c0 .58-2.45 2-7 2m0 4c-4.55 0-7-1.42-7-2v-1.4c1.74.92 4.37 1.4 7 1.4s5.26-.48 7-1.4V12c0 .58-2.45 2-7 2m0 4c-4.55 0-7-1.42-7-2v-1.4c1.74.92 4.37 1.4 7 1.4s5.26-.48 7-1.4V16c0 .58-2.45 2-7 2M9 2c4.55 0 7 1.42 7 2 0 .58-2.45 2-7 2S2 4.58 2 4c0-.58 2.45-2 7-2m0-2C4.53 0 0 1.37 0 4v12c0 2.63 4.53 4 9 4s9-1.37 9-4V4c0-2.63-4.53-4-9-4" fill="#F44336" fill-rule="evenodd"/>
            </svg>
          </div>
          <h4>Data Modeling</h4>
          <p>We believe a data-first approach is the best way to "future-proof" digital products and services. That is why we architect well-organized agnostic data as the foundation for each application we build. This allows our clients to quickly scale without sacrificing stability. </p>
        </div>
        <div>
          <div class="icon">
            <svg width="20" height="13" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 11h-4V7h4v4zM8 2h4v9H8V2zM2 6h4v5H2V6zm17-1h-5V1c0-.551-.448-1-1-1H7c-.552 0-1 .449-1 1v3H1c-.552 0-1 .449-1 1v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6c0-.551-.448-1-1-1z" fill="#F44336" fill-rule="evenodd"/>
            </svg>
          </div>
          <h4>Analytics &amp; Optimization</h4>
          <p>A project's release does not conclude our engagement. We value our long-term clients and they value the ongoing insight and incremental improvements we provide post-launch. Once a project is out in the wild you can distill huge data-sets of usage metrics and adjust as needed.</p>
        </div>

      </div>
    </section>
    <a name="leadership" />
    <h2 class="heading">Leadership</h2>
    <break
      title="Ben Haynes"
      subtitle="Founder, Director of Technology"
      text="With a degree in communication-design and a background of over 20 years in web development, Ben has equal footing in the creative and technical realms. Since founding RANGER Studio, he has forefronted the unification of design and development as the guiding ethos that drives the company’s success."
      link="View LinkedIn"
      url="https://www.linkedin.com/in/contactbenhaynes/"
      target="_blank"
      image="/images/ranger-ben-small.jpg"
      :reverse="true"
      color="red" />
    <section class="max-width">
      <a name="partners" />
      <h2 class="heading">Partner Agencies</h2>
      <div class="grid">
        <module color="#607D8B" title="2×4" subtitle="Since 2011" url="https://2x4.org/" target="_blank"><twobyfour /></module>
        <module color="#000000" title="Avec" subtitle="Since 2011" url="http://www.avec.us/" target="_blank"><avec /></module>
        <module color="#009688" title="Celery Design" subtitle="Since 2011" url="http://www.celerydesign.com/" target="_blank"><celery /></module>
        <module title="Google Creative Lab" subtitle="Since 2011" url="https://about.google" target="_blank"><google /></module>
        <module color="#000000" title="Gretel" subtitle="Since 2019" url="https://gretelny.com/" target="_blank"><gretel /></module>
        <module color="#FFEB3B" title="IDEO" subtitle="Since 2012" url="https://www.ideo.com/" target="_blank"><ideo /></module>
        <module color="#F44336" title="Interbrand" subtitle="Since 2013" url="https://www.interbrand.com/" target="_blank"><interbrand /></module>
        <module color="#734AD6" title="Monospace" subtitle="Since 2020" url="https://monospace.io/" target="_blank"><monospace /></module>
        <module color="#F44336" title="Pentagram" subtitle="Since 2012" url="https://www.pentagram.com/" target="_blank"><pentagram /></module>
        <module color="#607D8B" title="Project Projects" subtitle="Since 2011" url="http://www.projectprojects.com/" target="_blank"><projectprojects /></module>
        <module color="#F44336" title="PS212" subtitle="Since 2018" url="https://www.ps212.com/" target="_blank"><ps212 /></module>
        <module color="#FFEB3B" title="Wolff Olins" subtitle="Since 2011" url="https://www.wolffolins.com/" target="_blank"><wolffolins /></module>
      </div>
    </section>
    <hr />
    <section class="max-width">
      <a name="opportunities" />
      <h2 class="heading">Opportunities</h2>
      <div class="careers">
        <div class="career">
          <h3>Front-End Developer</h3>
          We are looking for a motivated front-end web developer to join our growing team. Developers will be responsible for building web standards compliant code and work with back-end developers for integration. Be sure to include your resume and links to projects and/or portfolios when applying to this position.
          <ul v-if="career1">
            <li>3+ years experience in web development</li>
            <li>Expert knowledge of HTML, CSS, Javascript, and Javascript frameworks</li>
            <li>Working knowledge of developing for cross browser compatibility</li>
            <li>Working experience with versioning control software (SVN, Git)</li>
            <li>Familiarity with web standards and best practices</li>
            <li>Familiarity with PHP, Wordpress, Drupal, or Python</li>
            <li>Knowledge of Section 508 compliancy</li>
            <li>Knowledge of SEO best practices</li>
            <li>Effective communication skills</li>
            <li>Ability to work and interact with project team</li>
            <li>HTML5, CSS3, and mobile web experience a plus</li>
          </ul>
          <div class="links">
            <span class="requirements" @click="toggleCareer1">Requirements</span> or <a href="mailto:jobs@rngr.org?subject=Internship">Apply</a>
          </div>
        </div>
        <div class="career">
          <h3>Back-End Developer</h3>
          We are looking for a motivated PHP developer to join our growing team. Developers will be responsible for building websites to meet project specifications and expectations. Developers will work alongside interactive designers, front-end developers, and project managers. Be sure to include your resume and links to projects and/or portfolios when applying to this position.
          <ul v-if="career2">
            <li>3+ years experience in web development</li>
            <li>Expert knowledge of PHP, HTML, CSS, Javascript, and Javascript frameworks</li>
            <li>Expert knowledge of OOP concepts</li>
            <li>Strong knowledge of MySQL and relational database design</li>
            <li>Strong experience with open–source content management frameworks (Drupal, Wordpress, Directus)</li>
            <li>Experience with management and maintenance of LAMP server environments</li>
            <li>Effective communication skills</li>
            <li>Ability to work and interact with project team</li>
            <li>Excellent problem solving skills</li>
            <li>Design experience a plus</li>
            <li>Computer science degree preferred</li>
          </ul>
          <div class="links">
            <span class="requirements" @click="toggleCareer2">Requirements</span> or <a href="mailto:jobs@rngr.org?subject=Internship">Apply</a>
          </div>
        </div>
        <div class="career">
          <h3>Interaction Designer</h3>
          We are looking for a motivated interaction designer to join our growing team. Designers will be responsible for conceptualizing, creating, and refining interface solutions for websites and work alongside developers and project managers. Be sure to include your resume and links to projects and/or portfolios when applying to this position.
          <ul v-if="career3">
            <li>3+ years of interactive experience</li>
            <li>Strong conceptual thinking</li>
            <li>Excellent design and typography skills</li>
            <li>The ability to follow a design brief and adhere to brand standards</li>
            <li>Proven commercial experience in an interactive design position</li>
            <li>Proficient in Sketch, Photoshop, Illustrator, and Indesign</li>
            <li>Effective communication skills</li>
            <li>Ability to work and interact with project team</li>
            <li>HTML, CSS, and Javascript knowledge a plus</li>
            <li>Duration is 3–4 months with the possibility of extension</li>
          </ul>
          <div class="links">
            <span class="requirements" @click="toggleCareer3">Requirements</span> or <a href="mailto:jobs@rngr.org?subject=Internship">Apply</a>
          </div>
        </div>
        <div class="career">
          <h3>Internship</h3>
          We are looking for passionate students looking to gain experience working on mid-sized web projects. Individuals would be responsible for aiding in the design and creation of websites and would work alongside RANGER designers, developers, and project managers. Be sure to include your resume and links to projects and/or portfolios when applying to this position.
          <ul v-if="career4">
            <li>Exceptional portfolio</li>
            <li>Strong conceptual thinking</li>
            <li>Design: Outstanding design and typography skills</li>
            <li>Dev: Outstanding PHP, MySQL, HTML, CSS, and/or JS knowledge</li>
            <li>The ability to follow a design brief and adhere to brand standards</li>
            <li>Proficient in Sketch, Photoshop, Illustrator, and Indesign</li>
            <li>Effective communication skills</li>
            <li>Ability to work and interact with project team</li>
          </ul>
          <div class="links">
            <span class="requirements" @click="toggleCareer4">Requirements</span> or <a href="mailto:jobs@rngr.org?subject=Internship">Apply</a>
          </div>
        </div>
      </div>
    </section>
    <hr />
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
  },
  data() {
    return {
      newsletter: false,
      career1: false,
      career2: false,
      career3: false,
      career4: false
    }
  },
  methods: {
    toggleNewsletter() {
      this.newsletter = !this.newsletter;
    },
    toggleCareer1() {
      this.career1 = !this.career1;
    },
    toggleCareer2() {
      this.career2 = !this.career2;
    },
    toggleCareer3() {
      this.career3 = !this.career3;
    },
    toggleCareer4() {
      this.career4 = !this.career4;
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';
.newsletter-button {
  cursor: pointer;
}
#mc_embed_signup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 20;
  #mc_embed_signup_scroll {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    margin-left: -200px;
    margin-top: -100px;
    input {
      width: 100%;
      margin-top: 20px;
      padding: 10px 15px 15px;
      outline: none;
      border: 1px solid $lighter-gray;
      border-radius: 3px;
    }
    input[type=submit] {
      background-color: $darkest-gray;
      color: $white;
      border: none;
      // margin-top: 15px;
      padding: 10px 15px 10px;
      height: auto;
    }
    .close {
      margin-top: 15px;
      text-align: center;
      color: $gray;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color: $darker-gray;
      }
    }
  }
}

.careers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 $spacing-desktop $spacing-desktop;
  .career {
    width: calc((100% - 40px) / 2);
    padding: $spacing-desktop;
    h3 {
      margin-bottom: 10px;
    }
    ul {
      margin: 20px 0 0 0;
      font-size: 14px;
      color: $gray;
      padding-left: 20px;
    }
    .links {
      margin-top: 20px;
      .requirements {
        cursor: pointer;
        color: $red;
      }
      a {
        color: $red;
      }
    }
  }
  @media (max-width: $breakpoint-m) {
    .career {
      width: 100%;
      padding: $spacing-desktop 0;
    }
  }
}
</style>
