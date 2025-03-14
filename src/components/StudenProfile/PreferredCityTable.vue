

<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Eelistused asukoha suhtes</th>

      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">{{cityName}}}</th>

      </tr>
      <tr>
        <th scope="row"></th>

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
    preferredCity{},
    City:'',
  },

  data(){
    return{

      City: {
        cityId:'',
        cityName:'',
      },

      preferredCity: {
        userId:'',
        cityId: ''
      }
    }
  }


}
</script>
