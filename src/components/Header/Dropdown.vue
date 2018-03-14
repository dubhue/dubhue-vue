<template lang="html">
  <li class="nav-item dropdown">
    <div class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="aria" @click="dropdown" :class="show">
      Categories
    </div>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown" :class="show">
      <router-link v-for="cat in cats" :to="{ name: 'Category', params: { slug: cat.slug, name: cat.name } }" class="dropdown-item" :key="cat.slug" active-class="active">{{ cat.name }}</router-link>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    dropdown(){
      this.$store.commit('clickDropown');
    }
  },
  computed: {
    show() {
      return this.$store.state.dropdown ? 'show' : '';
    },
    aria() {
      return this.$store.state.dropdown ? 'true' : 'false';
    },
    cats() {
      return this.$store.getters.getAlphaCategories;
    }
  }
}
</script>

<style lang="scss">
.dropdown {
  &:hover {
    cursor: pointer;
  }
}
</style>
