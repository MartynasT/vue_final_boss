<template>
  <div>
    <div class="left">
      <img :src="singleGiveaway.thumbnail" alt="">
    </div>
    <div class="right">
      <h6>Status: {{singleGiveaway.status}}</h6>
      <h6>Type: {{singleGiveaway.type}}</h6>
      <h1>{{singleGiveaway.title}} | {{singleGiveaway.id}}</h1>
      <h2>Worth: {{singleGiveaway.worth}}</h2>
      <h4>Users: {{singleGiveaway.users}}</h4>

      <p class="desc">
        {{singleGiveaway.description}}
      </p>
      <h2>End date: {{singleGiveaway.end_date }}</h2>
      <a :href="singleGiveaway.gamerpower_url">Gamer power</a>

      <h3>Instructions:</h3>
      <p class="desc">
        {{singleGiveaway.instructions}}
      </p>
      <a :href="singleGiveaway.open_giveaway_url">Giveaway url</a>

      <h3>Platforms:</h3>
      <h3>{{singleGiveaway.platforms}}</h3>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleGiveawayComponent',
  created(){
    const giveawayId = this.$route.params.id
    this.$store.dispatch('getSingleGiveawayFromApiById', giveawayId);
  },
  computed:{
    singleGiveaway(){
      return this.$store.state.singleGiveaway
    }
  }
}
</script>

<style scoped>

</style>