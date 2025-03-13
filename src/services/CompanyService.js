import axios from "axios";
export default {

    sendPostNewCompanyRequest(newCompany) {
        return axios.post('/company/register', newCompany);
    },
    sendPostNewInternshipRequest(internshipDto) {
        return axios.post('/company/internship', internship);
    },
    sendPutNewCompanyProfileRequest(companyProfile) {
        return axios.put('/company/profile', companyProfile);

        }
    }