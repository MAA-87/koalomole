<template>
  <div class="home">
    <!--koalomole <img alt="Vue logo" src="../assets/koalomole.png"> -->
    <Homepage msg="KOALOMOLE"/>  
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '@/components/Homepage.vue'

export default {
  name: 'Home',
  components: {
    Homepage
  }
}
</script>
