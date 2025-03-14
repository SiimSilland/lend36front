import axios from "axios";


export default {
    sendGetPreferredCityList(userId){
        return axios.get('/preferred-city/city', {
            params: {
                userId: userId
            }
        })
    }


}