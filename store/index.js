import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: null,
      list: [],
      bag: [],
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
      GET_BAG: state => state.bag
    },
    actions: {
      GET_LIST_ITEMS({commit}, data) {
        axios.get(`https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=` + data)
        .then((response) => {
          commit('SET_LISTITEMS', response.data.data)
          commit('SET_LOADING_STATE', false)
          console.log("FROM STORE "+ response.data.data)
        }).catch(e => {
          this.errors.push(e)
        })
      }
    }
  })
}

export default createStore
