export const state = () => ({
  user: null,
  backLink: null,
  listItems: 0
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user || null
  },
  SET_BACKLINK (state, backLink) {
    state.backLink = backLink || null
  },
  SET_LISTITEMS (state, listItems) {
    state.listItems = listItems || null
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  },
  loggedUser (state) {
    return state.user
  }
}
