import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import StudentRegisterView from "@/views/StudentRegisterView.vue";
import CompanyRegisterView from "@/views/CompanyRegisterView.vue";
import CompanyView from "@/views/CompanyProfileView.vue";
import AdminView from "@/views/AdminView.vue";
import StudentProfileView from "@/views/StudentProfileView.vue";
import CompanyProfileView from "@/views/CompanyProfileView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },

  {
    path: '/admin',
    name: 'adminViewRoute',
    component: AdminView
  },

  {
    path: '/student/register',
    name: 'studentRegisterRoute',
    component: StudentRegisterView
  },
  {
    path: '/student/profile',
    name: 'studentProfileRoute',
    component: StudentProfileView
  },

  {
    path: '/company/register',
    name: 'companyRegisterRoute',
    component: CompanyRegisterView
  },
  {
    path: '/company/profile',
    name: 'companyProfileRoute',
    component: CompanyProfileView
  },

  {
    path: '/company',
    name: 'companyRoute',
    component: CompanyView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
