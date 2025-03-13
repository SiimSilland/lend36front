import axios from "axios";

export default {
    sendGetStudentProfile(userId) {
        return axios.get('/student/profile', {
                params: {
                    userId: userId
                }
            }
        )
    },
    updateStudentProfile(userId, studentProfile) {
        return axios.put('/student/profile', studentProfile,{
            params:{
                userId: userId
            }
        });
    }
}