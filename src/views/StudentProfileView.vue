<template>
  <div v-if="isStudent">
    <div class="row">
      <div class="col">
        <h1> {{ studentProfile.firstName }} {{ studentProfile.lastName }}</h1>
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
            <div class="row">Lühitutvustus</div>
            <div class="row">(SIIA LÜHITUTVUSTUS)</div>
          </div>
          <div class="col">
            <div class="row">
              <UserImage :user-image-data="userImageDto.userImageData"/>
            </div>
            <div class="row">
              <h3>
                <button @click="sendDeleteUserImage" type="button" class="btn btn-outline-primary">kustuta pilt</button>
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
    <div>
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <div class="row">Eelistatud praktika algus</div>
            <div class="row">(SIIA KALENDER)</div>
          </div>
          <div class="col">
            <h3>Tühi column</h3>
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

export default {
  name: 'StudentProfileView',
  components: {
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
      cityName: '',

      studentProfile: {
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        linkedin: '',
        email: ''
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

      cityDropdown: [],

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

    sendGetCityList() {
      CityService.sendGetCities()
          .then(response => {
            this.cityDropdown = response.data; // Array of {cityId, cityName}
          })
          .catch(() => NavigationService.navigateToErrorView());
    },
  },


  beforeMount() {
    this.getStudentProfile()
    this.getUserImage()
    this.getStudentPreferredCities()
    this.sendGetCityList()

  }
}

</script>

