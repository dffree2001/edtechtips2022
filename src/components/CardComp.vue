<template>
  <div class="card mx-auto mx-1 h-100" style="width: 100%;">
    <div class="card-header">{{ header }}</div>
    <img src="" alt="" class="card-img-top">
    <div class="card-body" >
      <ul>
        <li v-if="msg1" style="text-align: left">{{ msg1 }}</li>
        <li v-if="msg2" style="text-align: left">{{ msg2 }}</li>
        <li v-if="msg3" style="text-align: left">{{ msg3 }}</li>
        <li v-if="msg4" style="text-align: left">{{ msg4 }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardComp',
  props: {
    header: String,
    msg1: String,
    msg2: String,
    msg3: String,
    msg4: String,
  },
});
</script>

<style scoped>
 .card {
    width: 100%;
    margin-top: 50px;
 }
 .card-header {
      width: 80%;
      position: relative;
      top: -41px;
      margin: auto;
      background: lightblue;
    }
  .card-body {
    margin: -30px 0 -40px 0;
  }
</style>
