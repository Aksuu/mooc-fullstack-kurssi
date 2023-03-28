import { useState } from 'react'

const Person = ({ person }) => {
  return (
    <p>{person.name}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Aksu' }
  ])
  const [newName, setNewName] = useState('')
  const [filterName, setFilterName] = useState(true)

  const addName = (event) => {
    event.preventDefault()

    const filterDuplicates = persons.filter((person) => person.name === newName)
    console.log('Filter: ', {filterDuplicates})

    if (filterDuplicates.length === 0) {
      const nameObject = {
        name: newName
      }
      setPersons(persons.concat(nameObject))
      } else {
        alert(`${newName} already exists in the phonebook.`)
      }

    setNewName('')
};

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => <Person key={person.name} person={person}/>)}
      <div>debug: {newName}</div>
      <ul>
        {persons.name}
      </ul>
    </div>
  )
}

export default App
