import { useState } from 'react'

const Person = ({ person }) => {
  return (
    <p>{person.content}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Aksu' }
  ])
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
    content: newName,
    id: persons.length + 1,
  }
    setPersons(persons.concat(nameObject))
    setNewName('')
}

  const handleNameChange = (event) => {
    console.log(event.target.value)
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
      {persons.map(person => <Person key={person.id} person={person}/>)}
      <div>debug: {newName}</div>
      <ul>
        {persons.name}
      </ul>
    </div>
  )

}

export default App
