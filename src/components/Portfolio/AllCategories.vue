<template lang="html">
  <article id="categories" class="catpage">
    <div class="container-fluid">
      <app-tile :name="'Category'" :array="categories"></app-tile>
    </div>
  </article>
</template>

<script>
import Tile from '@/components/Portfolio/Tile'
export default {
  computed: {
    categories(){
      return this.$store.getters.getAlphaCategories;
    },
  },
  methods: {

  },
  created() {
    this.$store.commit('resetBurger');
  },
  components: {
    AppTile: Tile
  }
}
</script>

<style lang="scss">
@import '../../scss/custom/vars';
#categories {

}
</style>
