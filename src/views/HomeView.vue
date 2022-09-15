<template>
  <div class="home">
    <div class="card-deck">
      <card-comp msg="My message" header="Getting Started" />
      <card-comp msg="My message" header="Getting Started" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CardComp from '@/components/CardComp.vue';
// @ is an alias to /src
export default defineComponent({
  name: 'HomeView',
  components: {
    CardComp,
  },
});
</script>
