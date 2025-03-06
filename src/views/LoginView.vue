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

export default {
  name: 'LoginView'
}
</script>