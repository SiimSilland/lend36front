<template>
  <div>
    <div class="dropdown">
      <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          :class="{ 'btn-selected': value}"
      >
        {{ selectedCityName || 'Vali linn' }}
      </button>
      <ul class="dropdown-menu dropdown-menu-scroll">
        <li
            v-for="city in cityDropdown"
            :key="city.cityId"
            class="dropdown-item"
            :class="{'active' :value === city.cityId}"
            @click="selectCity(city.cityId)"
        >
          {{ city.cityName }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "CitiesDropdown",
  props: {
    cityDropdown: {
      type: Array,
      required: true
    },
    value: [Number, String] // for v-model binding
  },
  computed: {
    selectedCityName() {
      console.log('Value: ', this.value);
      console.log('Cities:', this.cityDropdown)
      const selectedCity = this.cityDropdown.find(city => city.cityId === this.value);
      return selectedCity ? selectedCity.cityName : '';
    }
  },
  methods: {
    selectCity(cityId) {
      console.log('Selected city ID: ', cityId);
      this.$emit('update:value', cityId); // emit for v-model
    }
  }
}
</script>

<style scoped>
.dropdown-menu-scroll {
  max-height: 250px; /* Adjust as needed */
  overflow-y: auto; /* Enable scrolling */
  width: 100%;
}

.dropdown-item {
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
}

.btn-selected {
  background-color: #e9ecef; /* Visual feedback for selection */
}
</style>