<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  sponsors: Array as PropType<SponsorCategory[]>
})

interface SponsorCategory {
  title: String,
  sponsors: String[],
}

</script>

<template>
<div v-for="s in sponsors" :key="s.title" class="container">
  <h2 class="sponsor_category_title"> {{s.title}} </h2>
  <div class="images_container">
    <div v-for=" im in s.sponsors" :key="im.id" class="image_container">
      <img :src="im"/>
    </div>
  </div>    
</div>
</template>

<style lang="scss" scoped>

  .container {
    padding: var(--indent-l);
    background: var(--color-white);
  }

  .sponsor_category_title {
    color: var(--theme-color);
    font-weight: 700;
    font-size: var(--font-size-l);
    line-height: var(--line-height-l);
    display: flex;
    justify-content: center;
  }

  .images_container {
    display: flex;
    justify-content: space-evenly;
  }

  .image_container {
    max-width: 22%;
  }

  img {
    width: 100%;
  }


</style>
