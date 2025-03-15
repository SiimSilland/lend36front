<template>
  <div>
    <div v-for="project in projects" :key="project.id" class="project-box">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      studentProfile: []
    };
  },
  mounted() {
    this.fetchStudentProfiles();
  },
  methods: {
    async fetchStudentProfiles() {
      try {
        const response = await axios.get('http://localhost:8080/student/profile');
        this.projects = response.data;
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    }
  }
};
</script>



<style>
.project-box {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 5px;
}
</style>