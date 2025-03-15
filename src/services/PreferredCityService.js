import axios from "axios";


export default {
    sendGetPreferredCityList(userId){
        return axios.get('/preferred-city/city', {
            params: {
                userId: userId
            }
        })
    },
    sendDeletePreferredCity(userId, cityId) {
        return axios.delete('/preferred-city/city', {
            params: {
                userId: userId,
                cityId: cityId
            }
        });
    },

    sendPostPreferredCity(userId, cityId){
        return axios.post('/preferred-city/city', {
            params:{
                userId: userId,
                cityId: cityId
            }
        })
    }



}