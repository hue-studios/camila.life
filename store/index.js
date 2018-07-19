import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: null,
      list: [],
      bag: [],
      recipes: [],
      backLink: false
    },
    mutations: {
      UPDATE_PAGE(state, pageName) {
        state.page = pageName
      },
      SET_BACKLINK (state, backLink) {
        state.backLink = backLink || false
      },
      SET_LISTITEMS (state, items) {
        state.list = items
      },
      SET_RECIPES (state, items) {
        state.recipes = items
      },
      SET_BAGITEMS (state, products) {
        state.bag = products
      },
      SET_LOADING_STATE (state, loading) {
      	state.loading = loading
      }
    },
    getters: {
      GET_PAGE: state => state.page,
      GET_BACKLINK: state => state.backLink,
      GET_LIST: state => state.list,
      GET_RECIPES: state => state.recipes,
      GET_BAG: state => state.bag
    },
    actions: {
      GET_LIST_ITEMS({commit}, data) {
        axios.get(`https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=` + data + `&filters[type][eq]=ingredient`)
        .then((response) => {
          commit('SET_LISTITEMS', response.data.data)
          commit('SET_LOADING_STATE', false)
          console.log("PRODUCTS FROM STORE "+ response.data.data.length)
        }).catch(e => {
          this.errors.push(e)
        })
      },
      GET_LIST_RECIPES({commit}, data) {
        axios.get(`https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=` + data + `&filters[type][eq]=recipe`)
        .then((response) => {
          commit('SET_RECIPES', response.data.data)
          commit('SET_LOADING_STATE', false)
          console.log("RECIPES FROM STORE "+ response.data.data)
        }).catch(e => {
          this.errors.push(e)
        })
      }
    }
  })
}

export default createStore
