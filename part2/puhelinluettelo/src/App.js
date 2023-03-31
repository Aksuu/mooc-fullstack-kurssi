import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'
import contactService from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({ name: "", number: "" })
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    contactService
      .getAll()
        .then(initialContacts => {
          setPersons(initialContacts)
          setContacts(initialContacts)
        })
  }, [])

  const addContact = (event) => {
    event.preventDefault()

    const filterDuplicates = persons.filter((person) => person.name === newPerson.name)

    if (filterDuplicates.length === 0) {
      contactService
        .create(newPerson)
          .then(returnedContact => {
            setNewPerson(persons.concat(returnedContact))
            setContacts(persons.concat(returnedContact))
          })
      } else {
        alert(`${newPerson.name} already exists in the phonebook.`)
      }

    setNewPerson({ name: "", number: "" })
}

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewPerson({ ...newPerson, [name]: value })
  }

  const deleteContact = (id, name) => {
    if (window.confirm(`Are you sure you wish to delete ${name}?`)) {
      contactService
        .remove(id)
        .then(response => {
          const updatedContacts = persons.filter(person => person.id !== id)
          setPersons(updatedContacts)
          setContacts(updatedContacts)
        })
    }
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
        <Contacts contacts={contacts} deleteContact={deleteContact}/>
    </div>
  )
}

export default App
