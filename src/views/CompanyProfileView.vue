<template xmlns="http://www.w3.org/1999/html">
  <div class="background">
    <div class="company-profile-page">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-12">
            <div v-if="isCompany">
              <div class="row">
                <div class="col">
                  <h1> {{ companyProfile.companyName}}</h1>
          </div>
        </div>
      </div>
</div>


          <div class="col-md-6">
            <label for="tegevusvaldkond" class="form-label label-black-bold">Tegevusvaldkond</label>
            <div class="form-floating">

              <CompanyEditProfileTable v-if="isEditMode" :company-profile="companyProfile"/>
              <textarea v-model="companyProfile.description" class="form-control textarea-fixed" id="tegevusvaldkond"></textarea>


            </div>
            <h3>
              <button v-if="!isEditMode" @click="startEdit" type="button" class="btn btn-outline-success me-3">Muuda
              </button>

              <button v-if="isEditMode" @click="saveEdit" type="button" class="btn btn-outline-success me-3">Salvesta
              </button>


            </h3>
          </div>

          <!-- Right Column: Other Inputs -->
          <div class="col-md-6">

            <div class="container">
              <div class="row">
                <CompanyEditProfileTable v-if="isEditMode" :company-profile="companyProfile"
                                         @event-companyName-changed="setCompanyProfileCompanyName"
                                         @event-registrationNumber-changed="setCompanyProfileRegistrationNumber"
                                         @event-email-changed="setCompanyProfileEmail"
                                         @event-phoneNumber-changed="setCompanyProfilePhoneNumber"
                                         @event-address-changed="setCompanyProfileAddress"
                                         @event-linkedin-changed="setCompanyProfileWww"
                />
                <CompanyEditProfileTable v-else :company-profile="companyProfile"/>

          </div>
        </div>
           <div class="row mt-4">
          <div class="col text-center">
            <h3>
              <button v-if="!isEditMode" @click="startEdit" type="button" class="btn btn-outline-success me-3">Muuda
              </button>

              <button v-if="isEditMode" @click="saveEdit" type="button" class="btn btn-outline-success me-3">Salvesta
              </button>


            </h3>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import NavigationService from "@/services/NavigationService";
import CompanyService from "@/services/CompanyService";
import CompanyViewProfileTable from "@/components/CompanyProfile/CompanyViewProfileTable.vue";
import CompanyEditProfileTable from "@/components/CompanyProfile/CompanyEditProfileTable.vue";

export default {
  name: "CompanyProfileView",
  components: {CompanyEditProfileTable, CompanyProfileTable: CompanyViewProfileTable},
  props: {
    isCompany: Boolean,

  },


  data() {
    return {
isEditMode: false,

      userId: Number(sessionStorage.getItem('userId')),
      isCompany: true,

      companyProfile: {
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
    setCompanyProfileCompanyName(companyName){
      this.companyProfile.companyName = companyName
    },
    setCompanyProfileRegistrationNumber(registrationNumber){
      this.companyProfile.registrationNumber = registrationNumber
    },
    setCompanyProfileEmail(email){
      this.companyProfile.email =  email
    },
    setCompanyProfilePhoneNumber(phoneNumber){
      this.companyProfile.phoneNumber = phoneNumber
    },
    setCompanyProfileAddress(address){
      this.companyProfile.address = address
    },
    setCompanyProfileWww(www) {
      this.companyProfile.www = www
    },
    setCompanyProfileDescription(description) {
      this.companyProfile.description = description
    },

    startEdit() {
      this.isEditMode = true
    },
    async saveEdit() {
      try {
        const response = await CompanyService.updateCompanyProfile(this.userId, this.companyProfile);
        this.companyProfile = { ...response.data };
        this.isEditMode = false;
      } catch (error) {
        console.error('Error saving profile: ', error);
        alert('Profiili salvestamisel tekkis viga');
      }
    },
    async getCompanyProfile() {
      try {
        const response = await CompanyService.sendGetCompanyProfile(this.userId);
        this.companyProfile = { ...response.data };
      } catch (error) {
        NavigationService.navigateToErrorView();
      }
    }
  },
  async created() {
    await this.getCompanyProfile();
  }
}

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