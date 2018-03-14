<template lang="html">
  <div id="portfolio">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  created(){
    this.$store.commit('resetDropdown');
  }
}
</script>

<style lang="scss">
@import '../../scss/custom/vars';
#portfolio {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - #{$headerHeight});
  background: $colRev;
}
</style>
