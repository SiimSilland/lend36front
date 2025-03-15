<template>
  <div>
    <AddGroupEmailModal :modal-is-open="modalIsOpen"
                        :groups="groups"
                        :selected-group-id="selectedGroupId"
                        @event-student-added="getStudents"
                        @event-close-modal="closeAddGroupEmailModal"
                        @event-new-group-selected="updatedSelectedGroupId"
    />

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col">
          <h1>Registreeritud õppurid</h1>
          <table class="table table-responsive table-hover">
            <thead>
            <tr>
              <th scope="col">Lennu number</th>
              <th scope="col">Eesnimi</th>
              <th scope="col">Perekonnanimi</th>
              <th scope="col">E-post</th>
              <th scope="col">Staatus</th>
            </tr>
            </thead>
            <tbody class="table-group-divider">
            <tr v-for="student in students" :key="student.groupId">
              <th scope="row">{{ student.groupNumber }}</th>
              <td>{{ student.firstName }}</td>
              <td>{{ student.lastName }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.status }}</td>
              <td>
                <button class="btn btn-warning btn-sm" @click="editStudent(student)"><i class="fas fa-edit"></i>Muuda
                </button>
                <button class="btn btn-danger btn-sm" @click="deleteStudent(student)"><i class="fas fa-trash"></i> Kustuta
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
      <div class="col">
        <button @click="openAddGroupEmailModal" type="submit" class="btn btn-outline-success">Lisa õppur</button>
      </div>
    </div>

  </div>

</template>

<script>
import {useRoute} from "vue-router";
import axios from "axios";
import NavigationService from "@/services/NavigationService";
import AddGroupEmailModal from "@/components/modal/AddGroupEmailModal.vue";

export default {
  name: 'GroupEmailView',
  components: {AddGroupEmailModal},
  data() {
    return {
      selectedGroupId: 0,
      modalIsOpen: false,
      isEdit: false,
      successMessage: '',
      errorMessage: '',
      groupId: Number(useRoute().query.groupId),
      students: [
        {
          groupNumber: 0,
          firstName: '',
          lastName: '',
          email: '',
          status: ''
        }
      ],
      groups: [
        {
          groupId: 0,
          groupNumber: 0,
          groupPeriod: '',
          lectorName: ''
        }
      ]
    }
  },
  methods: {

    updatedSelectedGroupId(selectedGroupId) {
      this.selectedGroupId = selectedGroupId
    },

    getGroups() {
      axios.get('/groups')
          .then(response => {
            this.groups = response.data
          })
          .catch(error => {
            this.someDataBlockErrorResponseObject = error.response.data
          })
    },
    // todo: uus meetod (kasuta axios template) getStudents() kasutades groupId
    // todo: too ära GET /group-emails
    // todo: pane tulemus students objekti

    getStudents() {
      axios.get('/group-email', {
        params:{
          groupId: this.groupId
        }
      })
          .then(response => {
            this.students = response.data
          })
          .catch(() => {
            NavigationService.navigateToErrorView()
          })
    },

    validateIsAdmin() {
      const roleName = sessionStorage.getItem('roleName')
      this.IsAdmin = roleName != null && roleName === 'admin'
    },

    openAddGroupEmailModal() {
      this.modalIsOpen = true
    },

    closeAddGroupEmailModal() {
      this.modalIsOpen = false
    },
    decideSelectedGroupId() {
      if (typeof this.groupId === "number" && !isNaN(this.groupId)) {
        this.selectedGroupId = this.groupId
      } else {
        this.groupId = 0
      }
    },
  },

  beforeMount() {
    this.decideSelectedGroupId()
    this.getGroups()
    this.validateIsAdmin()
    this.getStudents()
  }
}
</script>