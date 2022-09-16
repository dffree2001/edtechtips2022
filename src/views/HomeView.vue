<template>
  <div class="home container">
    <div class="row">
      <div class="card-deck m-2">
        <card-comp msg="My message" header="Getting Started" />
        <card-comp msg="My message" header="Homeschooling" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardComp from "@/components/CardComp.vue";
// @ is an alias to /src
export default defineComponent({
  name: "HomeView",
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