<template>
  <div class="background">
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
          <header class="sub-menu">
            <div class="title">Tudengid</div>
            <div class="user-options">
              <div class="icon"><i class="fa fa-search" aria-hidden="true"></i></div>
              <div class="icon">
                <i class="fa fa-bell-o" aria-hidden="true"></i>
                <div class="badge">3</div>
              </div>

            </div>
          </header>

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
                <div class="icon"><i class="fa fa-filter" aria-hidden="true"></i></div>
                <div class="display-group">
                  <div class="icon"><i class="fa fa-bars" aria-hidden="true"></i></div>
                  <div class="icon selected">
                    <i class="fa fa-th" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </header>

            <ul class="projects">
              <li class="project-item" v-for="(students, index) in students" :key="index">
                <div class="logo-row">
                  <img :src="students.logoSrc" :alt="students.title + ' pilt'" />
                  <div class="icon">
                    <i class="fa fa-ellipsis-h icon" aria-hidden="true"></i>
                  </div>
                </div>
                <div class="title-row">
                  <h3>{{ students.title }}</h3>
                  <div class="links">
                    <i class="fa fa-external-link icon" aria-hidden="true"></i>
                    <a :href="students.linkedin">{{ students.linkedin }}</a>
                  </div>
                </div>
                <div class="desc-row">
                  <p>{{ students.description }}</p>
                </div>
                <div class="progress-row">
                  <p
                      class="value-label"
                      :style="{ width: students.progress + '%' }"
                      :data-value="students.progress"
                  ></p>
                  <progress
                      max="100"
                      :value="students.progress"
                      :data-value="students.progress"
                      :class="{ low: students.progress < 40 }"
                  >
                    {{ students.progress }}%
                  </progress>
                </div>
                <div class="footer-row">
                  <div :class="['days', students.status]">
                    <i class="fa fa-clock-o icon" aria-hidden="true"></i>
                    {{ students.daysLeft }} days left
                  </div>
                  <div class="users">
                    <img
                        v-for="(user, idx) in students.users"
                        :key="idx"
                        :src="user.avatar"
                        :alt="user.name"
                    />
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
          linkedin: "linkedin.com/in/peeter-poder",
          description: "Web resource which contains all about transfer in the world of sports.",
          progress: 94,
          daysLeft: 2,
          status: "danger",
          users: [
            { name: "User 1", avatar: "https://source.unsplash.com/24x24/?human" },
            { name: "User 2", avatar: "https://source.unsplash.com/24x24/?humans" }
          ]
        },
        {
          title: "Juhan Aas",
          piltSrc: "https://source.unsplash.com/48x48/?brand",
          linkedin: "linkedin.com/in/juhan-aas",
          description: "Web resource which contains all about transfer in the world of sports.",
          progress: 64,
          daysLeft: 4,
          status: "warning",
          users: [
            { name: "User 1", avatar: "https://source.unsplash.com/24x24/?human" },
            { name: "User 2", avatar: "https://source.unsplash.com/24x24/?humans" }
          ]
        },
        {
          title: "Mari Mets",
          piltSrc: "https://source.unsplash.com/48x48/?icon",
          linkedin: "linkedin.com/in/mari-mets",
          description: "Web resource which contains all about transfer in the world of sports.",
          progress: 59,
          daysLeft: 5,
          status: "warning",
          users: [
            { name: "User 1", avatar: "https://source.unsplash.com/24x24/?human" },
            { name: "User 2", avatar: "https://source.unsplash.com/24x24/?humans" }
          ]
        },
        {
          title: "Lea Ots",
          logoSrc: "https://source.unsplash.com/48x48/?adventure",
          linkedin: "linkedin.com/in/lea-ots",
          description: "Web resource which contains all about transfer in the world of sports.",
          progress: 94,
          daysLeft: 7,
          status: "",
          users: [
            { name: "User 1", avatar: "https://source.unsplash.com/24x24/?human" },
            { name: "User 2", avatar: "https://source.unsplash.com/24x24/?humans" }
          ]
        },
        {
          title: "Regular Logistics",
          logoSrc: "https://source.unsplash.com/48x48/?flower",
          website: "regularlogistics.com",
          description: "Web resource which contains all about transfer in the world of sports.",
          progress: 44,
          daysLeft: 9,
          status: "",
          users: [
            { name: "User 1", avatar: "https://source.unsplash.com/24x24/?human" },
            { name: "User 2", avatar: "https://source.unsplash.com/24x24/?humans" }
          ]
        },
        {
          title: "Foursquare Agency",
          logoSrc: "https://source.unsplash.com/48x48/?brands",
          website: "foursquareagency.com",
          description: "Web resource which contains all about transfer in the world of sports.",
          progress: 39,
          daysLeft: 11,
          status: "danger",
          users: [
            { name: "User 1", avatar: "https://source.unsplash.com/24x24/?human" },
            { name: "User 2", avatar: "https://source.unsplash.com/24x24/?humans" }
          ]
        },
        {
          title: "Piece Studio",
          logoSrc: "https://source.unsplash.com/48x48/?r",
          website: "piecestudio.com",
          description: "Web resource which contains all about transfer in the world of sports.",
          progress: 34,
          daysLeft: 12,
          status: "",
          users: [
            { name: "User 1", avatar: "https://source.unsplash.com/24x24/?human" },
            { name: "User 2", avatar: "https://source.unsplash.com/24x24/?humans" }
          ]
        },
        {
          title: "Legacy Foundation",
          logoSrc: "https://source.unsplash.com/48x48/?sanfrancisco",
          website: "legacyfoundation.com",
          description: "Web resource which contains all about transfer in the world of sports.",
          progress: 32,
          daysLeft: 12,
          status: "",
          users: [
            { name: "User 1", avatar: "https://source.unsplash.com/24x24/?human" },
            { name: "User 2", avatar: "https://source.unsplash.com/24x24/?humans" }
          ]
        },
        {
          title: "Sports Analytics",
          logoSrc: "https://source.unsplash.com/48x48/?sports",
          website: "sportsanalytics.com",
          description: "Analytics platform for sports data and performance tracking.",
          progress: 78,
          daysLeft: 5,
          status: "",
          users: [
            { name: "User 1", avatar: "https://source.unsplash.com/24x24/?human" },
            { name: "User 2", avatar: "https://source.unsplash.com/24x24/?humans" }
          ]
        },
        {
          title: "Tech Innovators",
          logoSrc: "https://source.unsplash.com/48x48/?tech",
          website: "techinnovators.com",
          description: "Leading platform for technology innovation and development.",
          progress: 25,
          daysLeft: 1,
          status: "danger",
          users: [
            { name: "User 1", avatar: "https://source.unsplash.com/24x24/?human" },
            { name: "User 2", avatar: "https://source.unsplash.com/24x24/?humans" }
          ]
        },
        {
          title: "Global Solutions",
          logoSrc: "https://source.unsplash.com/48x48/?global",
          website: "globalsolutions.com",
          description: "International business solutions and consulting services.",
          progress: 67,
          daysLeft: 8,
          status: "",
          users: [
            { name: "User 1", avatar: "https://source.unsplash.com/24x24/?human" },
            { name: "User 2", avatar: "https://source.unsplash.com/24x24/?humans" }
          ]
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

.love-text {
  margin-top: 20px;
  color: #fafbfb;
  line-height: 1.2em;
}
.love-text .desc {
  font-size: 0.75em;
  color: #d32f2f;
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
