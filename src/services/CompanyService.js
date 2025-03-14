    import axios from "axios";

    export default {
        async updateCompanyProfile(userId, companyProfile) {
            try {
                const response = await axios.put('/company/profile', {
                    userId: userId,
                    ...companyProfile
                });
                return response;
            } catch (error) {
                throw error;
            }
        },

        async sendGetCompanyProfile(userId) {
            try {
                const response = await axios.get('/company/profile', {
                    params: { userId }
                });
                return response;
            } catch (error) {
                throw error;
            }
        },
        sendPostNewInternshipRequest(internship) {
            return axios.post('/company/internship', internship);
        },
    }
