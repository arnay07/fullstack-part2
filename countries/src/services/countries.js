import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const getAllCountries = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};

const options = {
  method: 'GET',
  url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
  headers: {
    'X-RapidAPI-Key': '5aa75e7064msh95076b2df413cc8p16ab44jsnd27dde092898',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
  },
};

const getWeather = async (lat, lon) => {
  return axios.request({ ...options, params: { lon: lon, lat: lat } });
};

const countriesServices = {
  getAllCountries,
  getWeather,
};

export default countriesServices;
