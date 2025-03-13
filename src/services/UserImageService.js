import axios from "axios";

export default {

    sendPostUserImage(userImageDto){
        return axios.post('/image', {
            body: {
                userImageDto
            }
        });
    },
    sendDeleteUserImage(userId){
        return axios.post('/image', {
            params: {
                user:userId
            }
        });
    },
    sendGetUserImage(userId){
        return axios.get('/image', {
            params: {
                user:userId
            }
        });
    }

}