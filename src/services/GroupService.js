import axios from "axios";

export default {
    sendPostNewGroupRequest(groupNumber) {
        return axios.post('/admin/group', null,{
            params: {
                groupNumber: groupNumber
            }
        }
        );
    },
}