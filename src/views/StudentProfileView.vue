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
            <StudentProfileTable />
            <h3> <button type="button" class="btn btn-outline-primary">Lisa CV</button> </h3>
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

import axios from "axios";
import StudentProfileTable from "@/components/StudenProfile/StudentProfileTable.vue";
import StudentProfileService from "@/services/StudentProfileService";

export default {
  name: 'StudentProfileView',
  components: {StudentProfileTable},
  props:{
    isStudent: Boolean,

  },

  data() {
    return {
      isStudent: false,

      studentProfile: {
        firstName: '',
        lastName: ''
      }

    }
  },

  mounted() {
    const userId = this.getUserId();
    if (userId){
      this.fetchStudentProfile()
    }
  },

  methods: {

    checkUserRole() {
      const roleName = sessionStorage.getItem('roleName')
      this.isStudent = roleName === 'student'

      if (!this.isStudent) {
        setTimeout(() => {
          this.$router.push('/')
        }, 2000)

      }
    },

    getUserId(){
      return sessionStorage.getItem('userId');
    },

    fetchStudentProfile(){
      return  StudentProfileService.sendGetStudentProfile('userId');
    }

  },
  beforeMount() {
    this.checkUserRole();
  }
}

</script>

