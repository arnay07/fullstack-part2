import Country from './Country';

const Display = ({ countries, setShowCountry, showCountry }) => {
  if (countries.length > 10) {
    return <p>Too many countries match the search</p>;
  }

  return (
    <div>
      {countries.map((country) => (
        <Country
          key={country.latlng}
          country={country}
          showCountry={showCountry}
        />
      ))}
    </div>
  );
};

export default Display;
