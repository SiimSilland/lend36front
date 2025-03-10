<template>
  <nav>
    <template v-if="isAdmin">
    <router-link to="/sudent/register">Õppurid</router-link> |
    <router-link to="/student/companies">Ettevõtted</router-link> |
    <router-link @click="executeLogOut" to="/">Logi välja</router-link>
    </template>
    <template v-else-if="isStudent">
    <router-link to="/companies">Ettevõtete ülesanded</router-link> |
    <router-link to="/companies">Ettevõtted</router-link> |
    <router-link @click="executeLogOut" to="/">Logi välja</router-link>
    </template>
    <template v-else-if="isCompany">
    <router-link to="/company">Lisa koodi ülesanne</router-link> |
    <router-link to="/student/">Praktikantide CV'd</router-link> |
    <router-link @click="executeLogOut" to="/">Logi välja</router-link>
    </template>
    <template v-else>
    <router-link to="/company">Ettevõttele</router-link> |
    <router-link to="/student/register">Õppurile</router-link> |
    <router-link to="/blog">Plogi</router-link> |
    <router-link to="/login">Logi sisse</router-link>
    </template>
  </nav>
  <router-view/>
</template>

<script>

import AlertDanger from "@/components/alert/AlertDanger.vue";
import NavigationService from "@/services/NavigationService";

export default {
  name: 'HomeView',
  components: {AlertDanger},

  data() {
    return{
      isLoggedIn: false,
      isAdmin: false,
      isStudent: false,
      isCompany: false,
    }
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


  }
}















</script>