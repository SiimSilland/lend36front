<template>
  <div>
    <Modal :modal-is-open="modalIsOpen" @event-close-modal="$emit('event-close-modal')">
      <template #title>
        Lennu lisamine
      </template>

      <template #body>
        <AlertDanger :message="errorMessage"/>
        <div class="input-group mb-3">
          <span class="input-group-text">Lennu number</span>
          <input v-model="newGroup.number" type="text" class="form-control">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Periood</span>
          <input v-model="newGroup.period" type="text" class="form-control">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Lektori nimi</span>
          <input v-model="newGroup.lectorName" type="text" class="form-control">
        </div>
      </template>

      <template #footer>
        <button @click="addGroup" type="submit" class="btn btn-outline-success">Lisa lend</button>
      </template>
    </Modal>
  </div>
</template>


<script>
import GroupService from "@/services/GroupService";
import Modal from "@/components/modal/Modal.vue";
import NavigationService from "@/services/NavigationService";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import BusinessErrors from "@/errors/BusinessErrors";

export default {
  name: 'AddGroupModal',
  components: {AlertDanger, Modal},
  props: {
    modalIsOpen: Boolean
  },
  data() {
    return {
      groupId: 0,
      groupNumber: '',
      groupPeriod: '',
      groupLectorName: '',

      newGroup: {
        number: 0,
        period: '',
        lectorName: ''
      },
      errorMessage: '',

      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {

    addGroup() {
      GroupService.sendPostNewGroupRequest(this.newGroup)
          .then(() => {
            this.$emit('event-group-added')
            this.$emit('event-close-modal')
          })
          .catch(error => this.handleErrorResponse(error))
    },

    handleErrorResponse(error) {
      this.errorResponse = error.response.data

      if (this.errorResponse.errorCode === BusinessErrors.GROUP_NUMBER_UNAVAILABLE) {
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