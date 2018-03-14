<template lang="html">
  <div id="weblink">
    <div id="iframe-wrap">
      <iframe v-if="loaded" :src="iframe.src" :style="iframe.style" :height="iframe.style.height" :width="iframe.style.width" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      //slug: this.$attrs.slug,
      //url: this.$attrs.url,
      iframe: {
        src: this.$attrs.url,
        style: null,
        wrapperStyle: null
      }
    }
  },
  methods: {
    /*getProject(slug) {
      this.$store.commit('setCurrentProject', slug);
    },*/
  },
  computed: {
    /*current() {
      this.getProject(this.slug);
      return this.$store.state.currentProject;
    }*/
  },
  mounted() {
    let editor = this.$refs.editor;
    this.iframe.style = {
      position: 'absolute',
      width: window.innerWidth,
      height: window.innerHeight,
      top: 56+'px',
      left: 0,
      //top: -editor.offsetTop + "px",
      //left: -editor.offsetLeft + "px",
    }
    this.iframe.wrapperStyle = {
      overflow: 'hidden',
      //height: editor.clientHeight + "px",
      //width: editor.clientWidth + "px",
    }
    this.loaded = true;
  }
}
</script>

<style lang="scss">

</style>
