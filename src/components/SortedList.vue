<template>
  <div>
    <h1>Sorted list</h1>
<!--    {{sortedGiveawaysList}}-->
    <Giveaway_card
        v-for="(giveaway, index) in sortedGiveawaysList"
        :key="index" :giveawayInfo="giveaway"
    />
  </div>
</template>

<script>
import Giveaway_card from '@/components/Giveaway_card'

export default {
  name: 'SortedList',
  components: { Giveaway_card },
  computed:{
    sortedGiveawaysList(){
      return this.$store.state.sorted;
    }
  }
}
</script>

<style scoped>

</style>