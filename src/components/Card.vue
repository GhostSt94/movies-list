<template>
  <div class="card shadow">
          <img :src='movie.Poster' class="card-img-top" :alt="movie.Title" height="350">
          <div class="card-body">
            <div class="card-title mt-2">
                <h5><i>{{movie.Title}}</i></h5>
            </div>
            <div class="row justify-content-around text-secondary">
                <div class="col"><small>{{movie.Type}}</small></div>
                <div class="col"><small>{{movie.Year}}</small></div>
            </div>
          </div>
  </div>
</template>

<script>
export default {
    name:"Card",
    props:{
        movie:{
            type:Object,
            required:true
        }
    }
}
</script>

<style scoped>
    .card-body{
        min-height: 150px;
    }
</style>