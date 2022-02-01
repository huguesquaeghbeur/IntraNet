import jwt_decode from "jwt-decode";
const baseUrl="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/"


export const tokenToFormData = () => {
    const token = localStorage.getItem('token')
    const decoded = jwt_decode(token)
    console.log(decoded)
    const formData = new FormData()
    formData.append("email", decoded[baseUrl+"emailaddress"])
    formData.append("password", decoded[baseUrl+"authentication"])
    return formData
}