<template>
  <div>
    <div class="background">
      <div class="company-profile-page">
        <div class="container text-center-left">
          <div class="row justify-content-center">
            <h1 class="title">Praktikavõimalused</h1>

            agenda
            <form style="display: flex; align-items: flex-start; gap: 10px;">
              <label for="position">Positsioon</label>
              <input v-model="newInternship.title" type="text" style="vertical-align: top;" />
              <label for="description">Kirjeldus</label>
              <input v-model="newInternship.description" type="text" style="vertical-align: top;" />
            </form>

            <div class="spacer"></div>

            <h3 class="title">Praktikakoordinaator</h3>

            <div class="form-group">
              <input v-model="newInternship.name" id="name" name="name" />
              <label for="name">Nimi</label>
            </div>

            <div class="form-group">
              <input v-model="newInternship.email" id="email" name="email" />
              <label for="email">Email</label>
            </div>

            <button @click.prevent="addNewInternship" class="btn btn-outline-success">Uuenda</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavigationService from "@/services/NavigationService";
import CompanyService from "@/services/CompanyService";

export default {
  name: "CompanyInternshipView",
  data() {
    return {
      newInternship: {
        title: '',
        description: '',
        name: '',
        email: ''
      }
    };
  },
  methods: {
    addNewInternship() {
      CompanyService.sendPostNewInternshipRequest(this.newInternship)
          .then(() => NavigationService.navigateToLoginView())

    }
  }
};
</script>

<style scoped>
.background {
  background-image: url("@/assets/img.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.company-profile-page {
  padding: 20px;
  color: white;
}

label {
  color: black;
}

.title {
  color: black;
}

input,
textarea {
  color: black;
}

.form-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.spacer {
  margin-top: 30px;
}
</style>