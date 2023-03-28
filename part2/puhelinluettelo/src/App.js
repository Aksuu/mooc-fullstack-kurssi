import { useState } from 'react'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({ name: "", number: "" })
  const [contacts, setContacts] = useState(persons)

  const addContact = (event) => {
    event.preventDefault()

    const filterDuplicates = persons.filter((person) => person.name === newPerson.name)

    if (filterDuplicates.length === 0) {
      setPersons(persons.concat(newPerson))
      setContacts(contacts.concat(newPerson))
      } else {
        alert(`${newPerson.name} already exists in the phonebook.`)
      }

    setNewPerson({ name: "", number: "" })
}

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewPerson({ ...newPerson, [name]: value })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm
        addContact={addContact}
        newPerson={newPerson}
        handleChange={handleChange}
      />
      <h2>Numbers</h2>
        <Contacts contacts={contacts}/>
    </div>
  )
}

export default App
