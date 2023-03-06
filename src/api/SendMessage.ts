import {DataMessageType} from "../Components/Main/Contacts/Contacts";
import axios from "axios";

export const sendMessage = async (data: DataMessageType) => {
  try {
    const res = await axios.post('http://localhost:3000/new-email', data)
    return res.data
  }catch (e){
    console.log(e)
  }
}

