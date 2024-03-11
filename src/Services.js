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

 export const getUsers = async()=>{
  try {
    const response = await axiosInstance.get("/Usuario");
    return response.data;
  } catch (error) {
    console.log(error);
  }
 }

 export const getUserByEmail = async(email)=>{
  try {
    const response = await axiosInstance.get(`/Usuario/${email}`);
    return response.data;
  } catch (error) {
    console.log(error)
  }
 }


 export const addUser = async(userdata)=>{
  try {
    const response = await axiosInstance.post("/Usuario", userdata);
    return response.data;
  } catch (error) {
    console.log(error);
  }
 }

 export const updateUsuario = async(id)=>{
   const response = await axiosInstance.put(`/Usuario/${id}`, {});
   return response.data;
 }

 export const getEmpresas = async()=>{
   try {
    const response = await axiosInstance.get("/Empresa");
    return response.data;
   } catch (error) {
     console.log(error);
   }
 }

 export const getEmpresaByRnc = async(rnc)=>{
  try {
    const response = await axiosInstance.get(`/Empresa/${rnc}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
 }

 export const addEmpresas = async(empresaData)=>{
  try {
    const response = await axiosInstance.post("/Empresa", empresaData)
    return response.data;
  } catch (error) {
    console.log(error)
  }
 }