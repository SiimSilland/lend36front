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
    sendPutNewInternshipRequest(internship) {
        return axios.put('/company/internship', internship);
        },
    }
