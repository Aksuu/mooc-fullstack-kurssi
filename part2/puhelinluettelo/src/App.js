import { useState } from 'react'

const Person = ({ person }) => {
  return (
    <p>{person.name} {person.number}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addContact = (event) => {
    event.preventDefault()

    const filterDuplicates = persons.filter((person) => person.name === newName)

    if (filterDuplicates.length === 0) {
      const contactObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(contactObject))
      } else {
        alert(`${newName} already exists in the phonebook.`)
      }

    setNewName('')
    setNewNumber('')
}

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          Name: <input
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          Number: <input
                  value={newNumber}
                  onChange={handleNumberChange}
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person =>
                    <Person key={person.name} person={person}/>)}
      <ul>
        {persons.name} {persons.number}
      </ul>
    </div>
  )
}

export default App
