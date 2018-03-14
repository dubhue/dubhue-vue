<template lang="html">
  <div id="home">
    <article class="home">
      <h1 id="main-title">dubhue</h1>
      <h5>Design / <span>Development</span></h5>
      <div class="button-box">
        <router-link :to="{ name: 'Portfolio', params: {} }" class="btn btn-outline-secondary">Portfolio</router-link>
        <router-link :to="{ name: 'About', params: {} }" class="btn btn-outline-secondary">About</router-link>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('resetBurger');
    this.$store.commit('resetDropdown');
  },
}
</script>

<style lang="scss">
@import '../scss/custom/vars';

#home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - #{$headerHeight});
  h5 {
    text-transform: uppercase;
    color: $colGrey;
    margin-bottom: 2rem;
    span {
      font-weight: bold;
    }
  }
}
#main-title {
  color: $colRev;
  font-weight: $coBold;
  font-family: $coHeadline;
  letter-spacing: 4.25px;
}
</style>
