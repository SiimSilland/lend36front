<template>
  <nav>
    <template v-if="userRole === 'admin'">
    <router-link to="/company">Õppurid</router-link> |
    <router-link to="/student/register">Ettevõtted</router-link> |
    <router-link to="/login">Logi välja</router-link>
    </template>
    <template v-else-if="userRole === 'student'">
    <router-link to="/company">Ettevõtete ülesanded</router-link> |
    <router-link to="/student/register">Ettevõtted</router-link> |
    <router-link to="/login">Logi välja</router-link>
    </template>
    <template v-else-if="userRole === 'company'">
    <router-link to="/company">Lisa koodi ülesanne</router-link> |
    <router-link to="/student/register">Praktikantide CV'd</router-link> |
    <router-link to="/login">Logi välja</router-link>
    </template>
    <template v-else>
    <router-link to="/company">Ettevõttele</router-link> |
    <router-link to="/student/register">Õppurile</router-link> |
    <router-link to="/student/register">Plogi</router-link> |
    <router-link to="/login">Logi sisse</router-link>
    </template>
  </nav>
  <router-view/>
</template>

<script>

import AlertDanger from "@/components/alert/AlertDanger.vue";

export default {
  name: 'HomeView',
  components: {AlertDanger},

  data() {
  return{
    userRole: ''
  }

  },
  created() {
    this.userRole = this.getUserRole();
  },
  methods:{
  getUserRole(){
    return '';
  }
  }
}

</script>