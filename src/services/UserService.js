import axios from "axios";

export default {

    sendPostNewStudentRequest(newStudent) {
        return axios.post('/user', newStudent);
    },
    sendPostNewCompanyProfileRequest(newCompanyProfile) {
        return axios.put('/company/profile/update', companyDto);
    },
    sendPostNewCompanyRequest(newCompany) {
        return axios.post('/company/register', newCompany);
    }

}