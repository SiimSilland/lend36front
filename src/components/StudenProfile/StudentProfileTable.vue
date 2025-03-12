

<template>
<div>
  <table class="table">
    <tbody>
    <tr>
      <th scope="row">Aadress</th>
      <td>{{studentProfile.address}}}</td>
    </tr>
    <tr>
      <th scope="row">Telefon</th>
      <td>{{studentProfile.phone}}</td>
    </tr>
    <tr>
      <th scope="row">e-post</th>
      <td colspan="2">{{studentProfile.email}}}</td>
    </tr>
    <tr>
      <th scope="row">linkedin</th>
      <td colspan="2">{{studentProfile.linkedin}}}</td>
    </tr>
    </tbody>
  </table>

</div>

</template>

<script>
import StudentProfileService from "@/services/StudentProfileService";

export default {
  name: "StudentProfileTable",

  data() {
    return {
      studentProfile: {
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        linkedin: '',
        email: ''
      },
    }
  },

  mounted() {
    const userId = this.getUserId();
    if (userId){
      this.fetchStudentProfile()
    }
  },

  methods: {

    getUserId(){
      return sessionStorage.getItem('userId');
    },

    fetchStudentProfile(userId){
      return  StudentProfileService.fetchStudentProfile('userId');
    }

  }

}

</script>
