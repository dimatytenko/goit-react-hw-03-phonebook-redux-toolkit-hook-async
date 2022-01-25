import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContacts() {
  try {
    const responce = await axios.get(`/contacts`).then(res => res.data);
    console.log(responce);
    return responce;
  } catch (error) {
    console.log(error);
  }
}
