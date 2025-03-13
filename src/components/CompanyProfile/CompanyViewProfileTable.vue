<template>
  <div>
    <table class="table">
      <tbody>
      <tr>
        <th scope="row">Aadress</th>
        <td>{{ companyProfile.address }}</td>
      </tr>
      <tr>
        <th scope="row">Telefon</th>
        <td>{{ companyProfile.phone }}</td>
      </tr>
      <tr>
        <th scope="row">e-post</th>
        <td colspan="2">{{ companyProfile.email }}</td>
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
