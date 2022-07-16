import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsServices from './services/personsServices';
import Notification from './components/Notification';

function App() {
  const [persons, setPersons] = useState([]);
  const [newFilter, setNewFilter] = useState('');
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    personsServices.getPersons().then((initialNumbers) => {
      setPersons(initialNumbers);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={type} />
      <Filter filter={newFilter} setFilter={setNewFilter} />

      <h2>Add new person</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        message={message}
        setMessage={setMessage}
        setType={setType}
      />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter={newFilter}
        setPersons={setPersons}
        setMessage={setMessage}
        setType={setType}
      />
    </div>
  );
}

export default App;
