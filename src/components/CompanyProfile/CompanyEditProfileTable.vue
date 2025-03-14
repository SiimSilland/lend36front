<template>
  <div>
    <table class="table">
      <tbody>
      <tr>
        <th scope="row">Nimi</th>
        <td><input :value="companyProfile.companyName"
                   @input="$emit('event-companyName-changed', $event.target.value)"
        >
        </td>
      </tr>
      <tr>
        <th scope="row">Registreerimis nr.</th>
        <td><input :value="companyProfile.registrationNumber"
                   @input="$emit('event-registrationNumber-changed', $event.target.value)"
        >
        </td>
      </tr>
      <tr>
        <th scope="row">Email</th>
        <td><input :value="companyProfile.email"
                   @input="$emit('event-email-changed', $event.target.value)"
        >
        </td>

      </tr>
      <tr>
        <th scope="row">Aadress</th>
        <td><input :value="companyProfile.address"
                   @input="$emit('event-address-changed', $event.target.value)"
        >
        </td>
      </tr>
      <tr>
        <th scope="row">Telefon</th>
        <td> <input :value="companyProfile.phoneNumber"
                    @input="$emit('event-phone-changed', $event.target.value)"
        > </td>
      </tr>
      <tr>
        <th scope="row">wwe</th>
        <td colspan="2">
          <input
              :value="companyProfile.www"
              @input="$emit('event-www-changed', $event.target.value)"
          >
        </td>
      </tr>
      <tr>
        <th scope="row">description</th>
        <td colspan="2">
          <input
              :value="companyProfile.description"
              @input="$emit('description-changed', $event.target.value)"> </td>
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
