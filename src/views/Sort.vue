<template>
  <div>
    <h1>Sort Giveaways</h1>
    <SortComponent />
    <SortedList />
  </div>
</template>

<script>

import SortComponent from '@/components/SortComponent'
import SortedList from '@/components/SortedList'

export default {
  name: 'Sort',
  components: { SortedList, SortComponent },
}
</script>

<style scoped>

</style>