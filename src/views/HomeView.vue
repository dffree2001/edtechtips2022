<template>
  <div class="home">
    <card-comp />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardComp from '@/components/CardComp.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    CardComp,
  },
});
</script>
