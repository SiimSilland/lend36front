import router from "@/router";

export default {

    navigateToErrorView() {
        // router.push({name: 'errorRoute'})
    },
    navigateToHomeView() {
        router.push({name: 'homeRoute'})
    },

    navigateToLoginView() {
        router.push({name: 'loginRoute'})
    },

    navigateToGroupView() {
        router.push({name: 'groupRoute'})
    },

    navigateToGroupEmailView() {
        router.push({name: 'groupEmailRoute'})
    },

    navigateToStudentRegisterView () {
        router.push({name: 'studentRegisterRoute'})
    },

    navigateToStudentProfileView() {
        router.push({name: 'studentProfileRoute'})
    },

    navigateToCompanyRegisterView () {
        router.push({name: 'companyRegisterRoute'})
    },

    navigateToCompanyProfileView () {
        router.push({name: 'companyProfileRoute'})
    },

    navigateToCompanyLanding() {
        router.push({name: 'companyRoute'})
    },


}