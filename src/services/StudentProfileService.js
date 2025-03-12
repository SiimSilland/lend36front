import axios from "axios";

export default {

    fetchStudentProfile(userId){
        return axios.get('/student/profile/get', {params: { userId }});
    }

}