import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import StudentRegisterView from "@/views/StudentRegisterView.vue";
import CompanyRegisterView from "@/views/CompanyRegisterView.vue";
import AdminView from "@/views/AdminView.vue";
import StudentProfileView from "@/views/StudentProfileView.vue";
import CompanyProfileView from "@/views/CompanyProfileView.vue";
import CompanyLanding from "@/views/CompanyLanding.vue";
import StudentCompaniesView from "@/views/StudentCompaniesView.vue";
import CompanyCandidatesView from "@/views/CompanyCandidatesView.vue";

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
    path: '/student/companies',
    name: 'studentCompaniesRoute',
    component: StudentCompaniesView
  },
  {
    path: '/student',
    name: 'studentProfileRoute',
    component: StudentProfileView,
    meta:{
      requiresAuth: true,
      requiresRole: 'student'
    }
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
    path: '/company/candidates',
    name: 'companyCandidatesRoute',
    component: CompanyCandidatesView
  },

  {
    path: '/company',
    name: 'companyRoute',
    component: CompanyLanding
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

router.beforeEach((to, from, next) => {
  if (!to.matched.some(record => record.meta.requiresAith)) {
    return;
  }
  const userId = sessionStorage.getItem('userId')
  const roleName = sessionStorage.getItem('roleName')
  if (!userId) {
    next({name: 'login'})
  } else if (to.meta.requiredRole && to.meta.requiredRole !== roleName) {
    next({name: 'home'})
  } else {
    next()
  }
  {
    next()
  }
} )

export default router
