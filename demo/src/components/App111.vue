<template>
  <div id="app">
    <!-- <router-view/> -->
    <div v-for="(i, index) in items" :style="{backgroundColor: getColor(i.type)}">
      {{i.text}}
      <span class="deleteIcon" style="cursor: pointer" @click="deleteItem(index)">X</span>
    </div>
  </div>
</template>


<script>
const items_raw = [
  {
    type: 1,
    text: 'item1'
  },
  {
    type: 2,
    text: 'item2'
  },
  {
    type: 2,
    text: 'item2'
  },
  {
    type: 2,
    text: 'item2'
  },
];

export default {
  methods: {
    getColor(type) {
      switch (type) {
        case 1:
          return 'black';
          break;
        case 2:
          return 'green';
          break;
        default:
          break;
      }
    },
    deleteItem(id) {
      this.items.splice(id, 1);
      console.log(items_raw)
    }
  },
  data() {
    return {
      items: [
        
      ]
    }
  },
  mounted() {
    this.items = JSON.parse(JSON.stringify(items_raw));
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  
}
</style>
