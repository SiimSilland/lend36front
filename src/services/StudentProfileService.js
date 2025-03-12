import axios from "axios";

export default {

    sendGetStudentProfile(userId) {
        return axios.get('/student/profile', {
                params: {
                    userId: userId
                }
            }
        )
    }

}