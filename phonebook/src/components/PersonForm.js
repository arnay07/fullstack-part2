import { useState } from 'react';

import personsServices from '../services/personsServices';

const PersonForm = ({ persons, setPersons, message, setMessage, setType }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newName === '' || newNumber === '') {
      alert('Name and number are required');
      return;
    }
    let personWithSameName = persons.find((p) => p.name === newName);
    if (personWithSameName) {
      personWithSameName = { ...personWithSameName, number: newNumber };
      if (
        window.confirm(`${newName} is already added to the phonebook. 
    Replace the old number with a new one?`)
      ) {
        personsServices
          .updatePerson(personWithSameName)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === updatedPerson.id ? updatedPerson : person
              )
            );
            setType('success');
            setMessage(`Updated ${newName}'s number successfully`);
            setTimeout(() => {
              setMessage(null);
              setType(null);
            }, 5000);
            setNewName('');
            setNewNumber('');
          });
      }
    } else {
      const person = {
        name: newName,
        number: newNumber,
        id: Math.floor(Math.random() * 1000000),
      };

      personsServices.createPerson(person).then((createdPerson) => {
        setPersons((persons) => [...persons, createdPerson]);
        setMessage(`Added ${newName} successfully`);
        setType('success');
        setTimeout(() => {
          setMessage(null);
          setType(null);
        }, 5000);
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name <input value={newName} onChange={handleNameChange} /> <br />
          Number <input value={newNumber} onChange={handleNumberChange} />
          &nbsp;
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};
export default PersonForm;
