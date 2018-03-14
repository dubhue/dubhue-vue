<template lang="html">
  <article id="category" class="catpage">
    <div class="container-fluid">
      <h1>{{ catInfo.name }}</h1>
      <app-tile :name="'Project'" :array="activeProjects"></app-tile>
      </section>

    </div>
  </article>
</template>

<script>
import Tile from '@/components/Portfolio/Tile'
export default {
  data() {
    return {
      slug: this.$attrs.slug,
    }
  },
  created() {
    this.$store.commit('resetDropdown');
  },
  methods: {
    getProjects(slug) {
      this.$store.commit('setActiveProjects', slug);
    },
    getCurrentCat(slug) {
      this.$store.commit('setCurrentCat', slug);
    }
  },
  computed: {
    activeProjects() {
      this.getProjects(this.slug);
      return this.$store.state.activeProjects;
    },
    catInfo() {
      this.getCurrentCat(this.slug);
      return this.$store.state.currentCat;
    }
  },
  beforeRouteUpdate(to) {
    this.$store.commit('resetDropdown');
    this.slug = to.params.slug
  },
  components: {
    AppTile: Tile
  }
}
</script>

<style lang="scss">
@import "../../scss/custom/vars";
#category {
  color: $colVerm;
  text-align: left;
  font-weight: $coLight;
}
</style>
