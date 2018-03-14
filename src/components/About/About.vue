<template lang="html">
  <div id="about">
    <div class="container-fluid">
      <div class="row">
        <div class="personal-statement about col-12 col-md-5">
          <span class="q-mark q-left">“</span>
          <span class="drop">I</span> have always had a well-balanced left-to-right brain ratio, allowing me to embrace both creativity and logic. As a graphic designer and web developer, I am able to meld my creativity to subtle structures and careful organization allowing me to adapt to any design situation—print, web and beyond. I show careful attention to detail, but my strong work ethic provides a solid framework for me to deliver projects on schedule. Beyond design, I create and enjoy music, love exploring the outdoors, and always have a camera in tow.
          <span class="q-mark q-right">”</span>
        </div>
        <div class="contact about col-12 col-md-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <h4>Peter Washington</h4>
            </li>
            <li class="nav-item">
              <h6>Designer / Developer</h6>
            </li>
            <li class="nav-item">
              <ul class="nav icons">
                <li><router-link :to="{ name: 'WebLink', params: {slug: 'resume', url: '/static/pdf/peter_washington_resume18-2.pdf'} }"><i class="dhl-vcard"></i></router-link></li>
                <li><a href="mailto:peterb@dubhue.com"><i class="dhl-mail"></i></a></li>
                <li><a href="https://www.linkedin.com/in/peter-washington-ba1340a9/" target="_blank"><i class="dhl-linkedin"></i></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fade from '@/components/Header/Fade'
export default {
  components: {
    AppFade: Fade
  },
  created() {
    this.$store.commit('resetBurger');
    this.$store.commit('resetDropdown');
  },
}
</script>

<style lang="scss">
@import '../../scss/custom/vars';
#about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - #{$headerHeight});
  background: $colRev;
  color: $colGrey;
  .about {
    padding: 2rem;
  }
  .personal-statement {
    text-align: left;
    font-family: 'Georgia', serif;
    color: darken($colGrey,10);
    position: relative;
    margin-left: 1.5rem;
    .drop {
      color: $colBlue;
      float: left;
      font-family: Georgia;
      font-size: 86px;
      line-height: 60px;
      padding-top: 6px;
      padding-right: 8px;
      padding-left: 3px;
    }
    .q-mark {
      $mark-size: 86px;
      position: absolute;
      color: rgba($colGrey,.6);
      &.q-left {
        left: 0;
        font-size: $mark-size;
        top: 0;
      }
      &.q-right {
        bottom: -3.5rem;
        right: 1.5rem;
        font-size: $mark-size;
      }
    }
  }
  .contact {
    display: flex;
    align-items: center;
    .nav {
      width: 100%;
    }
    h4 {
      color: $colBlue;
    }
  }
  .nav.icons {
    justify-content: center;
    i {
      padding: 1rem .5rem;
      font-size: 1.5rem;
      @include link2Color($colBlue,$colViol);
      cursor: pointer;
    }
  }
  .container-fluid {
    .row {
      justify-content: center;
    }
  }
}
</style>
