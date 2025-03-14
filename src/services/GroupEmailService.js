import axios from "axios";

export default {
    sendPostNewGroupEmailRequest (newStudent) {
        return axios.post('/group-email', newStudent);
    },

}