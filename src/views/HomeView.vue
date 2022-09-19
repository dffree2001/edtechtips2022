<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-md-6">
        <card-comp msg="My message" header="Getting Started" />
      </div>
     <div class="col-md-6">
        <card-comp msg="My message" header="Getting Started" />
      </div>
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

<style scoped>
.card-deck {
  flex-row: row wrap;
  display: flex;
}
</style>
