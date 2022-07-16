import React from 'react';
import { useState } from 'react';
import countriesServices from '../services/countries';

const Country = ({ country, showCountry }) => {
  const [temp, setTemp] = useState(null);
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState('');
  const [windSpeed, setWindSpeed] = useState('');

  const hook = () => {
    countriesServices
      .getWeather(country.latlng[0], country.latlng[1])
      .then((res) => {
        setTemp(res.data.data[0].temp);
        setIcon(res.data.data[0].weather.icon);
        setWindSpeed(res.data.data[0].wind_spd);
      });
  };

  const displayCountryInfos = () => {
    setOpen(!open);
    hook();
  };

  const hideCountryInfos = () => {
    setOpen(!open);
  };

  if (open || showCountry) {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          height="100"
          width="100"
        />
        <h3>Weather</h3>
        <p>Temperature {temp}° Celsius</p>

        <img
          //there is a bug with the icon, it calls the api before icon changes value
          src={`http://openweathermap.org/img/wn/${icon.substring(1)}@2x.png`}
          alt={`weather icon`}
        />
        <p>Wind {windSpeed} m/s</p>
        <button onClick={hideCountryInfos}>Hide</button>
      </div>
    );
  }

  return (
    <div>
      <span>{country.name.common}</span> &nbsp;
      <button onClick={displayCountryInfos}>Show</button>
    </div>
  );
};

export default Country;
