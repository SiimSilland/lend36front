import axios from "axios";


export default {
    sendGetCities(){
        return axios.get('/city/cities')
    }



}