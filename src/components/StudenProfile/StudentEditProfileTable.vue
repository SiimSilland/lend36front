<template>
  <div>
    <table class="table">
      <tbody>
      <tr>
        <th scope="row">Aadress</th>
        <td><input :value="studentProfile.address"></td>
      </tr>
      <tr>
        <th scope="row">Telefon</th>
        <td>{{ studentProfile.phone }}</td>
      </tr>
      <tr>
        <th scope="row">e-post</th>
        <td colspan="2">
          <input
              :value="studentProfile.email"
              @input="$emit('event-email-changed', $event.target.value)"
          >
        </td>
      </tr>
      <tr>
        <th scope="row">linkedin</th>
        <td colspan="2">{{ studentProfile.linkedin }}</td>
      </tr>
      </tbody>
    </table>

  </div>

</template>

<script>

export default {
  name: "StudentEditProfileTable",
  props:{
    studentProfile: Object
  },
  methods: {

  }
}
</script>
