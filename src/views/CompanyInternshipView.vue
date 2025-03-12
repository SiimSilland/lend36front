<template>
  <div>
    <div class="background">
      <div class="company-profile-page">
        <div class="container text-center-left">
          <div class="row justify-content-center">
            <h1 class="title">Praktikavõimalused</h1>

            <form action="/action_page.php" style="display: flex; align-items: flex-start; gap: 10px;">
              <label for="position">Positsioon </label>
              <input type="text" id="position" name="position" style="vertical-align: top;">

              <label for="description">Kirjeldus</label>
              <textarea id="description" name="description" class="long-input" style="vertical-align: top;"></textarea>
            </form>

            <form action="/action_page.php" style="display: flex; align-items: flex-start; gap: 10px;">
              <label for="position">Positsioon </label>
              <input type="text" id="position" name="position" style="vertical-align: top;">

              <label for="description">Kirjeldus</label>
              <textarea id="description" name="description" class="long-input" style="vertical-align: top;"></textarea>
            </form>
            <form action="/action_page.php" style="display: flex; align-items: flex-start; gap: 10px;">
              <label for="position">Positsioon </label>
              <input type="text" id="position" name="position" style="vertical-align: top;">

              <label for="description">Kirjeldus</label>
              <textarea id="description" name="description" class="long-input" style="vertical-align: top;"></textarea>
            </form>
            <form action="/action_page.php" style="display: flex; align-items: flex-start; gap: 10px;">
              <label for="position">Positsioon </label>
              <input type="text" id="position" name="position" style="vertical-align: top;">

              <label for="description">Kirjeldus</label>
              <textarea id="description" name="description" class="long-input" style="vertical-align: top;"></textarea>
            </form>
            <form action="/action_page.php" style="display: flex; align-items: flex-start; gap: 10px;">
              <label for="position">Positsioon </label>
              <input type="text" id="position" name="position" style="vertical-align: top;">

              <label for="description">Kirjeldus</label>
              <textarea id="description" name="description" class="long-input" style="vertical-align: top;"></textarea>
            </form>



            <div class="spacer"></div>

            <h3 class="title">Praktikakoordinaator</h3>

            <form action="/action_page.php">
              <div class="form-group">
                <input type="text" id="name" name="name">
                <label for="name">Nimi</label>
              </div>

              <div class="form-group">
                <input type="text" id="phone" name="phone">
                <label for="phone">Telefon</label>
              </div>

              <div class="form-group">
                <input type="text" id="email" name="email">
                <label for="email">Email</label>
              </div>

              <input type="submit" value="Submit">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyInternshipView"
}
</script>

<style scoped>
.background {
  background-image: url('@/assets/img.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.company-profile-page {
  padding: 20px;
  color: white;
}

label {
  color: black;
}

.title {
  color: black;
}

input, textarea {
  color: black;
}

.short-input {
  width: 150px;
  height: 60px; /* Allow multiline input */
}

.long-input {
  width: 600px;
  height: 30px; /* Allow multiline input */
}

.form-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

/* Added space before "Praktikakoordinaator" */
.spacer {
  margin-top: 30px;
}
</style>