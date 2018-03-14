<template lang="html">
  <div id="404">
    <app-header></app-header>
    <div class="container">
      <div class="oops">
        <h1>Oops! <span>This page was not found.</span></h1>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/HeaderPage'
export default {
  components: {
    AppHeader: Header
  }
}
</script>

<style lang="scss">
@import "../scss/custom/vars";
@import "../scss/bootstrap";
.oops {
  height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: $colRev;
    span {
      color: lighten($colGrey,40);
    }
  }
}
</style>
