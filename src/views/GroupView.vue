<template>
  <div>
    <AddGroupModal :modal-is-open="modalIsOpen"
                   @event-group-added="getGroups"
                   @event-close-modal="closeAddGroupModal"
                   @event-group-deleted="deleteGroup"
    />

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col">
          <h1>Kõik lennud</h1>
          <AlertDanger :message="errorMessage"/>
          <table class="table table-responsive table-hover">
            <thead>
            <tr>
              <th scope="col">Lennu number</th>
              <th scope="col">Periood</th>
              <th scope="col">Lektori nimi</th>
              <th scope="col">Tegevused</th>
            </tr>
            </thead>
            <tbody class="table-group-divider">
            <!--     alljärgnev osa dynaamiliseks for loop 'groups'pealt       -->
            <tr v-for="group in groups" :key="group.groupId">
              <th scope="row">{{group.groupNumber}}</th>
              <td>{{ group.groupPeriod }}</td>
              <td>{{group.lectorName}}</td>
              <td><button class="btn btn-warning btn-sm" @click="editGroup(group)"><i class="fas fa-edit"></i>Muuda</button>
                <button class="btn btn-danger btn-sm" @click="deleteGroup(group.groupId)"><i class="fas fa-trash"></i> Kustuta</button>
                <button class="btn btn-success btn-sm" @click="navigateToGroupEmailView(group.groupId)"><i class="fas fa-plus"></i> Lisa õppur</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
      <div class="col">
        <button @click="openAddGroupModal" type="submit" class="btn btn-outline-success">Lisa lend</button>
      </div>
    </div>
  </div>
</template>

<script>
import AddGroupModal from "@/components/modal/AddGroupModal.vue";
import axios, {HttpStatusCode} from "axios";
import NavigationService from "@/services/NavigationService";
import GroupService from "@/services/GroupService";
import BusinessErrors from "@/errors/BusinessErrors";
import HttpStatusCodes from "@/errors/HttpStatusCodes";
import AlertDanger from "@/components/alert/AlertDanger.vue";

export default {
  name: 'GroupView',
  components: {AlertDanger, AddGroupModal},
  data() {
    return {
      modalIsOpen: false,
      isEdit: false,
      isDelete: Boolean,
      successMessage: '',
      errorMessage: '',

      groups: [
        {
          groupId: 0,
          groupNumber: 0,
          groupPeriod: '',
          lectorName: ''
        }
      ],
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods:{

    navigateToGroupEmailView(groupId) {
      NavigationService.navigateToGroupEmailView(groupId)
    },

    getGroups() {
      axios.get('/groups')
          .then(response => {
            this.groups = response.data
          })
          .catch(() => {
            NavigationService.navigateToErrorView()
          })
    },

    openAddGroupModal() {
      this.modalIsOpen = true
    },

    validateIsAdmin() {
      const roleName = sessionStorage.getItem('roleName')
      this.IsAdmin = roleName != null && roleName === 'admin'
    },

    closeAddGroupModal() {
      this.modalIsOpen = false
    },

    deleteGroup(groupId) {
      GroupService.sendDeleteGroupRequest(groupId)
          .then(() => this.handleDeleteGroupResponse())
          .catch(error => this.handleErrorResponse(error))
    },

    handleDeleteGroupResponse() {
      this.getGroups()
    },

    handleErrorResponse(error) {
      this.errorResponse = error.response.data

      if (this.errorResponse.errorCode === BusinessErrors.GROUP_NOT_EMPTY) {
        this.errorMessage = this.errorResponse.message
        setTimeout(this.resetErrorMessage, 4000)
      } else {
        NavigationService.navigateToErrorView();
      }
    },

    resetErrorMessage() {
      this.errorMessage = ''
    },

  },


  beforeMount() {
    this.validateIsAdmin()
    this.getGroups()
  }
}
</script>


