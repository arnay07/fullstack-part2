import Person from './Person';

const Persons = ({ persons, filter, setPersons, setMessage, setType }) => {
  return (
    <div>
      <table>
        <tbody>
          {persons.map((person) =>
            person.name.includes(filter) ? (
              <Person
                key={person.id}
                person={person}
                setPersons={setPersons}
                setMessage={setMessage}
                setType={setType}
              />
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Persons;
