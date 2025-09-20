import API_ENDPOINTS from "./endpoints"
import axios from "axios";

interface SendEmailPayload {
name: string;
email: string;
message: string;
}

const sendEmail = async(payload: SendEmailPayload) => {
    try{
        const response = await axios.post (`${API_ENDPOINTS.EMAIL}`, payload)
        return response.data
    }catch ( error ) {
        console.error('error in sending email', error)
    }
}

export {sendEmail}