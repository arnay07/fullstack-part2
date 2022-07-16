import personsServices from '../services/personsServices';

const Person = ({ person, setPersons, setMessage, setType }) => {
  const deleteNumber = () => {
    if (window.confirm(`Delete ${person.name}'s number ?`)) {
      personsServices
        .deletePerson(person.id)
        .then(() => {
          setPersons((persons) => persons.filter((p) => p.id !== person.id));
        })
        .catch((error) => {
          setType('error');
          setMessage(`${person.name}'s number was already deleted`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        });
    }
  };

  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td>
        <button type="button" onClick={deleteNumber}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Person;
