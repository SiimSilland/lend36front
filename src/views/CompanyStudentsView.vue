<template>
  <div className="col">
    <h1>Tudengite profiilid firmadele</h1>
  </div><div class="background">
  <div class="container">
    <div class="content">
      <section class="sidebar">
        <div class="logo">
          <i class="fa fa-instagram icon" aria-hidden="true"></i>
        </div>



        <div class="more-options">
          <i class="fa fa-ellipsis-h icon" aria-hidden="true"></i>
        </div>
      </section>

      <section class="main-content">
        <div class="app">
          <div class="fab-icon">+</div>


          <section class="app-content">
            <header>
              <div class="searchbox">
                <div class="icon"><i class="fa fa-search" aria-hidden="true"></i></div>
                <input
                    type="text"
                    name="search"
                    placeholder="Otsi tudengit"
                    class="search-text"
                />
              </div>

              <div class="app-list-options">
                <div class="sort-dropdown">
                  Sort by <span class="by">Regioon</span>
                  <i class="fa fa-sort-amount-desc" aria-hidden="true"></i>
                  <div class="drop">
                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </header>
            <ul class="projects">
              <li class="project-item" v-for="(students, index) in students" :key="index">

                <div class="content-row">
                  <!-- Left Column: Title, Address, Phone, Email, LinkedIn -->
                  <div class="col left-column">
                    <h3>{{ students.title }}</h3>
                    <div class="links">
                      <i class="fa fa-map-marker icon" aria-hidden="true"></i>
                      <span>{{ students.address }}</span>
                    </div>
                    <div class="links">
                      <i class="fa fa-phone icon" aria-hidden="true"></i>
                      <span>{{ students.phone }}</span>
                    </div>
                    <div class="links">
                      <i class="fa fa-envelope icon" aria-hidden="true"></i>
                      <a :href="'mailto:' + students.email">{{ students.email }}</a>
                    </div>
                    <div class="links">
                      <i class="fa fa-linkedin icon" aria-hidden="true"></i>
                      <a :href="students.linkedin" target="_blank">{{ students.linkedin }}</a>
                    </div>
                  </div>

                  <!-- Right Column: Picture and Description -->
                  <div class="col right-column">
                    <img :src="students.logoSrc" :alt="students.title + ' pilt'" class="student-image" />
                    <div class="desc-row">
                      <p>{{ students.description }}</p>
                    </div>
                  </div>
                </div>

                <!-- Footer Section -->
                <div class="footer-row">
                  <div :class="['days', students.status]">
                    <i class="fa fa-clock-o icon" aria-hidden="true"></i>
                    Praktika algus{{ students.daysLeft }}
                  </div>
                </div>

              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "CompanyStudentsView",
  data() {
    return {
      students: [
        {
          title: "Peeter Põder",
          piltSrc: "https://source.unsplash.com/48x48/?brands",
          address: "Metsa 13, Tallinn",
          phone: 372592323323,
          email: "Peeter.poder@mail.ee",
          linkedin: "linkedin.com/in/peeter-poder",
          description: "Olen kirglik IT-arendaja, kellel on tugev taust tarkvaraarenduses ja süsteemi optimeerimises. Mul on põhjalikud teadmised frontend- ja backend-tehnoloogiates, sealhulgas JavaScript (Vue.js, React), Java, Spring Boot, Node.js ja SQL/NoSQL andmebaasid. Fookus on skaleeritavate ja tõhusate lahenduste loomisel, järgides parimaid tarkvaraarenduse praktikaid",
          daysLeft: "25.07.2025",
        },
        {
          title: "Katrin Kuusk",
          piltSrc: "https://source.unsplash.com/48x48/?developer",
          address: "Tamme 8, Tartu",
          phone: 37255667892,
          email: "katrin.kuusk@gmail.com",
          linkedin: "linkedin.com/in/katrin-kuusk",
          description: "Olen spetsialiseerunud front-end arendusele ja UX/UI disainile. Minu tugevusteks on React.js, TypeScript ja kasutajakogemuse analüüs. Armastan luua intuitiivseid ja ligipääsetavaid kasutajaliideseid.",
          daysLeft: "12.08.2025"
        },
        {
          title: "Rasmus Põld",
          piltSrc: "https://source.unsplash.com/48x48/?technology",
          address: "Pärna 15, Pärnu",
          phone: 37253423456,
          email: "rasmus.pold@outlook.com",
          linkedin: "linkedin.com/in/rasmus-pold",
          description: "Mul on põhjalikud teadmised DevOps ja pilvetehnoloogiates, sealhulgas AWS, Docker ja Kubernetes. Olen töötanud suuremahuliste süsteemide optimeerimise ja CI/CD protsesside automatiseerimisega.",
          daysLeft: "05.09.2025"
        },
        {
          title: "Laura Laan",
          piltSrc: "https://source.unsplash.com/48x48/?tech",
          address: "Kase 21, Viljandi",
          phone: 37252178654,
          email: "laura.laan@mail.ee",
          linkedin: "linkedin.com/in/laura-laan",
          description: "Olen mobiilirakenduste arendaja, kelle põhitehnoloogiad on Flutter ja React Native. Loon kaasaegseid ja kasutajasõbralikke lahendusi nii iOS-i kui Androidi jaoks.",
          daysLeft: "28.10.2025"
        },
        {
          title: "Andres Kask",
          piltSrc: "https://source.unsplash.com/48x48/?coding",
          address: "Rukkilille 7, Narva",
          phone: 37255689923,
          email: "andres.kask@hotmail.com",
          linkedin: "linkedin.com/in/andres-kask",
          description: "Spetsialiseerun backend-arendusele ja suurandmete töötlemisele. Kasutan Pythonit ja Node.js-i skaleeritavate API-de ja mikroteenuste loomiseks.",
          daysLeft: "18.06.2025"
        },
        {
          title: "Kertu Maasikas",
          piltSrc: "https://source.unsplash.com/48x48/?software",
          address: "Võsa 10, Tartu",
          phone: 37259981234,
          email: "kertu.maasikas@gmail.com",
          linkedin: "linkedin.com/in/kertu-maasikas",
          description: "Olen kogenud Java ja Spring Boot arendaja, kes loob skaleeritavaid ja turvalisi veebirakendusi. Olen töötanud ka e-kaubanduse ja pangandustarkvara arendusega.",
          daysLeft: "14.07.2025"
        },
        {
          title: "Martin Susi",
          piltSrc: "https://source.unsplash.com/48x48/?programmer",
          address: "Lille 5, Pärnu",
          phone: 37258873456,
          email: "martin.susi@outlook.com",
          linkedin: "linkedin.com/in/martin-susi",
          description: "Minu eriala on küberturvalisus ja andmekaitse. Olen keskendunud veebirakenduste haavatavuste tuvastamisele ja süsteemi turvalisuse tagamisele.",
          daysLeft: "22.08.2025"
        },
        {
          title: "Liis Pärt",
          piltSrc: "https://source.unsplash.com/48x48/?developer",
          address: "Männi 12, Tallinn",
          phone: 37253366578,
          email: "liis.part@mail.ee",
          linkedin: "linkedin.com/in/liis-part",
          description: "Olen SQL ja NoSQL andmebaaside spetsialist. Tegelen suuremahuliste andmete analüüsimise ja optimeerimisega, kasutades PostgreSQL-i ja MongoDB-d.",
          daysLeft: "03.11.2025"
        },
        {
          title: "Karl Rõigas",
          piltSrc: "https://source.unsplash.com/48x48/?tech",
          address: "Kaunase pst 19, Narva",
          phone: 37251244321,
          email: "karl.roigas@gmail.com",
          linkedin: "linkedin.com/in/karl-roigas",
          description: "Olen spetsialiseerunud tehisintellekti ja masinõppe lahendustele. Kasutan TensorFlow-d ja PyTorch-i, et töötada välja nutikaid süsteeme, mis suudavad suurt hulka andmeid analüüsida ja prognoose teha.",
          daysLeft: "29.09.2025"
        },
        {
          title: "Anneli Jõgi",
          piltSrc: "https://source.unsplash.com/48x48/?coding",
          address: "Rohu 24, Viljandi",
          phone: 37254781234,
          email: "anneli.jogi@outlook.com",
          linkedin: "linkedin.com/in/anneli-jogi",
          description: "Mul on lai kogemus veebirakenduste arenduses, kasutades Angularit ja NestJS-i. Panustan meeskonna edusse läbi kvaliteetse koodi ja hästi struktureeritud arhitektuuri.",
          daysLeft: "10.10.2025"


        }
      ]
    };
  }
};
</script>

<style scoped>
body {
  font-family: "Open Sans", sans-serif;
  background: #bbc3c9;
  text-align: center;
}
h1 {
  margin-top: -10px; /* Moves title upwards */
  text-align: center;
}
.container {
  margin-top: 10px; /* Moves the whole container down by 2cm */
}
.love-text {
  margin-top: 20px;
  color: #fafbfb;
  line-height: 1.2em;
}
.love-text .desc {
  font-size: 0.75em;
  color: #d32f2f;
}
.content-row {
  display: flex;
  width: 100%;
  margin-top: -10px; /* Moves the whole row up */
}

.left-column {
  flex: 1;
  padding: 10px;
  text-align: left;
  font-size: small;

}

.right-column {
  flex: 2;
  padding: 10px;
  margin-top: -1px; /* Moves content up */
}
.content-row {
  display: flex;
  justify-content: space-between; /* Ensures both columns align properly */
  align-items: flex-start; /* Aligns text and image at the top */
  width: 100%;
  padding: 10px;
  gap: 20px; /* Space between left and right column */
}

.left-column {
  flex: 1;
  padding: 10px;
  text-align: left;
}

.left-column h3 {
  margin-bottom: 10px; /* Space below the title */
}

.links {
  display: flex;
  align-items: center;
  margin: 5px 0;
}

.links i {
  margin-right: 8px; /* Space between icon and text */
  color: #0068ff; /* Make it visually distinct */
}

.right-column {
  flex: 2;
  padding: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.right-column img.student-image {
  max-width: 120px; /* Adjust as needed */
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px; /* Space between image and description */
}

.desc-row {
  color: #333;
  font-size: 14px;
  line-height: 1.5;
}

.title-row {
  width: 100%;
  padding: 10px;
  text-align: left;
  margin-top: -50px;
}

.background {
  background-image: url('@/assets/img.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.main-content {
  width: 100%;
  height: 100%;
  background: #e5e7ea;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
}
.main-content .app {
  display: flex;
  flex-direction: column;
}
.main-content .app header.sub-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafbfb;
  box-shadow: 0px 1px 1px 1px rgba(181, 181, 181, 0.38);
  border-top-right-radius: 9px;
  height: 70px;
}
.main-content .app header.sub-menu .title {
  font-weight: bold;
  margin-left: 20px;
}
.main-content .app header.sub-menu .menu {
  display: flex;
  list-style: none;
  height: 100%;
  padding-left: 0;
}
.main-content .app header.sub-menu .menu li {
  margin: 0 10px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.75em;
  color: #6d7684;
  display: flex;
  align-items: center;
}
.main-content .app header.sub-menu .menu li.selected,
.main-content .app header.sub-menu .menu li:hover {
  color: #0068ff;
  position: relative;
}
.main-content .app header.sub-menu .menu li.selected::after,
.main-content .app header.sub-menu .menu li:hover::after {
  content: "";
  border-bottom: 5px solid #0068ff;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.main-content .app header.sub-menu .menu li.selected .badge,
.main-content .app header.sub-menu .menu li:hover .badge {
  background: #0068ff;
  color: #fafbfb;
}
.main-content .app header.sub-menu .menu li:hover {
  cursor: pointer;
}
.main-content .app header.sub-menu .menu li .badge {
  border-radius: 8px;
  padding: 4px 5px;
  margin: 0 5px;
  background: #bbc3c9;
  color: #969da8;
  font-size: 12px;
  height: 12px;
  width: 15px;
}
.main-content .app header.sub-menu .user-options {
  display: flex;
  margin-right: 16px;
}
.main-content .app header.sub-menu .user-options .icon {
  margin: 0 8px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 1px 1px rgba(181, 181, 181, 0.38);
  position: relative;
}
.main-content .app header.sub-menu .user-options .icon.user-img {
  padding: 0;
  border: none;
}
.main-content .app header.sub-menu .user-options .icon.user-img img {
  border-radius: 5px;
}
.main-content .app header.sub-menu .user-options .icon .badge {
  position: absolute;
  top: -10px;
  right: -8px;
  border-radius: 50%;
  background: #ec407a;
  color: #fafbfb;
  font-size: 12px;
  padding-top: 5px;
  width: 20px;
  height: 15px;
}
.main-content .app .app-content {
  margin: 20px;
  background: #fafbfb;
  border-radius: 5px;
  height: 716px;
}
.main-content .app .app-content header {
  margin: 20px;
  display: flex;
  justify-content: space-between;
}
.main-content .app .app-content header .searchbox {
  display: flex;
  padding: 10px;
  background: #eeeff1;
  border-radius: 5px;
  width: 200px;
}
.main-content .app .app-content header .searchbox .icon {
  color: #9199a5;
  margin: 0 5px;
}
.main-content .app .app-content header .searchbox input.search-text {
  border: none;
  background: inherit;
  font-size: 0.75em;
  font-weight: 600;
  outline: none;
}

.app-content header .app-list-options {
  display: flex;
  justify-items: center;
  align-items: center;
}
.app-content header .app-list-options .sort-dropdown {
  display: flex;
  border: 1px solid #bbc3c9;
  border-radius: 5px;
  padding: 12px;
  color: #bbc3c9;
  font-size: 0.75em;
  font-weight: 600;
}
.app-content header .app-list-options .sort-dropdown .by,
.app-content header .app-list-options .sort-dropdown i {
  color: #1e2026;
  margin-left: 5px;
}
.app-content header .app-list-options .sort-dropdown .drop {
  border-left: 1px solid #bbc3c9;
  margin-left: 10px;
}
.app-content header .app-list-options .icon {
  margin: 0 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 1px 1px rgba(181, 181, 181, 0.38);
  position: relative;
  color: #bbc3c9;
}
.app-content header .app-list-options .icon:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.app-content header .app-list-options .icon:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.app-content header .app-list-options .icon.selected {
  background: #dbdee2;
  color: #88909c;
}
.app-content header .app-list-options .display-group {
  display: flex;
}
.app-content header .app-list-options .display-group .icon {
  margin-right: 0;
  margin-left: 0;
}

.projects {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  height: 630px;
  overflow-y: auto;
  padding-left: 0;
}
.projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 20px; /* Spacing between items */
  padding: 20px;
}
.projects .project-item {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%; /* Ensure it takes the full width of its grid cell */
  min-height: 300px; /* Adjust as needed */
}
.projects .project-item .logo-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.projects .project-item .logo-row img {
  border-radius: 8px;
  display: block;
}
.projects .project-item .logo-row .icon {
  color: #bbc3c9;
}
.projects .project-item .title-row {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20px 0 10px;
}

.projects .project-item .title-row h3 {
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 5px;
}
.projects .project-item .title-row .links {
  display: flex;
  align-content: center;
  padding: 8px 0;
  color: #88909c;
  font-size: 0.75em;
}
.projects .project-item .title-row .links .icon {
  margin-right: 5px;
}
.projects .project-item .title-row .links a {
  color: #88909c;
  text-decoration: none;
}
.projects .project-item .desc-row {
  color: #88909c;
  font-size: 12px;
  align-content: end;
  font-weight: 400;
  line-height: 18px;
}
.projects .project-item .progress-row {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}
.projects .project-item .progress-row p.value-label {
  display: block;
}
.projects .project-item .progress-row p[data-value] {
  position: relative;
}
.projects .project-item .progress-row p[data-value]:after {
  content: attr(data-value) "%";
  color: #88909c;
  font-size: 12px;
  position: absolute;
  display: block;
  right: -10px;
}
.projects .project-item .progress-row progress {
  display: block;
  position: relative;
  width: 100%;
  margin-top: 20px;
  -webkit-appearance: none;
  height: 6px;
}
.projects .project-item .progress-row progress::-webkit-progress-bar {
  background-color: #d7dce0;
  border-radius: 5px;
}
.projects .project-item .progress-row ::-webkit-progress-value {
  background-color: #17c993;
  border-radius: 5px;
}
.projects .project-item .progress-row .low::-webkit-progress-value {
  background-color: #ec407a;
}
.projects .project-item .footer-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.projects .project-item .footer-row .days {
  padding: 8px 5px;
  border-radius: 4px;
  background: #bbc3c9;
  font-size: 12px;
  color: #565d68;
  background: #dbdee2;
}
.projects .project-item .footer-row .days.good {
  color: #4caf50;
  background: #fcfefc;
}
.projects .project-item .footer-row .days.warning {
  color: #fb8c00;
  background: #ffe7c8;
}
.projects .project-item .footer-row .days.danger {
  color: #d32f2f;
  background: #f7d7d7;
}
.projects .project-item .footer-row .users img {
  border-radius: 3px;
  margin: 0 2px;
}
.content-row {
  display: flex;
  width: 100%;
}

.left-column {
  flex: 1;
  padding: 10px;
  text-align: left;
}

.right-column {
  flex: 2;
  padding: 10px;
}

.title-row {
  width: 100%;
  padding: 10px;
  text-align: left;
}

.links {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 5px 0;
}

.logo-row {
  display: flex;
  justify-content: space-between; /* Pushes items to opposite ends */
  align-items: center;
  padding: 10px;
}

.logo-row img {
  order: 1; /* Ensures image comes after the ellipsis icon */
}
.fab-icon {
  position: absolute;
  z-index: 1000;
  bottom: 50px;
  right: 50px;
  color: #fafbfb;
  background: #0068ff;
  border-radius: 50%;
  text-align: center;
  padding-top: 5px;
  font-size: 3em;
  box-sizing: border-box;
  box-shadow: 10px 10px 73px 12px rgba(0, 104, 255, 0.35);
  width: 60px;
  height: 60px;
}
.fab-icon:hover {
  cursor: pointer;
}
</style>
