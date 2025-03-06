<template>
  <div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col">
          <h1>Uue õppuri registreerimine</h1>
          <AlertDanger :message="errorMessage"/>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col col-3">

          <div class="input-group mb-3">
            <span class="input-group-text">email</span>
            <input v-model="newStudent.email" type="text" class="form-control">
          </div>


          <div class="input-group mb-3">
            <span class="input-group-text">parool</span>
            <input v-model="newStudent.password" type="password" class="form-control">
          </div>


          <div class="input-group mb-3">
            <span class="input-group-text">parool uuesti</span>
            <input v-model="passwordRetype" type="password" class="form-control">
          </div>


          <button @click="addNewStudent" type="submit" class="btn btn-outline-success">Registreeri</button>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import AlertDanger from "@/components/alert/AlertDanger.vue";

export default {
  name: "StudentRegisterView",
  components: {AlertDanger}
}
</script>



<style scoped>

</style>