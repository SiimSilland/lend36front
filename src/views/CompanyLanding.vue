<template>
  <div class="background">
    <div class="company-landing-page">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col col-12">
            <h1 class="title">Mida pakub ValiIT ettevõttele</h1>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <!-- First Column: Explanation -->
          <div class="col text-box">
            <h3 class="title">Arendajate puudus</h3>
            <p>
              Eesti majandus januneb oskustega tarkvaraarendajate järele. Igal aastal vajab Eesti majandus ligi
              700 IT-spetsialisti rohkem, kui tänane kõrg- ja kutseharidus suudavad pakkuda.
              Olukord on aktuaalne ka paljude mitte-IT ettevõtete jaoks, sest IKT on tänaseks
              muutunud äärmiselt ärikriitiliseks. Kahtlemata mõjutab see probleem ka Sinu ettevõtet.
              Häid tarkvaraarendajaid otsitakse tikutulega taga, aga kust neid leida?
            </p>

            <h4 class="title">Mis on „Vali IT!”?</h4>
            <p>
              „Vali IT!“ on üks reaalne lahendus antud probleemile. Tegemist on unikaalse ettevõtjate
              ja riigi koostöös ellu kutsutud täiskasvanute ümberõppe projektiga.
            </p>
            <p>
              Projekti kaasatakse inimesed, kellel on kõrgharidus ja töökogemused, aga kes pole õppinud IT-d ega tööta IKT valdkonnas.
              Osalejad saavad ümberõppeprogrammi kontaktõppe koolitusel kätte tarkvaraarendaja baasoskused.
            </p>
            <p>
              Vali-IT valmistab ette full-stack arendajaid.
              Registreerimine võimaldab teile ligipääsu meie lõpetajate CV'dele ning projekti näidistele.
            </p>
          </div>

          <!-- Second Column: Vali IT Numbers & Skills -->
          <div class="col text-box">
            <h4 class="title">„Vali IT!” numbrites</h4>
            <ul class="left-align-list">
              <li><strong>650+</strong> uut tarkvaraarendajat IT-sse 7 aastaga.</li>
              <li><strong>3,5 kuud</strong> = üks koolitustsükkel</li>
              <ul>
                <li>6 nädalat kontaktõpe koolituskeskuses</li>
                <li>8 nädalat praktika IKT ettevõttes</li>
              </ul>
              <li><strong>19-23</strong> koolitatavate arv ühes grupis</li>
              <li><strong>100+</strong> ettevõtet on saanud töötajaid „Vali IT!“ projektist</li>
              <li><strong>60%</strong> lõpetajatest töötab tarkvaraarendusega seotud ametikohal</li>
            </ul>

            <h4 class="title">Praktikantide rollid:</h4>
            <ul class="left-align-list">
              <li>Arendaja</li>
              <li>Testide automatiseerija</li>
              <li>Andmebaaside skriptija</li>
              <li>UI/UX disainer</li>
              <li>Analüütik</li>
              <li>Projektijuht</li>
            </ul>

            <h4 class="title">Põhilised keeled:</h4>
            <p>Java (Spring Boot), JavaScript (Vue), HTML, CSS</p>
          </div>
        </div>

        <div class="row">
          <div class="col text-box">
            <h4 class="title">Viimased blogipostitused ja portfolio uuendused</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyLanding"
};
</script>

<style scoped>
.background {
  background-image: url('@/assets/img.png'); /* Use require() if needed */
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.company-landing-page {
  padding: 20px;
  color: white;
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
</style>