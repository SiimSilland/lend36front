import router from "@/router";

export default {

    navigateToHomeView() {
        router.push({name: 'homeRoute'})
    },

    navigateToLoginView() {
        router.push({name: 'loginRoute'})
    },

    navigateToGroupView() {
        router.push({name: 'groupRoute'})
    },

    navigateToGroupEmailView(groupId) {
        router.push({name: 'groupEmailRoute', query:{groupId:groupId}})
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