<template>
  <div class="home">
    <img src="../assets/valiIT_logo.png">
    <HelloWorld msg="Kohutmispaik Vali-IT õppuritele ja ettevõtetele"/>
  </div>

  <div class="col">
    <h2></h2>

  </div>
</template>






<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
