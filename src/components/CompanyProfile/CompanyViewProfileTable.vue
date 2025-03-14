<template>
  <div>
    <table class="table">
      <tbody>
      <tr>
        <th scope="row">Nimi</th>
        <td>{{ companyProfile.companyName }}</td>
      </tr>
      <tr>
        <th scope="row">Registreerimis nr</th>
        <td>{{ companyProfile.registrationNumber }}</td>
      </tr>
      <tr>
        <th scope="row">Email</th>
        <td>{{ companyProfile.email }}</td>
      </tr>
      <tr>
        <th scope="row">Aadress</th>
        <td>{{ companyProfile.address }}</td>
      </tr>
      <tr>
        <th scope="row">Telefon</th>
        <td>{{ companyProfile.phone }}</td>
      </tr>
      <tr>
        <th scope="row">www</th>
        <td colspan="2">{{ companyProfile.www}}</td>
      </tr>
      </tbody>
    </table>

  </div>

</template>

<script>

export default {
  name: "CompanyViewProfileTable",
  props:{
    companyProfile: Object
  },
  methods: {

  }
}
</script>
