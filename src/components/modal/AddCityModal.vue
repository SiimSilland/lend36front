<template>
  <Modal :modal-is-open="modalIsOpen"
         @event-close-modal="$emit('event-close-modal')"
         class="larger-modal"
  >

    <template #title>
      Linna lisamine
    </template>

    <template #body>
      <AlertDanger :message="errorMessage"/>
      <div class="dropdown-container">
        <CitiesDropdown
            :city-dropdown="cityDropdown"
            :value="selectedCityId"
            @update:value="selectedCityId = $event"
        />
      </div>

    </template>

    <template #footer>
      <button @click="addCity" type="submit" class="btn btn-outline-success">Lisa linn</button>
    </template>
  </Modal>

</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import CitiesDropdown from "@/components/city/CitiesDropdown.vue";

export default {
  name: "AddCityModal",
  components: {CitiesDropdown, AlertDanger, Modal},
  props: {
    modalIsOpen: Boolean,
    cityDropdown: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      selectedCityId: null,
      errorMessage: ''
    }

  },

  methods: {

    addCity() {
      if (this.selectedCityId) {
        this.$emit('event-new-city-added', this.selectedCityId)
        this.$emit('event-close-modal')
        this.selectedCityId = null
      } else {
        this.errorMessage = 'Palun vali linn'
        setTimeout(() => this.errorMessage = '', 4000)
      }
    }
  }

}
</script>

<style scoped>
.larger-modal :deep(.modal-dialog) {
  max-width: 500px; /* Adjust width as needed */
}

.larger-modal :deep(.modal-body) {
  min-height: 300px; /* Increase height to show more items */
  max-height: 400px; /* Set maximum height */
  overflow-y: auto; /* Add scroll if needed */
}

.dropdown-container {
  position: relative;
  padding: 10px;
}
</style>