<template>
  <div id="app" :class="background">
    <router-view name="header-home"/>
    <router-view name="header-page"/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    background() {
      return this.$store.getters.getBackground;
    },
  },
  created() {
    this.$store.commit('setActiveCategories');
    this.$store.commit('setAlphaCategories');
  }
}
</script>

<style lang="scss">
@import './css/dubhue-light.css';
@import './scss/custom/vars';
@import './scss/custom/styles';
@import './scss/bootstrap';
#app {
  //font-family: 'co-text','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
  min-height: 100vh;
  div.page {
    background: $colRev;
    min-height: 90vh;
    width: 100%;
  }
}
.cyan-viol {
  @include dubhue($colCyan,$colViol);
}
.nav-link {
  &.active a {
    @include linkColor(rgba(0,0,0,.95),20);
  }
  a {
    @include linkColor(rgba(0,0,0,.5),20);
  }
}

// animations
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .8s ease;
}
.fade-leave {

}
.fade-leave-active {
  transition: opacity .4s ease;
  opacity: 0s;
}
</style>
