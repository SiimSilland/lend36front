import axios from "axios";

export default {
    sendPostNewGroupRequest(newGroup) {
        return axios.post('/group', newGroup
        );
    },

    sendDeleteGroupRequest(groupId) {
        return axios.delete(`/delete-group`, {
            params: {
                groupId: groupId
            }
        })
    }
}
