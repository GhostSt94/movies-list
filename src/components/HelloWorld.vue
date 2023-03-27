<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5 text-center">
        <h3>Movies/Séries search:</h3> 
        <input type="text" v-model="name" @keypress.enter="fetchMovies(name)" class="form-control">
      </div>
    </div>
    <div class="row mt-3">
      <div v-for="movie in getMovies" :key="movie.imdbID" class="col-md-3 col-sm-6 my-2">
        <Card :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "./Card.vue";
export default {
  name: 'HelloWorld',
  components:{
    Card
  },
  data(){
    return({
      name:''
    })
  },
  computed:mapGetters(['getMovies']),
  methods:mapActions(['fetchMovies'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
