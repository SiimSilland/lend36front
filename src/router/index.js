import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import StudentRegisterView from "@/views/StudentRegisterView.vue";
import CompanyRegisterView from "@/views/CompanyRegisterView.vue";
import StudentProfileView from "@/views/StudentProfileView.vue";
import CompanyProfileView from "@/views/CompanyProfileView.vue";
import CompanyLanding from "@/views/CompanyLanding.vue";
import StudentCompanyListView from "@/views/StudentCompanyListView.vue";
import CompanyCandidatesView from "@/views/CompanyCandidatesView.vue";
import GroupView from "@/views/GroupView.vue";
import GroupEmailView from "@/views/GroupEmailView.vue";
import GroupCompanyView from "@/views/GroupCompanyView.vue";
import CompanyInternshipView from "@/views/CompanyInternshipView.vue";
import CompanyStudentsView from "@/views/CompanyStudentsView.vue";
import CompanyTaskListView from "@/views/CompanyTaskListView.vue";
import StudentTaskView from "@/views/StudentTaskView.vue";
import StudentViewProfileTable from "@/components/StudenProfile/StudentViewProfileTable.vue";
import ErrorView from "@/views/ErrorView.vue";

const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView
    },

    {
        path: '/login',
        name: 'loginRoute',
        component: LoginView
    },

    {
        path: '/admin/group',
        name: 'groupRoute',
        component: GroupView
    },

    {
        path: '/admin/email',
        name: 'groupEmailRoute',
        component: GroupEmailView
    },

    {
        path: '/admin/company',
        name: 'groupCompanyRoute',
        component: GroupCompanyView
    },

    {
        path: '/student/register',
        name: 'studentRegisterRoute',
        component: StudentRegisterView
    },
    {
        path: '/student/company-list',
        name: 'studentCompanyListRoute',
        component: StudentCompanyListView
    },
    {
        path: '/student/task',
        name: 'studentTaskRoute',
        component: StudentTaskView
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
        path: '/company/students',
        name: 'companyStudentsRoute',
        component: CompanyStudentsView
    },
    {
        path: '/company/task-list',
        name: 'companyTaskListRoute',
        component: CompanyTaskListView
    },
    {
        path: '/company/internship',
        name: 'companyInternshipRoute',
        component: CompanyInternshipView
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
        path: '/error',
        name: 'errorRoute',
        component: ErrorView
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
