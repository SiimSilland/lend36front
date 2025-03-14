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
            EELISTUSED ASUKOHA OSAS
            <div class="row">
              <PreferredCityTable/>
            </div>
          </div>
          <div class="col">

            <div class="row">Lühitutvustus</div>
            <div class="row">(SIIA LÜHITUTVUSTUS)</div>

          </div>
          <div class="col">
            <div class="row">
             <UserImage :image-data="userImageDto.userImageData"/>
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

                <button type="button" class="btn btn-outline-primary">Lisa CV</button>
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
            <h3>Tühi column</h3>
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

export default {
  name: 'StudentProfileView',
  components: {ImageInput, UserImage, PreferredCityTable, StudentEditProfileTable, StudentProfileTable: StudentViewProfileTable},
  props: {
    isStudent: Boolean,

  },


  data() {
    return {
      isEditMode: false,
      userId: Number(sessionStorage.getItem('userId')),
      isStudent: true,
      cityName:'',

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

      preferredCity: {
        userId:'',
        cityId:''
      },

      City: {
        cityId:'',
        cityName:'',
      },

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

    sendPostUserImage(){
      UserImageService.sendPostUserImage(this.userId, this.userImageDto)
    },

    sendDeleteUserImage(){
      UserImageService.sendDeleteUserImage(this.userId)
    }

  },
  beforeMount() {
    this.getStudentProfile()
    this.getUserImage()

  }
}

</script>

