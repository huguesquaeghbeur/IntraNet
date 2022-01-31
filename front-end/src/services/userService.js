import jwt_decode from "jwt-decode";
export const baseUrl="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/"
export const roleUrl = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"


export const tokenToFormData = () => {
    if(localStorage.getItem('token')===null)
        window.location.reload();
    const token = localStorage.getItem('token')
    const decoded = jwt_decode(token)
    console.log(decoded)
    const formData = new FormData()
    formData.append("email", decoded[baseUrl+"emailaddress"])
    formData.append("password", decoded[baseUrl+"authentication"])
    return formData
}

export const getRole = () => {
    if(localStorage.getItem('token')===null)
        window.location.reload();
    const token = localStorage.getItem('token')
    console.log(token)
    const decoded = jwt_decode(token)
    console.log(decoded[roleUrl])
    return decoded[roleUrl]
}