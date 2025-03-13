<template>
  <div>
    <table class="table">
      <tbody>
      <tr>
        <th scope="row">Aadress</th>
        <td><input :value="companyProfile.address"></td>
      </tr>
      <tr>
        <th scope="row">Telefon</th>
        <td>{{ companyProfile.phone }}</td>
      </tr>
      <tr>
        <th scope="row">e-post</th>
        <td colspan="2">
          <input
              :value="companyProfile.email"
              @input="$emit('event-email-changed', $event.target.value)"
          >
        </td>
      </tr>

      </tbody>
    </table>

  </div>

</template>

<script>

export default {
  name: "CompanyEditProfileTable",
  props:{
    companyProfile: Object
  },
  methods: {

  }
}
</script>
