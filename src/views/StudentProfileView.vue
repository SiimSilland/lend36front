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
          </div>
          <div class="col">
            Lühitutvustus
          </div>
          <div class="col">
            PILT
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <h5>EELISTUSED PRAKTIKA ALGUSE OSAS</h5>
          </div>
          <div class="col">
            (SIIA LÜHITUTVUSTUS)
          </div>
          <div class="col">
            <h3>MUUD ISIKLIKUD ANDMED</h3>
            <StudentEditProfileTable v-if="isEditMode" :student-profile="studentProfile"
              @event-email-changed="setStudentProfileEmail"
            />
            <StudentProfileTable v-else :student-profile="studentProfile"/>
            <h3>
              <button v-if="!isEditMode" @click="startEdit" type="button" class="btn btn-outline-success me-3">Muuda
              </button>
              <button type="button" class="btn btn-outline-primary">Lisa CV</button>
            </h3>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div v-else class="unauthorized-message">
    <h2> Juuredepääs keelatud </h2>
    <p>Teil pole selle lehe vaatamiseks õiguse.</p>
  </div>
</template>
<script>

import StudentViewProfileTable from "@/components/StudenProfile/StudentViewProfileTable.vue";
import StudentProfileService from "@/services/StudentProfileService";
import NavigationService from "@/services/NavigationService";
import axios from "axios";
import StudentEditProfileTable from "@/components/StudenProfile/StudentEditProfileTable.vue";

export default {
  name: 'StudentProfileView',
  components: {StudentEditProfileTable, StudentProfileTable: StudentViewProfileTable},
  props: {
    isStudent: Boolean,

  },

  data() {
    return {
      isEditMode: false,
      userId: Number(sessionStorage.getItem('userId')),
      isStudent: true,

      studentProfile: {
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        linkedin: '',
        email: ''
      }

    }
  },
  methods: {
    setStudentProfileEmail(email) {
      this.studentProfile.email = email
    },

    startEdit() {
      this.isEditMode = true
    },

    getStudentProfile() {
      StudentProfileService.sendGetStudentProfile(this.userId)
          .then(response => this.studentProfile = response.data)
          .catch(() => NavigationService.navigateToErrorView());
    },
  },
  beforeMount() {
    this.getStudentProfile()
  }
}

</script>

