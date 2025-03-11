<template>
 <div v-if="isStudent">
  <div class="row">
    <div class="col">
      <h1>SIIA ÕPILASE NIMI!</h1>
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
          SIIA PILT JA MUUD ISIKLIKUD ANDMED
        </div>
      </div>
    </div>

  </div>
  <div>
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col">
          EELISTUSED PRAKTIKA ALGUSE OSAS
        </div>
        <div class="col">

          (SIIA LÜHITUTVUSTUS)

        </div>
        <div class="col">
          SIIA PILT JA MUUD ISIKLIKUD ANDMED
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
export default {
  name: 'StudentProfileView',

  data() {
    return {
      isStudent: false
    }

  },

  mounted(){
    this.checkUserRole()
  },

  methods:{
    checkUserRole(){
      const roleName = sessionStorage.getItem('roleName')
      this.isStudent = roleName === 'student'

      if (!this.isStudent){
        setTimeout(() => {
          this.$router.push('/')
        }, 2000)

      }
    }
  }
}

</script>

