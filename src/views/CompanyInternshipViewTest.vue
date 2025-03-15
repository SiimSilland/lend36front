<template>
  <div>
    <div class="background">
      <div class="company-profile-page">
        <div class="container text-center-left">
          <div class="row justify-content-center">
            <h1 class="title">Praktikavõimalused</h1>

            <!-- Show edit form when in edit mode -->
            <div v-if="isEditMode">
              <InternshipEditTable
                  :newInternship="newInternship"
                  @event-title-changed="setInternshipTitle"
                  @event-description-changed="setInternshipDescription"
                  @event-name-changed="setInternshipName"
                  @event-email-changed="setInternshipEmail"
              />
            </div>

            <!-- Show view-only table when not in edit mode -->
            <div v-else>
              <InternshipViewTable :newInternship="newInternship" />
            </div>
          </div>

          <!-- Edit/Save Buttons -->
          <div class="col text-center">
            <button v-if="!isEditMode" @click="startEdit" type="button" class="btn btn-outline-success me-3">Muuda</button>
            <button v-if="isEditMode" @click="saveEdit" type="button" class="btn btn-outline-success me-3">Salvesta</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyService from "@/services/CompanyService";
import InternshipViewTable from "@/components/Internship/InternshipViewTable.vue";
import InternshipEditTable from "@/components/Internship/InternshipEditTable.vue";

export default {
  name: "CompanyInternshipView",
  components: { InternshipEditTable, InternshipViewTable },
  data() {
    return {
      isEditMode: false,
      newInternship: {
        title: '',
        description: '',
        name: '',
        email: ''
      }
    };
  },
  methods: {
    setInternshipTitle(title) {
      this.newInternship.title = title;
    },
    setInternshipDescription(description) {
      this.newInternship.description = description;
    },
    setInternshipEmail(email) {
      this.newInternship.email = email;
    },
    setInternshipName(name) {
      this.newInternship.name = name;
    },

    startEdit() {
      this.isEditMode = true;
    },

    saveEdit() {
      const userId = 1; // Replace with dynamic user ID logic
      CompanyService.sendNewInternshipRequest(this.newInternship, userId)
          .then(() => {
            this.isEditMode = false;
          })
          .catch(error => {
            console.error('Error saving internship: ', error);
            alert('Praktika salvestamisel tekkis viga');
          });


    }
  },

};
</script>