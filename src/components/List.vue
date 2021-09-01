<template>
  <div >
    <div class="flex flex-wrap">
      <Giveaway_card
          v-for="(giveaway, index) in allGiveaways"
          :key="index" :giveawayInfo="giveaway"
      />
    </div>

    <div class="pagination">
      <span
        v-for="(page, index) in pages"
        :key="index"
        :class="[
            (page === 1 ? 'pagination-first' : page === pages ? 'pagination-last': ''),
             $route.params.page == page ? 'active' : '']"
        @click="goToPage(page)"

      >
      {{(page === 1 ? 'First' : page === pages ? 'Last': page)}}

      </span>
    </div>
  </div>
</template>

<script>
import Giveaway_card from '@/components/Giveaway_card'

export default {
  name: 'List',
  components: {
    Giveaway_card,
  },
  computed:{

    allGiveaways(){
      return this.$store.state.giveawaysPerPage
    },

    paginationCount(){
      return this.$store.state.allGiveaways
    },

    pages(){
      return Math.ceil(this.paginationCount.length / 10 )
    },

    page(){
      return this.$route.params.page
    },
  },

  methods:{
    goToPage(page){
      let count = page * 10
      this.$store.dispatch('getGiveawaysPerPage', count)
      this.$router.push(`/page/${page}`)
    }
  },
  watch: {
    page: function (value){
      let count = 10;

      if (value){
        count = value * 10
      }
      this.$store.dispatch('getGiveawaysPerPage', count)
    }

  }
}
</script>

<style scoped>

</style>