<template lang="html">
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
  <router-link :to="{ name: 'Home', params: {} }" class="navbar-brand">dubhue</router-link>
  <app-hamburger></app-hamburger>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" :class="show">
    <ul class="navbar-nav mr-auto">
        <router-link :to="{ name: 'About', params: {} }" tag="li" active-class="active" class="nav-link"><a @click="test">About</a></router-link>
        <router-link :to="{ name: 'Portfolio', params: {} }" tag="li" active-class="active" class="nav-link"><a>Portfolio</a></router-link>
      <app-dropdown></app-dropdown>
    </ul>
    <!--<app-search></app-search>-->
  </div>
</nav>
  </header>
</template>

<script>
import Dropdown from "@/components/Header/Dropdown"
import Hamburger from "@/components/Header/Hamburger"
import Search from "@/components/Header/Search"

export default {
  components: {
    AppDropdown: Dropdown,
    AppHamburger: Hamburger,
    AppSearch: Search
  },
  computed: {
    show() {
      return this.$store.getters.getBurger ? 'show' : '';
    }
  },
  methods: {
    test(){
      console.log('test');
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/custom/vars';
#app .navbar-brand {
  font-weight: $coBold;
  font-family: $coHeadline;
  color: rgba($colRev,.95);
  letter-spacing: 2.5px;
  &:hover {
    color: rgba(darken($colRev,40),.75);
  }
}
</style>
