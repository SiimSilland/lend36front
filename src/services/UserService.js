import axios from "axios";

export default {

    sendPostNewStudentRequest(newStudent) {
        return axios.post('/user', newStudent);
    },

    sendPostNewCompanyRequest(newCompany) {
        return axios.post('/company/register', newCompany);
    },
    sendPostNewCompanyProfileRequest(companyDto)  {
        return axios.put('/company/profile/update', companyDto);

    },
}

