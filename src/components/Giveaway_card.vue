<template>
  <div @click="goToGiveaway(giveawayInfo.id)"  class="w-50 mb-5 p-2">
    <div :class="checkWorth" class="p-4">
      <img :src="giveawayInfo.thumbnail" alt="">
      <h3>{{giveawayInfo.title}}</h3>

      <h3>Platforms:</h3>
      <h4>{{giveawayInfo.platforms}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Giveaway_card',
  props: ['giveawayInfo'],
  methods:{
    goToGiveaway(id){
      this.$router.push(`/giveaway/${id}`);
    }
  },
  computed:{
    checkWorth(){
      const worthRaw = this.giveawayInfo.worth;
      const worth = worthRaw.split('$')[1]
      if (worth >= 10){
        return 'yellow'
      }else {
        return 'green'
      }
    }
  }
}
</script>

<style scoped>
  .green{
    background-color: rgba(27, 157, 127, 0.5);
  }
  .yellow{
    background-color: rgba(255, 249, 0, 0.5);
  }
</style>