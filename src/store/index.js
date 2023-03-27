import Vuex from 'vuex'
import axios from 'axios'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      movies:[],
      series:[]
    },
    getters:{
        getMovies:state=>state.movies
    },
    actions: {
      async fetchMovies ({commit},name) {
        const res=await axios.get('https://www.omdbapi.com/?apikey=a1f031cd&s='+name)
        commit('initMovies',res.data.Search)
      }
    },
    mutations:{
        initMovies:(state,movies)=>state.movies=movies
    }
  })

  export default store