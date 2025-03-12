<template>
  <div class="background">
    <div class="company-profile-page">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-12">
            <h1 class="title">Ettevõtte profiil</h1>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">

          <div class="col-md-6">
            <label for="tegevusvaldkond" class="form-label label-black-bold">Tegevusvaldkond</label>
            <div class="form-floating">
              <textarea v-model="newCompany.description" class="form-control textarea-fixed" id="tegevusvaldkond"></textarea>

            </div>
          </div>

          <!-- Right Column: Other Inputs -->
          <div class="col-md-6">
            <div class="input-group mb-3">
              <span class="input-group-text">Ettevõtte nimi</span>
              <input v-model="newCompany.companyName" type="text" class="form-control">
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Registrikood</span>
              <input v-model="newCompany.registrationNumber" type="text" class="form-control">
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Email</span>
              <input v-model="newCompany.email" type="email" class="form-control">
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Telefon</span>
              <input v-model="newCompany.phoneNumber" type="tel" class="form-control">
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Aadress</span>
              <input v-model="newCompany.address" type="text" class="form-control">
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Veebileht</span>
              <input v-model="newCompany.www" type="url" class="form-control">
            </div>
          </div>
        </div>
           <div class="row mt-4">
          <div class="col text-center">
            <button @click="addNewCompanyProfile" type="submit" class="btn btn-custom">
              Uuenda andmed
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/UserService";
import NavigationService from "@/services/NavigationService";


export default {
  name: "CompanyProfileView",
  data() {
    return {

      newCompany: {
        companyName: '',
        registrationNumber: '',
        email: '',
        phoneNumber: '',
        address: '',
        www: '',
        description: ''
      }
    };
  },
  methods: {
    addNewCompanyProfile() {
      UserService.sendPostNewCompanyProfileRequest(this.newCompany)
          .then(() => NavigationService.navigateToLoginView())
          .catch(error => console.error("Error updating company profile:", error));
    }
  }
};
</script>

<style scoped>
.background {
  background-image: url('@/assets/img.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.company-profile-page {
  padding: 20px;
  color: white;
}

.title {
  color: black;

}

.label-black-bold {
  color: black;
  font-weight: bold;

}
.btn-custom {
  background-color: yellow;
  color: black;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
}
.textarea-fixed {
  height: 100px;
}
</style>