<template>
  <div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col">
          <h1>Uue ettevõtte registreerimine</h1>
          <AlertDanger :message="errorMessage"/>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col col-3">

          <div class="input-group mb-3">
            <span class="input-group-text">email</span>
            <input v-model="newCompany.name" type="text" class="form-control">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">email</span>
            <input v-model="newCompany.registrationNumber" type="text" class="form-control">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">email</span>
            <input v-model="newCompany.email" type="text" class="form-control"> // KAs uus ettevõte või uus kasutaja?
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">parool</span>
            <input v-model="newCompany.password" type="password" class="form-control">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">parool uuesti</span>
            <input v-model="passwordRetype" type="password" class="form-control">
          </div>

          <button @click="addNewCompany" type="submit" class="btn btn-outline-success">Registreeri</button>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import AlertDanger from "@/components/alert/AlertDanger.vue";
import UserService from "@/services/UserService";
import NavigationService from "@/services/NavigationService";

export default {
  name: "CompanyRegisterView",
  components: {AlertDanger},
  data() {
    return {
      errorMessage: '',
      passwordRetype: '',
      newCompany: {
        name: '',
        registrationNumber: '',
        email: '',
        password: ''
      },
    }
  },
  methods: {
    passwordNoMatch() {
      return this.passwordRetype !== this.newCompany.password;
    },

    addNewCompany() {
      if (this.passwordNoMatch()) {
        this.errorMessage = "Paroolid ei kattu"
      } else {
        UserService.sendPostNewCompanyRequest(this.newCompany)
            .then(() => NavigationService.navigateToCompanyProfileView)
      }

    }
  }
}
</script>



<style scoped>

</style>