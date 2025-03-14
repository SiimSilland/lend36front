import axios from "axios";

export default {
    sendPostNewGroupRequest(newGroup) {
        return axios.post('/group', newGroup
        );
    },
}