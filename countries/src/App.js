import { useState, useEffect } from 'react';
import countriesServices from './services/countries';
import Display from './components/Display';

function App() {
  const [countries, setCountries] = useState([]);
  const [showCountry, setShowCountry] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    countriesServices
      .getAllCountries()
      .then((countries) => setCountries(countries));
  }, []);

  const handleSearchChange = (event) => {
    setShowCountry(false);
    const countriesToShow = countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    if (countriesToShow.length === 1) {
      setShowCountry(true);
    }
    setFilteredCountries(countriesToShow);
  };

  return (
    <div>
      <div>
        <span> Find countries </span>
        <input type="text" onChange={handleSearchChange} />
      </div>
      <Display
        countries={filteredCountries}
        showCountry={showCountry}
        setShowCountry={setShowCountry}
      />
    </div>
  );
}

export default App;
