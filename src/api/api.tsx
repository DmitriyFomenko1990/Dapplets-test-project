import axios from "axios";

const axiosInstance = axios.create({
    baseURL: ` https://dapplets-hiring-api.herokuapp.com/api/v1/`,
});


export const dappletsAPI = {
    getDapplets(start:number, limit:number, filter:string, sort:string) {
        return axiosInstance
            .get(`dapplets?limit=${limit}&start=${start}&filter=[{"property":"title","value":"${filter}"}]&sort=[{"property":"title","direction":"${sort}"}]`)
            .then(response =>  response.data)
    }
};
