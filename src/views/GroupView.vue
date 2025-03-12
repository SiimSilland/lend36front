<template>
  <div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col">
          <h1>Kõik lennud</h1>
          <table class="table table-responsive table-hover">
            <thead>
            <tr>
              <th scope="col">Lennu number</th>
              <th scope="col">Periood</th>
              <th scope="col">Lektori nimi</th> <!--Kuidas teha tabeli rea lõppu muutmise, kustutamise, Lisa õppuri ikoon? -->
            </tr>
            </thead>
            <tbody class="table-group-divider">
            <!--     alljärgnev osa dynaamiliseks for loop 'groups'pealt       -->
            <tr v-for="group in groups" :key="group.groupId">
              <th scope="row">{{group.groupNumber}}</th>
              <td>{{ group.groupPeriod }}</td>
              <td>{{group.lectorName}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddGroupModal from "@/components/modal/AddGroupModal.vue";
import axios from "axios";

export default {
  name: 'GroupView',
  components: {AddGroupModal},
  data() {
    return {
      modalIsOpen: false,
      isEdit: false,
      successMessage: '',
      errorMessage: '',

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
  methods:{
    getGroups() {
      axios.get('/groups')
          .then(response => {
            this.groups = response.data
          })
          .catch(error => {
            this.someDataBlockErrorResponseObject = error.response.data
          })
    },
  },
  beforeMount() {
    this.getGroups()
  }

}
</script>
