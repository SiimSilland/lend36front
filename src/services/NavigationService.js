import router from "@/router";

export default {

    navigateToHomeView() {
        router.push({name: 'home'})
    },

    navigateToLoginView() {
        router.push({name: 'loginRoute'})
    },

    navigateToAdminView() {
        router.push({name: 'adminViewRoute'})
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