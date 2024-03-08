import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://localhost:44334/api",
    headers: {
      "Content-Type": "application/json",
    },
});

 export const getTaxByRnc= async(id)=>{
    try {
      const response = await axiosInstance.get(`/TaxId/${id}`);
      return response.data;   
    } catch (error) {
      console.log(error)
    }
 } 