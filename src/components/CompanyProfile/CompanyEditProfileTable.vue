<template>
  <div>
    <table class="table">
      <tbody>
      <tr>
        <th scope="row">Aadress</th>
        <td><input :value="companyProfile.address"
                   @input="$emit('event-address-changed', $event.target.value)"
        >
        </td>
      </tr>
      <tr>
        <th scope="row">Telefon</th>
        <td> <input :value="companyProfile.phone"
                    @input="$emit('event-phone-changed', $event.target.value)"
        > </td>
      </tr>
      <tr>
        <th scope="row">wwe</th>
        <td colspan="2">
          <input
              :value="companyProfile.www"
              @input="$emit('wwwchanged', $event.target.value)"
          >
        </td>
      </tr>
      <tr>
        <th scope="row">description</th>
        <td colspan="2"> <input :value="companyProfile.description"
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
