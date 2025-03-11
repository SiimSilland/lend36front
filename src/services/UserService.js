import axios from "axios";

export default {

    sendPostNewStudentRequest(newStudent) {
        return axios.post('/user', newStudent);
    },
    sendPostNewCompanyProfileRequest(userId, companyDto)  {
        return axios.put('/company/profile/update', companyDto,{
            params: {
            userId: userId
        }
    }
    );
    },
    sendPostNewCompanyRequest(newCompany) {
        return axios.post('/company/register', newCompany);
    }
}

