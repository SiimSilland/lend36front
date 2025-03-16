<template>

    <div class="background" v-if="isStudent">
      <AddCityModal
          :modal-is-open="modalIsOpen"
          :cityDropdown="cityDropdown"
          @event-new-city-added="handleAddCity"
          @event-close-modal="closeAddCityModal"
      />
      <div class="row">
        <div class="col">
          <h1 class="title"> {{ studentProfile.firstName }} {{ studentProfile.lastName }}</h1>
        </div>
      </div>
      <div>
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              <div class="row">
                <PreferredCityTable
                    :preferred-cities="studentPreferredCities"
                    :cities="cityDropdown"
                    @event-remove-city="handleRemoveCity"
                />
              </div>
              <div class="row">
                <button @click="openAddCityModal" type="submit" class="btn btn-outline-success">Lisa asukohti</button>
              </div>

            </div>
            <div class="col">
              <div class="row">
                <div class="col-md-30">
                  <label for="Lühitutvustus" class="form-label label-black-bold">Lühitutvustus</label>
                  <div class="form-floating">
                    <!-- Description textarea is always visible -->
                    <textarea
                        v-model="studentProfile.intro"
                        class="textarea-fixed"
                        id="tegevusvaldkond"
                        :readonly="!isEditMode"
                    ></textarea>
                  </div>
                </div>


              </div>
            </div>
            <div class="col">
              <div class="row">
                <UserImage :user-image-data="userImageDto.userImageData"/>
              </div>
              <div class="row">
                <h3>
                  <button  @click="sendDeleteUserImage" type="button" class="btn btn-outline-primary">kustuta pilt
                  </button>
                </h3>
                <ImageInput :user-image="userImageDto" @event-new-image-posted="sendPostUserImage"/>
              </div>
              <div class="row">
                <StudentEditProfileTable v-if="isEditMode" :student-profile="studentProfile"
                                         @event-address-changed="setStudentProfileAddress"
                                         @event-phone-changed="setStudentProfilePhone"
                                         @event-email-changed="setStudentProfileEmail"
                                         @event-linkedin-changed="setStudentProfileLinkedin"
                />
                <StudentProfileTable v-else :student-profile="studentProfile"/>

                  <button v-if="!isEditMode" @click="startEdit" type="button" class="btn btn-outline-success me-3">Muuda
                  </button>

                  <button v-if="isEditMode" @click="saveEdit" type="button" class="btn btn-outline-success me-3">
                    Salvesta
                  </button>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              <div class="row">Eelistatud praktika algus</div>
              <div class="row">(SIIA KALENDER)</div>
            </div>
            <div class="col">
              <h3>/</h3>
            </div>
            <div class="col">
              <ImageInput :display-cv="cvFileData" @event-new-cv-posted="sendPostCv"/>

              <button type="button" class="btn btn-outline-primary">Lisa CV</button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div v-else class="unauthorized-message">
      <h2> Juurdepääs keelatud </h2>
      <p>Teil pole selle lehe vaatamiseks õiguse.</p>
    </div>

</template>
<script>

import StudentViewProfileTable from "@/components/StudenProfile/StudentViewProfileTable.vue";
import StudentProfileService from "@/services/StudentProfileService";
import NavigationService from "@/services/NavigationService";
import StudentEditProfileTable from "@/components/StudenProfile/StudentEditProfileTable.vue";
import PreferredCityTable from "@/components/StudenProfile/PreferredCityTable.vue";
import UserImage from "@/components/image/UserImage.vue";
import ImageInput from "@/components/image/ImageInput.vue";
import UserImageService from "@/services/UserImageService";
import PreferredCityService from "@/services/PreferredCityService";
import CityService from "@/services/CityService";
import AddCityModal from "@/components/modal/AddCityModal.vue";

export default {
  name: 'StudentProfileView',
  components: {
    AddCityModal,
    ImageInput,
    UserImage,
    PreferredCityTable,
    StudentEditProfileTable,
    StudentProfileTable: StudentViewProfileTable
  },
  props: {
    isStudent: Boolean,

  },


  data() {
    return {
      isEditMode: false,
      userId: Number(sessionStorage.getItem('userId')),
      isStudent: true,
      modalIsOpen: false,
      cityName: '',

      studentProfile: {
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        linkedin: '',
        email: '',
        intro: ''
      },

      userImageDto: {
        userId: '',
        userImageData: ''
      },

      studentPreferredCities: [
        {
          userId: 0,
          cityId: 0
        }
      ],

      cityDropdown: [
        {
          cityId: 0,
          cityName: 0
        }
      ],

      cvFileData: {
        userId: '',
        cvData: '',
      }

    }
  },
  methods: {

    setStudentProfileAddress(address) {
      this.studentProfile.address = address
    },
    setStudentProfilePhone(phone) {
      this.studentProfile.phone = phone
    },
    setStudentProfileEmail(email) {
      this.studentProfile.email = email
    },
    setStudentProfileLinkedin(linkedin) {
      this.studentProfile.linkedin = linkedin
    },

    startEdit() {
      this.isEditMode = true
    },
    saveEdit() {
      StudentProfileService.updateStudentProfile(this.userId, this.studentProfile)
          .then(response => {
            this.isEditMode = false;

          })
          .catch(error => {
            console.error('Error saving profile: ', error);
            alert('Profiili salvestamisel tekkis vida');
          });
    },

    getStudentProfile() {
      StudentProfileService.sendGetStudentProfile(this.userId)
          .then(response => this.studentProfile = response.data)
          .catch(() => NavigationService.navigateToErrorView());
    },
    getUserImage() {
      UserImageService.sendGetUserImage(this.userId)
          .then(response => this.userImageDto = response.data)
          .catch(() => NavigationService.navigateToErrorView());
    },

    sendPostUserImage(imageData) {
      this.userImageDto.userImageData = imageData
      UserImageService.sendPostUserImage(this.userId, this.userImageDto)
    },

    sendDeleteUserImage() {
      UserImageService.sendDeleteUserImage(this.userId)
    },

    getStudentPreferredCities() {
      PreferredCityService.sendGetPreferredCityList(this.userId)
          .then(response => {
            this.studentPreferredCities = response.data;
          })
          .catch(() => NavigationService.navigateToErrorView());
    },
    handleRemoveCity(cityId) {
      PreferredCityService.sendDeletePreferredCity(this.userId, cityId)
          .then(() => this.getStudentPreferredCities())
          .catch(error => {
            console.error('Error removing city:', error);
            alert('Linna eemaldamisel tekkis viga');
          });
    },

    handleAddCity(cityId) {
      PreferredCityService.sendPostPreferredCity(this.userId, cityId)
          .then(() => {
                this.getStudentPreferredCities();
                this.closeAddCityModal();

              }
          )
          .catch(error => {
            console.error('Error adding city', error);
            alert('Linna lisamisel tekkis viga');
          })

    },

    sendGetCityList() {
      CityService.sendGetCities()
          .then(response => {
            this.cityDropdown = response.data; // Array of {cityId, cityName}
          })
          .catch(() => NavigationService.navigateToErrorView());
    },

    openAddCityModal() {
      this.modalIsOpen = true

    },

    closeAddCityModal() {
      this.modalIsOpen = false
    }


  },

  beforeMount() {
    this.getStudentProfile()
    this.getUserImage()
    this.getStudentPreferredCities()
    this.sendGetCityList()

  }
}

</script>

<style scoped>
.background {
  background-image: url('@/assets/img.png'); /* Use require() if needed */
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.title {
  color: black; /* Change the heading color to black */
}

/* Style for text boxes */
.text-box {
  background-color: rgba(255, 255, 255, 0.8); /* Light background */
  padding: 20px;
  border-radius: 8px;
  color: black;
  margin: 10px;
  text-align: left; /* Aligns text to the left */
}

/* Align lists to the left */
.left-align-list {
  text-align: left;
  padding-left: 20px; /* Adjust for better indentation */
  list-style-type: disc; /* Ensures bullets appear */
}

.left-align-list ul {
  padding-left: 20px; /* Nested list indentation */
}

.btn.btn-outline-success {
  width: 50%;
  max-width: 200px;
  background-color: #28a745;
  color: white;
  border-color: #28a745;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.btn.btn-outline-primary {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);  /* Slight lift on hover */
}

.textarea-fixed {
  resize: none;
  width: 100%;
  height: auto;
  min-height: 200px;
  overflow: visible;
  background-color: rgba(255, 255, 255, 0.8); /* Light background */
  padding: 20px;
  border-radius: 8px;
  color: black;
  margin: 10px;
  text-align: left;
}
</style>
