<template lang="html">
  <article id="project">
    <div class="container-fluid">
      <div class="row">
        <section class="gallery col-sm-12 col-md-7 col-lg-8">
          <img src="/static/img/projects/projbg.jpg" class="project-bg" alt="Project Background">
          <template v-if="current.gallery.length === 0">
            <img :src="'/static/img/projects/placeholder.png'" alt="Placeholder Image" class="project-single">
          </template>
          <template v-else>
            <template v-if="current.gallery.length > 1">
              <div class="slider">
                <!--<button class="btn btn-outline-primary prev" @click="sliderPrev">--><i class="dhl-left-open-big prev" @click="sliderPrev"></i><!--</button>-->
                <transition name="slidefade" mode="out-in">
                  <img :src="'/static/img/projects/'+slug+'/'+current.gallery[sliderCurrent].file" :alt="current.gallery[sliderCurrent].alt">
                </transition>
                <!--<button class="btn btn-outline-primary next" @click="sliderNext">--><i class="dhl-right-open-big next" @click="sliderNext"></i><!--</button>-->
              </div>
            </template>
            <template v-else>
              <img :key="current.gallery[0].file" :src="'/static/img/projects/'+slug+'/'+current.gallery[0].file" :alt="current.gallery[0].alt" class="project-single">
            </template>
          </template>
        </section>
        <section class="text col-sm-12 col-md-5 col-lg-4">
          <h4 class="project-title">{{current.name}}</h4>
          <h6 class="project-sub">{{current.sub}}</h6>
          <div class="desc" v-html="current.description"></div>
          <template v-if="current.links">
            <div class="links">
              <div v-for="link in current.links" class="link">
                <strong>{{ link.title }}</strong>
                <!--<a :href="link.url">{{ link.url }}</a>-->
                <router-link :to="{ name: 'WebLink', params: {slug: current.slug, url: link.url} }">{{ link.url }}</router-link>
              </div>
            </div>
          </template>
        </section>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
        slug: this.$attrs.slug,
        sliderCurrent: 0,
    }
  },
  created() {
    this.$store.commit('resetDropdown');
  },
  methods: {
    getProject(slug) {
      this.$store.commit('setCurrentProject', slug);
    },
    sliderNext() {
      this.sliderCurrent = ((this.current.gallery.length - 1) >= (this.sliderCurrent + 1)) ? this.sliderCurrent + 1 : 0;
    },
    sliderPrev() {
      this.sliderCurrent = (1 <= this.sliderCurrent) ? (this.sliderCurrent - 1) : (this.current.gallery.length - 1);
    }
  },
  computed: {
    current() {
      //console.log(this.slug);
      this.getProject(this.slug);
      return this.$store.state.currentProject;
    }
  }
}
</script>

<style lang="scss">
@import "../../scss/custom/vars";
#project {
  padding: 1rem;
  .project-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .project-single {
    position: relative;
    z-index: 2;
  }
  .slider {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 10;
    button {
      position: absolute;
      &.prev {
        left: 2rem;
      }
      &.next {
        right: 2rem;
      }
    }
    i {
      position: absolute;
      font-size: 4rem;
      @include link2Color(rgba($colGrey,.6),rgba($colGrey,.8));
      @include mediaMax(640px){
        font-size: 2rem;
      }
      &.prev {
        left: 2rem;
      }
      &.next {
        right: 2rem;
      }
    }
  }
  .gallery {
    padding-left: 0;
    padding-right: 0;
    img {
      width: 100%;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
    //align-items: center;
    .desc, .project-title, .project-sub {
      text-align: left;
      color: darken($colGrey,10);
    }
    .project-sub {
      color: $colBlue;
    }
    .desc {
      font-family: 'Georgia', serif;
      color: $colGrey;
    }
  }
  .links {
    padding: 1rem 0;
  }
  .link {
    text-align: left;
    display: flex;
    flex-direction: column;
    strong {
      color: darken($colGrey,10);
    }
  }
}
.slidefade-enter {
  opacity: 0;
}
.slidefade-enter-active {
  transition: opacity .8s ease;
}
.slidefade-leave {

}
.slidefade-leave-active {
  transition: opacity .4s ease;
  opacity: 0s;
}
</style>
