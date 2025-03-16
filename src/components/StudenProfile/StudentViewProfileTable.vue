<template>
  <div>
    <table class="table">
      <tbody >
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

<style scoped>
.background {
  background-image: url('@/assets/img.png'); /* Use require() if needed */
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.title {
  color: black; /* Change the heading color to black */
}

/* Style for text boxes */
.text-box {
  background-color: rgba(255, 255, 255, 0.8); /* Light background */
  padding: 20px;
  border-radius: 8px;
  color: black;
  margin: 10px;
  text-align: left; /* Aligns text to the left */
}

/* Align lists to the left */
.left-align-list {
  text-align: left;
  padding-left: 20px; /* Adjust for better indentation */
  list-style-type: disc; /* Ensures bullets appear */
}

.left-align-list ul {
  padding-left: 20px; /* Nested list indentation */
}

.btn.btn-outline-success {
  width: 50%;
  max-width: 200px;
  background-color: #28a745;
  color: white;
  border-color: #28a745;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.btn.btn-outline-primary {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);  /* Slight lift on hover */
}
.table-background {
  background-color: rgba(255, 255, 255, 0.8); /* Light background */
  padding: 20px;
  border-radius: 8px;
  color: black;
  margin: 10px;
}

.textarea-fixed {
  resize: none;
  width: 100%;
  height: auto;
  min-height: 200px;
  overflow: visible;
  background-color: rgba(255, 255, 255, 0.8); /* Light background */
  padding: 20px;
  border-radius: 8px;
  color: black;
  margin: 10px;
  text-align: left;
}
</style>

