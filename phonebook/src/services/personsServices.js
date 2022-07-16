import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + 'persons';

const getPersons = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getPerson = (id) => {
  return axios.get(`API_URL/${id}`);
};

const createPerson = async (person) => {
  const response = await axios.post(API_URL, person);
  return response.data;
};

const updatePerson = async (person) => {
  const response = await axios.put(`${API_URL}/${person.id}`, person);
  return response.data;
};

const deletePerson = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

//eslint-disable-next-line
export default {
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
};
