import router from "@/router";
import companyRegisterView from "@/views/CompanyRegisterView.vue";

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

    navigateToCompanyRegisterView () {
        router.push({name: 'companyRegisterRoute'})
    },



}