import axios from "axios";

export default {

    sendPostUserImage(userId, userImageDto) {
        return axios.post('/image', userImageDto, {
            params: {
                userId: userId
            }
        });
    },
    sendDeleteUserImage(userId) {
        return axios.delete(`/image/${userId}`).catch(error => {
            console.error('Error deleting image:', error.response?.data || error.message);
            throw error;
        });
    },
    sendGetUserImage(userId){
        return axios.get('/image', {
            params: {
                userId: userId
            }
        });
    }

}