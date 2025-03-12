<template>
  <div>
    <table class="table">
      <tbody>
      <tr>
        <th scope="row">Aadress</th>
        <td>{{ studentProfile.address }}</td>
      </tr>
      <tr>
        <th scope="row">Telefon</th>
        <td>{{ studentProfile.phone }}</td>
      </tr>
      <tr>
        <th scope="row">e-post</th>
        <td colspan="2">{{ studentProfile.email }}</td>
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
  name: "StudentViewProfileTable",
  props:{
    studentProfile: Object
  },
  methods: {

  }
}
</script>
