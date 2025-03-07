import router from "@/router";

export default {

    navigateToHomeView() {
        router.push({name: 'home'})
    },

    navigateToLoginView() {
        router.push({name: 'loginRoute'})
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

    navigateToCompanyView() {
        router.push({name: 'companyRoute'})
    },


}