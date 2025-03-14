<template>
  <div class="background">
    <div>

      <div class="container text-center">

        <div class="row justify-content-center">
          <div class="col col-8">
            <AlertDanger :message="message"/>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col col-4">
            <div>
              <div class="mb-3">
                <label class="form-label">e-post</label>
                <input v-model="email" type="text" class="form-control">
              </div>

              <div class="mb-3">
                <label class="form-label">parool</label>
                <input v-model="password" type="text" class="form-control">
              </div>

              <button @click="login" type="submit" class="btn btn-primary me-3">Logi sisse</button>

            </div>
          </div>
        </div>

        <button @click="navigateToCompanyRegisterView" type="submit" class="btn btn-secondary me-6">Registreeri
          ettevõte
        </button>
        <button @click="navigateToStudentRegisterView" type="submit" class="btn btn-secondary me-6">Registreeri õppur
        </button>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>

import AlertDanger from "@/components/alert/AlertDanger.vue";
import LoginService from "@/services/LoginService";
import NavigationService from "@/services/NavigationService";
import BusinessErrors from "@/errors/BusinessErrors";
import HttpStatusCode from "@/errors/HttpStatusCodes";

export default {
  name: 'LoginView',
  components: {AlertDanger},

  data() {
    return {
      message: '',
      email: '',
      password: '',
      loginResponse: {
        userId: 0,
        roleName: ''
      },
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {

    login() {
      if (this.allFieldsAreWithCorrectInput()) {
        this.sendLoginRequest();
      } else {
        this.alertMissingFields();
      }
    },

    allFieldsAreWithCorrectInput() {
      return this.email.length > 0 && this.password.length > 0;
    },

    sendLoginRequest() {
      LoginService.sendLoginRequest(this.email, this.password)
          .then(response => this.handleLoginResponse(response))
          .catch(error => this.handleLoginErrorResponse(error))
    },

    handleLoginResponse(response) {
      this.loginResponse = response.data
      this.updateSessionStorageWithUserDetails()
      this.$emit('event-update-nav-menu')

      if (this.loginResponse.roleName === 'admin') {
        NavigationService.navigateToGroupView()
      } else if (this.loginResponse.roleName === 'student') {
        NavigationService.navigateToStudentProfileView()
      } else if (this.loginResponse.roleName === 'company') {
        NavigationService.navigateToCompanyProfileView()
      }
    },

    updateSessionStorageWithUserDetails() {
      sessionStorage.setItem('userId', this.loginResponse.userId)
      sessionStorage.setItem('roleName', this.loginResponse.roleName)
    },

    handleLoginErrorResponse(error) {
      this.errorResponse = error.response.data
      let httpStatusCode = error.response.status;

      if (this.isIncorrectCredentials(httpStatusCode)) {
        this.handleIncorrectCredentialsAlert()
      } else {
        NavigationService.navigateToErrorView()
      }
    },

    isIncorrectCredentials(httpStatusCode) {
      return HttpStatusCode.STATUS_FORBIDDEN === httpStatusCode
          && BusinessErrors.CODE_INCORRECT_CREDENTIALS === this.errorResponse.errorCode;
    },

    alertMissingFields() {
      this.message = 'Täida kõik väljad'
      //   setTimeout (this.resetAlertMessage // Timeoutist ei saa aru
    },

    handleIncorrectCredentialsAlert() {
      this.message = this.errorResponse.message
      setTimeout(this.resetMessage, 4000)
    },

    resetMessage() {
      this.message = ''
    },

    navigateToCompanyRegisterView() {
      NavigationService.navigateToCompanyRegisterView()
    },

    navigateToStudentRegisterView() {
      NavigationService.navigateToStudentRegisterView()
    },

  }
}
</script>

<style scoped>
.background {
  background-image: url('@/assets/img.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>