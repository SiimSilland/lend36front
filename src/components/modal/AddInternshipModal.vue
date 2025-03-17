<template>
  <div>
    <Modal :modal-is-open="modalIsOpen" @event-close-modal="$emit('event-close-modal')">
      <template #title>
        Praktikakoha lisamine
      </template>

      <template #body>
        <AlertDanger :message="errorMessage"/>
        <div class="input-group mb-3">
          <span class="input-group-text">Praktika positsioon</span>
          <input v-model="newInternship.title" type="text" class="form-control">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Praktika kirjeldus</span>
          <input v-model="newInternship.description" type="text" class="form-control">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Praktika koordinaator</span>
          <input v-model="newInternship.name" type="text" class="form-control">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Koordinaatori email</span>
          <input v-model="newInternship.email" type="text" class="form-control">
        </div>
      </template>

      <template #footer>
        <button @click="addInternship" type="submit" class="btn btn-outline-success">Lisa praktikakoht</button>
      </template>
    </Modal>
  </div>
</template>


<script>

import Modal from "@/components/modal/Modal.vue";
import NavigationService from "@/services/NavigationService";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import BusinessErrors from "@/errors/BusinessErrors";
import CompanyService from "@/services/CompanyService";

export default {
  name: 'AddInternshipModal',
  components: {AlertDanger, Modal},
  props: {
    modalIsOpen: Boolean
  },
  data() {
    return {
      internshipTitle: '',
      internshipDescription: '',
      internshipName: '',
      internshipEmail: '',

      newInternship: {
        title: '',
        description: '',
        name:'',
        email: ''

      },

      errorMessage: '',

      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {

    addInternship() {

      const userId = sessionStorage.getItem("userId");

      this.newInternship.companyUserId = userId;

      CompanyService.sendPostNewInternshipRequest(this.newInternship)
          .then(() => {
            this.$emit('event-group-added'); // Ensures the internship list updates
            this.$emit('event-close-modal');
          })
          .catch(error => this.handleErrorResponse(error))
    },

    handleErrorResponse(error) {
      this.errorResponse = error.response.data

      if (this.errorResponse.errorCode === BusinessErrors.INTERNSHIP_TITLE_NOT_FOUND) {
        this.errorMessage = this.errorResponse.message
        setTimeout(this.resetErrorMessage, 4000)
      } else {
        NavigationService.navigateToErrorView();
      }
    },

    resetErrorMessage() {
      this.errorMessage = ''
    },
  }
}
</script>