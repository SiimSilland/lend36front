

<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Eelistused asukoha suhtes</th>

      </tr>
      </thead>
      <tbody>
      <tr v-for="preferredCity in preferredCity" :key="preferredCity.cityId">
        <th scope="row">{{cityName}}</th>

      </tr>
      <tr>
        <th scope="row">{{preferredCity.cityId}}</th>

      </tr>
      <tr>
        <th scope="row"></th>

      </tr>
      </tbody>
    </table>

  </div>
</template>


<script>
export default {
  name: "PreferredCityTable",

  props:{
  preferredCity: Object

},


  data(){
    return{

      City: {
        cityId:'',
        cityName:'',
      },

      preferredCity: {
        userId:'',
        cityId:''
      },
    }
  }


}
</script>
