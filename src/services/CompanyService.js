import axios from "axios";

export default {
    updateCompanyProfile(userId, companyProfile) {
        return axios.put('/company/profile/update', companyProfile, {
                params: {
                    userId: userId,
                }
            }
        )
    },
    sendGetCompanyProfile(userId) {
        return axios.get('/company/profile', {
            params: {
                userId: userId
            }
        });
    },


    sendPostNewInternshipRequest(newInternship) {
        return axios.post('/company/internship', newInternship
        );
    },
}

