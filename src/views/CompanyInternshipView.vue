<template>
  <div>
    <div class="background">
      <AddInternshipModal
          :modal-is-open="modalIsOpen"
          @event-group-added="getInternships"
          @event-close-modal="closeAddInternshipModal"
      />

        <div class="company-profile-page">
        <div class="container text-center-left">
          <div class="row justify-content-center">
            <h1 class="title">Praktikavõimalused</h1>
            <table class="table table-responsive table-hover">
              <thead>
              <tr>
                <th scope="col">Praktika positsioon</th>
                <th scope="col">Kirjeldus</th>
                <th scope="col">Praktika koordinaator</th>
                <th scope="col">email</th>
              </tr>
              </thead>
              <tbody class="table-group-divider">

              <tr v-for="internship in internships" :key="internship.title">
                <td>{{ internship.title }}</td>
                <td>{{ internship.description }}</td>
                <td>{{ internship.name }}</td>
                <td>{{ internship.email }}</td>
                <td><button class="btn btn-warning btn-sm" @click="editInternship(internship)"><i class="fas fa-edit"></i>Muuda</button>
                  <button class="btn btn-danger btn-sm" @click="deleteInternship(internship)"><i class="fas fa-trash"></i> Kustuta</button>

                </td>
              </tr>
              </tbody>
            </table>
          </div>

        </div>
          <div class="col">
            <button @click="openAddInternshipModal" type="submit" class="btn btn-outline-success">Lisa praktika</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import NavigationService from "@/services/NavigationService";
import axios from "axios";
import AddInternshipModal from "@/components/modal/AddInternshipModal.vue";
export default {
  name: "CompanyInternshipView",
  components: {AddInternshipModal },
  data() {
    return {
      modalIsOpen: false,
      isEdit: false,
      successMessage: '',
      errorMessage: '',

      internships: []

    };
  },
  methods: {

    getInternships() {
      const companyUserId = sessionStorage.getItem('userId'); // Ensure userId is retrieved
      if (!companyUserId) {
        console.error("Error: companyUserId is missing!");
        return;
      }

      axios.get('/company/internships', {
        params: { companyUserId }
      })
          .then(response => {
            this.internships = response.data;
          })
          .catch(error => {
            console.error("Error fetching internships:", error.response?.data || error);
            NavigationService.navigateToErrorView();
          });
    },

    editInternship(internship) {
      console.log("Edit internship:", internship);
      this.modalIsOpen = true;
      this.newInternship = { ...internship }; // Pre-fill the modal with selected internship
    },

    deleteInternship(internship) {
      const companyUserId = sessionStorage.getItem('userId');

      if (!companyUserId) {
        console.error("Error: companyUserId is missing!");
        return;
      }

      if (confirm("Are you sure you want to delete this internship?")) {
        axios.delete(`/company/internship/${internship.id}`, {
          params: { companyUserId }
        })
            .then(() => {
              console.log("Internship deleted successfully.");
              this.getInternships(); // Refresh after delete
            })
            .catch(error => {
              console.error("Error deleting internship:", error.response?.data || error);
            });
      }
    },
    openAddInternshipModal() {
      this.modalIsOpen = true
    },

    validateIsCompany() {
      const roleName = sessionStorage.getItem('roleName');
      this.isCompany = roleName === 'company'; // Fix capitalization
    },

    closeAddInternshipModal() {
      this.modalIsOpen = false
    },

  },


  beforeMount() {
    this.validateIsCompany()
    this.getInternships()
  }
}
</script>

<style scoped>
.background {
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding-bottom: 20px;
}

</style>