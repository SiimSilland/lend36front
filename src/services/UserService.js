import axios from "axios";

export default {

    sendPostNewStudentRequest(newStudent) {
        return axios.post('/user', newStudent);
    },
    sendPostNewCompanyRequest(newCompany) {
        return axios.post('/user', newCompany);
    },
};