<template>
  <div>
    <table class="table">
      <tbody>
      <tr>
        <th scope="row">Positsioon</th>
        <td>{{ newInternship.title }}</td>
      </tr>
      <tr>
        <th scope="row">Kirjeldus</th>
        <td>{{ newInternship.description }}</td>
      </tr>
      <tr>
        <th scope="row">Kordinaator</th>
        <td>{{ newInternship.name }}</td>
      </tr>
      <tr>
        <th scope="row">Email</th>
        <td>{{ newInternship.email }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "InternshipViewTable",
  props: {
    newInternship: Object
  }
};
</script>