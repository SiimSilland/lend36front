<template>
  <div>
    <Modal :modal-is-open="modalIsOpen" @event-close-modal="$emit('event-close-modal')">
      <template #title>
        Õppuri lisamine
      </template>

      <template #body>
        <AlertDanger :message="errorMessage"/>


        <div class="input-group mb-3">
          <span class="input-group-text">Lennu number</span>
          <select :value="selectedGroupId" @change="handleGroupIdChange" class="form-select">
            <option selected value=0>Vali lend</option>
            <option v-for="group in groups" :key="group.groupId" :value="group.groupId">{{group.groupNumber}}</option>
          </select>
        </div>



        <div class="input-group mb-3">
          <span class="input-group-text">Eesnimi</span>
          <input v-model="newStudent.firstName" type="text" class="form-control">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Perekonnanimi</span>
          <input v-model="newStudent.lastName" type="text" class="form-control">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">E-post</span>
          <input v-model="newStudent.email" type="text" class="form-control">
        </div>
      </template>

      <template #footer>
        <button @click="addStudent" type="submit" class="btn btn-outline-success">Lisa õppur</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import AlertDanger from "@/components/alert/AlertDanger.vue";
import Modal from "@/components/modal/Modal.vue";
import GroupEmailService from "@/services/GroupEmailService";
import BusinessErrors from "@/errors/BusinessErrors";
import NavigationService from "@/services/NavigationService";

export default {
  name: "AddGroupEmailModal",
  components: {Modal, AlertDanger},
  props: {
    modalIsOpen: Boolean,
    groups: {
      type: Array
    },
    selectedGroupId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      groupId: 0,
      groupNumber: '',
      firstName: '',
      lastName: '',
      email: '',
      status: '',

      newStudent: {
        groupId: 0,
        firstName: '',
        lastName: '',
        email: '',
      },
      errorMessage: '',

      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {
    handleGroupIdChange() {
      this.$emit('event-new-group-selected', Number(event.target.value))
    },

    addStudent() {
      this.newStudent.groupId = this.selectedGroupId
      GroupEmailService.sendPostNewGroupEmailRequest(this.newStudent)
          .then(() => {
            this.$emit('event-group-added')
            this.$emit('event-close-modal')
          })
          .catch(error => this.handleErrorResponse(error))
    },

    handleErrorResponse(error) {
      this.errorResponse = error.response.data

      if (this.errorResponse.errorCode === BusinessErrors.GROUP_EMAIL_ALREADY_EXISTS) {
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