import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContacts() {
  const responce = await axios.get(`/contacts`);
  return responce.data;
}
