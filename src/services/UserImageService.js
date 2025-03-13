import axios from "axios";

export default {

    sendPostUserImage(userImageDto) {
        const formData = new FormData();
        formData.append('userId', userImageDto.userId);
        formData.append('userImageData', userImageDto.userImageData);
        return axios.post('/image', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
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
                user:userId
            }
        });
    }

}