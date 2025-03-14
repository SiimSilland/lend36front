<template>
  <Modal :modal-is-open="modalIsOpen" @event-close-modal="$emit('event-close-modal')">
    <template #title>
      Lennu lisamine
    </template>

    <template #body>
      <AlertDanger :message="errorMessage"/>
      <div>

      </div>

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

export default {
  name: "AddCityModal",
  components: {AlertDanger, Modal},
  props: {
    modalIsOpen: Boolean
  },

  data(){

    cityDropdown: []

  }


}
</script>