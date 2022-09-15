<template>
  <div class="card" style="width: 18rem">
    <p>Card 1</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardComp',
  props: {
    msg: String,
  },
});
</script>
