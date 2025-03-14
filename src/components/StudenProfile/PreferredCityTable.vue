
<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Eelistused asukoha suhtes</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="prefCity in preferredCities" :key="prefCity.cityId">
        <td>{{ getCityName(prefCity.cityId) }}</td>
        <td>
          <button
            @click ="removeCity(prefCity.cityId)"
            type="button"
            class="btn btn-outline-danger btn-sm"
          >
            Eemalda
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PreferredCityTable",
  props:{
  preferredCities: {
    type: Array,
    default: () => []
  },
    cities: {
    type:Array,
      default: () => []
    }
},

  methods: {
    getCityName(cityId) {
      const city = this.cities.find(c => c.cityId === cityId);
      return city ? city.cityName : 'Unknown City';
    },
    removeCity(cityId) {
      this.$emit('event-remove-city', cityId);
    }

  }

}
</script>

<style scoped>
.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
</style>