<template>
  <div class="home container-fluid">
    <div class="row card-deck" style="display:flex; align-items: stretch;" >
      <div class="col-md-6 my-2"  >
        <card-comp header="Getting Started" :msg1='c1l1' :msg2='c1l2' :msg3='c1l3' :msg4='c1l4' />
      </div>
      <div class="col-md-6 my-2" >
        <card-comp header="Homeschool Help" :msg1='c2l1' :msg2="c2l2" :msg3='c2l3' :msg4='c2l4' />
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
  data() {
    return {
      c1l1: 'How do I get started?',
      c1l2: 'What are the requirements?',
      c1l3: 'Can someone else homeschool my child?',
      c1l4: 'State homeschool laws.',
      c2l1: 'Line1',
      c2l2: 'Line2',
      c2l3: 'Line3',
    };
  },
});
</script>

<style scoped>
.card-deck {
  flex-row: row wrap;
  display: flex;
}
</style>
