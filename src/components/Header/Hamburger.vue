<template lang="html">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" :aria-label="aria" :class="collapsed" @click="hamburger">
    <span class="navbar-toggler-icon"></span>
  </button>
</template>

<script>
export default {
  data() {
      return {
        //collapsed: 'collapsed',
        //aria: 'false',
      }
    },
    methods: {
      hamburger(){
        //this.collapsed = this.collapsed === 'collapsed' ? '' : 'collapsed';
        //this.aria = this.aria === 'false' ? 'true' : 'false';
        this.$store.commit('clickBurger');
        //console.log(this.$store.getters.getBurger);
      }
    },
    computed: {
      collapsed() {
        return this.$store.getters.getBurger ? '' : 'collapsed';
      },
      aria() {
        return this.$store.getters.getBurger ? 'true' : 'false';
      }
    }
  }
</script>

<style lang="css">
</style>
