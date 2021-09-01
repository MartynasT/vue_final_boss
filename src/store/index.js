import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allGiveaways: [],
    singleGiveaway: {},
    sorted: [],
    giveawaysPerPage: [],
  },
  mutations: {
    updateAllGiveaways(state, payload){
      state.allGiveaways = payload
    },

    addSingleGiveaway(state, payload){
      state.singleGiveaway = payload
    },

    updateSorted(state, payload){
      state.sorted = payload
    },

    updateListsPerPage(state, payload){
      state.giveawaysPerPage = payload
    }

  },
  actions: {
    async getAllGiveawaysFromApi(context, payload){
      const resultFromApi = await fetch('http://167.99.138.67:4545/giveaways/all')
      context.commit('updateAllGiveaways', await resultFromApi.json())
      console.log('console.log 2', context.state.allGiveaways);
      await context.dispatch('getGiveawaysPerPage', payload)
    },

    async getSingleGiveawayFromApiById(context, payload){
      const resultFromApi = await fetch(`http://167.99.138.67:4545/giveaways/id/${payload}`)
      context.commit('addSingleGiveaway', await resultFromApi.json())
    },

    async getSortedGiveawaysFromApi(context, payload){
      const resultFromApi = await fetch(`http://167.99.138.67:4545/giveaways/sort/${payload.platform}/${payload.type}/${payload.sort}`)
      console.log(`http://167.99.138.67:4545/giveaways/sort/${payload.platform}/${payload.type}/${payload.sort}`)
      context.commit('updateSorted', await resultFromApi.json())
    },

    getGiveawaysPerPage({commit, state}, payload){
      const arrayToCut = state.allGiveaways;
      console.log('console.log 1 ',state.allGiveaways)

      const start = payload - 10;
      const end = payload
      const newArray = arrayToCut.slice(start, end)
      console.log('newArray ', newArray)


      commit('updateListsPerPage', newArray)
    }

  },
  modules: {
  }
})
