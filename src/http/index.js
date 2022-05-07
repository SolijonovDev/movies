import axios from "axios";
 
const url="https://api.itv.uz/api/"
const token="a71651276800s055120e1a6ffaa1ec27"

const $api=axios.create({
    baseURL:url
})

class Api{
    async getMovies(id){
        console.log("id:",id);
       const res=await $api.get(`content/main/2/list?page=${id}&user=${token}`)
       return res;
    }
    async getMovie(id){
       const res=await $api.get(`content/main/2/show/${id}?user=${token}`)
       return res.data;
    }
}



export default new Api()
