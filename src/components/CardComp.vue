<template>
  <div class="card">
    <div class="card-header">{{ header }}</div>
    <img src="" alt="" class="card-img-top">
    <div class="card-body" >
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardComp',
  props: {
    msg: String,
    header: String,
  },
});
</script>

<style scoped>
 .card {
    width: 18rem;
 }
</style>
