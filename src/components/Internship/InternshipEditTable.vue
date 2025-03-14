<template>
  <div>
    <table class="table">
      <tbody>
      <tr>
        <th scope="row">Positsioon</th>
        <td><input :value="newInternship.title"
                   @input="$emit('event-title-changed', $event.target.value)"
        ></td>
      </tr>
      <tr>
        <th scope="row">Kirjeldus</th>
        <td><input :value="newInternship.description"
                   @input="$emit('event-description-changed', $event.target.value)"
        ></td>
      </tr>
      <tr>
        <th scope="row">Kordinaatori nimi</th>
        <td><input :value="newInternship.name"
                   @input="$emit('event-name-changed', $event.target.value)"
        ></td>
      </tr>
      <tr>
        <th scope="row">Email</th>
        <td><input :value="newInternship.email"
                   @input="$emit('event-email-changed', $event.target.value)"
        ></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "InternshipEditTable",
  props: {
    newInternship: Object
  }
};
</script>