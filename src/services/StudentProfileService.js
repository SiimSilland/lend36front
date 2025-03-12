import axios from "axios";

export default {

    sendGetStudentProfile(userId){
        return axios.get('/student/profile/get', {
            params: {
                userid: userId
            }
        }
        );
    }

}