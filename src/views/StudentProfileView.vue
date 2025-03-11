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
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item">Aadress </li>
              <li class="list-group-item">
                {{studentProfile.address}}
              </li>

            </ul>
            <h3> PROOVIKAS teise põhja jaoks </h3>

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

export default {
  name: 'StudentProfileView',

  data() {
    return {
      isStudent: false,

      studentProfile: {
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        linkedin: '',
        email: ''
      },
      error: null

    }

  },

  mounted() {
    this.checkUserRole();
    if (this.isStudent)
    {
      this.fetchStudentProfile();
    }
  },

  methods: {
    //todo: pildi lisamine

    checkUserRole() {
      const roleName = sessionStorage.getItem('roleName')
      this.isStudent = roleName === 'student'

      if (!this.isStudent) {
        setTimeout(() => {
          this.$router.push('/')
        }, 2000)

      }
    },

    fetchStudentProfile() {
      const userId = sessionStorage.getItem('userId');
      if (!userId) {
        this.error = 'User ID not found in session';
      }
      axios.get('/student/profile/get', {
        params: {
          userId: userId
        }
      })
          .then(response => {
            this.studentProfile = response.data;
          })
          .catch(error => {
            console.error('Error fetching student profile: ', error);
            this.error = 'Failed to load student profile';
          })

    },

    // todo: miks beforeMount ei rakendu?
    beforeMount() {
      this.checkUserRole();
    }

  }
}

</script>

