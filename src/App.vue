<template>
    <nav>
      <template v-if="isAdmin">
        <router-link to="/admin/group">Lennud</router-link> |
        <router-link to="/admin/email">Õppurid</router-link> |
        <router-link to="/admin/company">Ettevõtted</router-link> |
        <router-link @click="executeLogOut" to="/">Logi välja</router-link>
      </template>
      <template v-else-if="isStudent">
        <router-link to="/student/task">Ettevõtete ülesanded</router-link> |
        <router-link to="/student/company-list">Ettevõtete nimekiri</router-link> |
        <router-link to="/student/profile">Minu profiil</router-link> |
        <router-link @click="executeLogOut" to="/">Logi välja</router-link>
      </template>
      <template v-else-if="isCompany">
        <router-link to="/company/task-list">koodiülesanded</router-link> |
        <router-link to="/company/students">Praktikantide CV'd</router-link> |
        <router-link to="/company/internship">Praktika võimalused</router-link> ||
        <router-link to="/company/profile">Ettevõtte profiil</router-link> |
        <router-link @click="executeLogOut" to="/">Logi välja</router-link>
      </template>
      <template v-else>
        <router-link to="/company">Ettevõttele</router-link> |
        <router-link to="/student/register">Õppurile</router-link> |
        <router-link to="/blog">Blogi</router-link> |
        <router-link to="/login">Logi sisse</router-link>
      </template>
    </nav>
  <router-view @event-update-nav-menu="updateNavMenu"/>
</template>

<script>

import AlertDanger from "@/components/alert/AlertDanger.vue";
import NavigationService from "@/services/NavigationService";

export default {
  name: 'App',
  components: {AlertDanger},

  data() {
    return{
      isLoggedIn: false,
      isAdmin: false,
      isStudent: false,
      isCompany: false,
    }
  },

  mounted(){
    this.updateNavMenu()
  },

  methods:{

    executeLogOut(){
      sessionStorage.clear()
      this.updateNavMenu()
      NavigationService.navigateToHomeView()
      this.isLoggedIn = false
    },

    updateNavMenu(){
      let userId = sessionStorage.getItem('userId')
      this.isLoggedIn = userId !== null
      let roleName = sessionStorage.getItem('roleName')
      this.isAdmin = roleName != null && 'admin' === roleName
      this.isStudent = roleName != null && 'student' === roleName
      this.isCompany = roleName != null && 'company' === roleName
    }

  },
  beforeMount() {
    this.updateNavMenu()
  }
}
</script>
