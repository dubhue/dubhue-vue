<template lang="html">
    <div class="row tiles">
      <router-link v-for="a in array" :to="{ name: name, params: {slug: a.slug} }" class="col-12 col-md-6 col-xl-4 tile" :key="a.slug">
        <div class="tile-wrap">
            <img :src="'/static/img/projects/gradbg.jpg'" alt="Placeholder Image" class="tile-bg">
          <template v-if="name === 'Category'">
            <img v-if="a.image" :src="'/static/img/categories/'+a.image" :alt="a.name" class="tile-img">
            <img v-else :src="'/static/img/projects/placeholder.png'" alt="Placeholder Image" class="tile-img">
          </template>
          <template v-else>
            <img v-if="a.gallery.length > 0" :src="'/static/img/projects/'+a.slug+'/'+a.gallery[0].file" :alt="a.gallery[0].alt" class="tile-img">
            <img v-else :src="'/static/img/projects/placeholder.png'" alt="Placeholder Image" class="tile-img">
          </template>
          <div class="tile-cover"></div>
          <div class="tile-gradient"></div>
          <div class="tile-content">
            <h6 class="tile-title">{{ a.name }}</h6>
          </div>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  props: [
    'array',
    'name'
  ]
}
</script>

<style lang="css">
</style>
