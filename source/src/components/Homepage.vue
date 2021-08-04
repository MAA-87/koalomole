<template>

<div class="hell">
  
<div class="tek">

    <h1>{{ msg }}</h1>
</div>
  
      <h2> ZENTANGLE ARTIST </h2>
      <h3> МАТЕРЬ МАНДАЛ </h3>
     <router-link to="/gallery"></router-link> 
</div>


</template>



<script>
export default {
  name: 'Homepage',
  props: {
    msg: String
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100&display=swap');
.hell{
  width: 100%;
  text-align: center;
height: 100%;
margin: 0;
  }

.tek {
  width: 100%;
background-image: url('../assets/uv-2.jpg') ;
background-size: cover;
animation: city 60s linear infinite;
border: none;
}
@keyframes city {
  from{ background-position: 1px 10%;}
  100%{ background-position: 3822px 150%;}
}

h1 {

  color: #000;
  background: #fff;
  background-image: url('../assets/ptrn/bloom.png');
  mix-blend-mode:lighten;
  font-family: 'Anton', sans-serif;
  font-size: 9vmax;
}
h2{
    font-family: 'Roboto', sans-serif;
  font-size: 6vw;

    text-shadow: 0px 1px 1px rgb(218, 218, 218), 0px 0px 1px black;
}
h3{
  

font-size: 3vmin;
font-weight:lighter;
  text-shadow: 0px 0px 1px rgb(218, 218, 218), 0px 0px 0.5px black;
  margin-bottom: 60px;
}

</style>
