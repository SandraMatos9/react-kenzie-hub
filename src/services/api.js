import axios from "axios";

export const token = localStorage.getItem('@TOKEN')
export const api = axios.create({
    baseURL:"https://kenziehub.herokuapp.com",
    timeout:10000,
    headers:{
        Authorization: `Bearer ${token}`
    }
})