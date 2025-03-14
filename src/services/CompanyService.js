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
        return  axios.get('/company/profile', {
                    params: {
                        userId: userId
                    }
        });
        },
    sendPostNewInternshipRequest(internship) {
        return axios.post('/company/internship', internship);
        },
    }
