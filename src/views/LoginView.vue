<template>
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

      <button @click="navigateToCompanyRegisterView" type="submit" class="btn btn-secondary">Registreeri ettevõte</button>
      <button @click="navigateToStudentRegisterView" type="submit" class="btn btn-secondary">Registreeri õppur</button>

      <div>
      </div>
    </div>
  </div>
</template>

<script>

import AlertDanger from "@/components/alert/AlertDanger.vue";
import LoginService from "@/services/LoginService";
import {HttpStatusCode} from "axios";

export default {
  name: 'LoginView',
  components: {AlertDanger},
  data() {
    return {
      email:'',
      password:'',
      loginResponse: {
        userId: 0,
        role: '', // Kas rolli on vaja?
      },
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {
    login () {
      if (this.allFieldsAreWithCorrectInput()) {
        this.sendLoginRequest();
        } else {
        this.alertMissingFields();
      }
    },
    allFieldsAreWithCorrectInput () {
      return this.email.length > 0 && this.password.lenght > 0;
    },

    sendLoginRequest () {
      LoginService.sendLoginRequest(this.email, this.password)
          .then(response => this.handleLoginResponse(response))
          .catch(error => this.handleLoginErrorResponse(error))
    },

    handleLoginResponse(response) {
      this.loginResponse = response.data
      this.updateSessionStorageWithUserDetails()
      this.$emit(event:'event-update-nav-menu')
      NavigationService // vastavalt kasutaja rollile kas ettevõtte või õpilase vaatesse
    },

    updateSessionStorageWithUserDetails() {
      sessionStorage.setItem('userId', this.loginResponse.userId)
      sessionStorage.setItem(role, this.loginResponse.role)
    },

    handleLoginErrorResponse(error) {
      this.errorResponse = error.response.data
      let httpStatusCode = error.response.status;

      if (this.isIncorrectCredentials(httpStatusCode)) {
        this.handleIncorrectCredentialsAlert()
      } else {
        NavigationServise.navigationToErrorView()
      }
    },

    isIncorrectCredentials(httpStatusCode) {
      return HttpStatusCode.STATUS_FORBIDDEN  === httpStatusCode
          && BusinessErrors.CODE_INCORRECT_CREDENTIALS === this.errorResponse.errorCode; // VAJA TEHA
    },

    alertMissingFields () {
      this.message = 'Täida kõik väljad'
      setTimeout (this.resetAlertMessage // Timeoutist ei saa aru
  },

},
</script>