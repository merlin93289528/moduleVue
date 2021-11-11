import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    booksList: []
  },
  getters: {
    getBooksList: (state) => state.booksList
  },
  mutations: {
    addNewBook(state, dataObj) {
      state.booksList.push({
        id: Date.now(),
        ...dataObj
      })
    },
    deleteOneBook(state , dataObj){
      state.booksList = state.booksList.filter(s => s.id !== dataObj.id)
    }
  },
  actions: {
    addBook({ commit }, data) {
      commit('addNewBook', data)
    },
    deleteBook({commit}, data){
      commit('deleteOneBook' , data)
    }


  },
  modules: {
  }
})
