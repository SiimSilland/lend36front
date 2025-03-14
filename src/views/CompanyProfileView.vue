<template>
  <div class="background">
    <div class="company-profile-page">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-12">
            <div v-if="isCompany">
              <div class="row">
                <div class="col">
                  <h1>{{ companyProfileName }}</h1>
                    </div>
              </div>
            </div>
          </div>

          <!-- Left Column: Description (Tegevusvaldkond) always visible -->
          <div class="col-md-6">
            <label for="tegevusvaldkond" class="form-label label-black-bold">Tegevusvaldkond</label>
            <div class="form-floating">
              <!-- Description textarea is always visible -->
              <textarea
                  v-model="companyProfile.description"
                  class="form-control textarea-fixed"
                  id="tegevusvaldkond"
                  :readonly="!isEditMode"
              ></textarea>
            </div>
          </div>

          <!-- Right Column: Other Inputs (Company Info) -->
          <div class="col-md-6">
            <div class="container">
              <div class="row">
                <!-- Editable input table when in edit mode -->
                <div v-if="isEditMode">
                  <CompanyEditProfileTable
                      :company-profile="companyProfile"
                      @event-companyName-changed="setCompanyProfileCompanyName"
                      @event-registrationNumber-changed="setCompanyProfileRegistrationNumber"
                      @event-email-changed="setCompanyProfileEmail"
                      @event-phone-changed="setCompanyProfilePhone"
                      @event-address-changed="setCompanyProfileAddress"
                      @event-www-changed="setCompanyProfileWww"
                      @event-description-changed="setCompanyProfileDescription"
                  />
                </div>
                <!-- Read-only input table when not in edit mode -->
                <div v-else>
                  <CompanyViewProfileTable :company-profile="companyProfile" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Edit/Save Button Section -->
        <div class="row mt-4">
          <div class="col text-center">
            <button v-if="!isEditMode" @click="startEdit" type="button" class="btn btn-outline-success me-3">Muuda</button>
            <button v-if="isEditMode" @click="saveEdit" type="button" class="btn btn-outline-success me-3">Salvesta</button>
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
  components: {CompanyEditProfileTable, CompanyViewProfileTable },
  props: {
    isCompany: Boolean,
  },
  data() {
    return {
      companyProfileName: '',
      isEditMode: false,
      userId: Number(sessionStorage.getItem('userId')),
      isCompany: true,

      companyProfile: {
        companyName: '',
        registrationNumber: '',
        email: '',
        phone: '',
        address: '',
        www: '',
        description: ''
      }
    };
  },
  methods: {
    setCompanyProfileCompanyName(companyName) {
      this.companyProfile.companyName = companyName;
    },
    setCompanyProfileRegistrationNumber(registrationNumber) {
      this.companyProfile.registrationNumber = registrationNumber;
    },
    setCompanyProfileEmail(email) {
      this.companyProfile.email = email;
    },
    setCompanyProfilePhone(phone) {
      this.companyProfile.phone = phone;
    },
    setCompanyProfileAddress(address) {
      this.companyProfile.address = address;
    },
    setCompanyProfileWww(www) {
      this.companyProfile.www = www;
    },
    setCompanyProfileDescription(description) {
      this.companyProfile.description = description;
    },
    startEdit() {
      this.isEditMode = true;
    },
    saveEdit() {
      CompanyService.updateCompanyProfile(this.userId, this.companyProfile)
        .then(response => {
          this.isEditMode = false;

        })
          .catch(error => {
         console.error('Error saving profile: ', error);
        alert('Profiili salvestamisel tekkis viga');
      });
    },

    handleGetCompanyProfileResponse(response) {
      this.companyProfile = response.data;
      this.companyProfileName = this.companyProfile.companyName
    },

    getCompanyProfile() {
      CompanyService.sendGetCompanyProfile(this.userId)
          .then(response => this.handleGetCompanyProfileResponse(response))
          .catch(() => NavigationService.navigateToErrorView());
    }
  },
  beforeMount() {
    this.getCompanyProfile()

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