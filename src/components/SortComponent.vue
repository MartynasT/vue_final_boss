<template>
  <div>
    <h3>Sort</h3>
    <label for="type">Select type</label>
    <select name="" id="type" v-model="selectedType">
      <option
          v-for="(type, index) in types"
          :value="types[index]"
          :key="index"
      >{{type}}</option>
    </select>

    <label for="platform">Select platform</label>
    <select name="" id="platform" v-model="selectedPlatform">
      <option
          v-for="(platform, index) in platforms"
          :value="platforms[index]"
          :key="index"
      >{{platform}}</option>
    </select>

    <label for="sort">Sort</label>
    <select name="" id="sort" v-model="selectedSort">
      <option
          v-for="(sort, index) in sortBy"
          :value="sortBy[index]"
          :key="index"
      >{{sort}}</option>
    </select>

    <button @click="sortGiveaways">Let's sort</button>


    <h3>Selected Type: {{selectedType}}</h3>
    <h3>Selected Platform: {{selectedPlatform}}</h3>
    <h3>Selected Sort: {{selectedSort}}</h3>
  </div>
</template>

<script>
export default {
  name: 'SortComponent',
  data(){
    return{
      types: ["game", "loot", "beta"],
      platforms: ['pc', 'steam', 'epic-games-store', 'ubisoft', 'gog', 'itchio', 'ps4', 'xbox-one', 'switch', 'android', 'ios', 'vr', 'battlenet', 'origin', 'drm-free'],
      sortBy: ['date', 'value', 'popularity'],
      selectedType: '',
      selectedPlatform: '',
      selectedSort: '',
    }
  },
  methods: {
    sortGiveaways(){
      const sortObj = {
        platform: this.selectedPlatform,
        type: this.selectedType,
        sort: this.selectedSort
      }

      this.$store.dispatch('getSortedGiveawaysFromApi', sortObj)
    }
  }

}
</script>

<style scoped>

</style>