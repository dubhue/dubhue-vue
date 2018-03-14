<template lang="html">
  <header>
    <nav class="navbar navbar-light">
      <!--<a class="navbar-brand navbar-left" href="#">dubhue</a>-->
      <a class="navbar-brand hidden">.</a>
  <app-hamburger></app-hamburger>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" :class="show">
    <ul class="navbar-nav mr-auto">
      <app-dropdown></app-dropdown>
    </ul>
    <!--<app-search></app-search>-->
  </div>
</nav>
  </header>
</template>

<script>
import Hamburger from '@/components/Header/Hamburger'
import Dropdown from '@/components/Header/Dropdown'
import Search from '@/components/Header/Search'
export default {
  components: {
    AppHamburger: Hamburger,
    AppDropdown: Dropdown,
    AppSearch: Search
  },
  computed: {
    show() {
      return this.$store.getters.getBurger ? 'show' : '';
    }
  },
}
</script>

<style lang="scss">
.navbar-brand {
  &.hidden {
    visibility: hidden;
  }
}
</style>
